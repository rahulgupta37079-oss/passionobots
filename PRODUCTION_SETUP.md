# PassionBots - Production Setup Guide

## 🚀 Complete Deployment Checklist

### Step 1: Create Cloudflare D1 Database
```bash
npx wrangler d1 create passionbots-production
```

**Expected Output:**
```
✅ Successfully created DB 'passionbots-production'

[[d1_databases]]
binding = "DB"
database_name = "passionbots-production"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

**📝 IMPORTANT**: Copy the `database_id` from the output!

### Step 2: Update wrangler.jsonc

Open `wrangler.jsonc` and replace `REPLACE_WITH_ACTUAL_DATABASE_ID`:

```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "passionbots-production",
      "database_id": "YOUR_COPIED_DATABASE_ID"  // ← Paste here
    }
  ]
}
```

### Step 3: Apply Database Migrations
```bash
npm run db:migrate:prod
```

**Expected Output:**
```
🌀 Executing on passionbots-production (xxxxxxxx):
🌀 To execute on your local development database, pass the --local flag to 'wrangler d1 migrations apply'
🚣 Executed 1 migration(s) in 0.50 seconds
```

### Step 4: Verify Database Setup
```bash
# Check if tables were created
npx wrangler d1 execute passionbots-production --command=".schema"
```

You should see tables: `contacts`, `enrollments`, `course_inquiries`

### Step 5: Create Cloudflare Pages Project

```bash
npx wrangler pages project create passionbots \
  --production-branch main \
  --compatibility-date 2024-01-01
```

### Step 6: Deploy to Production
```bash
npm run deploy:prod
```

**Expected Output:**
```
✨ Compiled Worker successfully
✨ Success! Deployed to https://passionbots.pages.dev
```

### Step 7: Test Production Site

Visit your production URLs:
- **Homepage**: https://passionbots.pages.dev
- **Admin**: https://passionbots.pages.dev/admin
- **Courses**: 
  - https://passionbots.pages.dev/course/robotics-fundamentals
  - https://passionbots.pages.dev/course/ai-machine-learning
  - https://passionbots.pages.dev/course/iot-development
  - https://passionbots.pages.dev/course/advanced-automation

### Step 8: Test Contact Form

1. Go to https://passionbots.pages.dev/contact
2. Fill out and submit the form
3. Check admin dashboard: https://passionbots.pages.dev/admin
4. Verify the submission appears in the "Contact Forms" tab

### Step 9: Test Course Enrollment

1. Go to any course page (e.g., /course/robotics-fundamentals)
2. Click "Enroll Now" button
3. Fill out the enrollment form
4. Check admin dashboard "Enrollments" tab
5. Verify the enrollment was recorded

## 🔐 Post-Deployment Security

### 1. Protect Admin Dashboard

Add authentication to `/admin` routes. Example using basic auth:

```typescript
// In src/index.tsx
app.use('/admin/*', async (c, next) => {
  const auth = c.req.header('Authorization')
  if (!auth || auth !== 'Basic ' + btoa('admin:your-password')) {
    return c.text('Unauthorized', 401, {
      'WWW-Authenticate': 'Basic realm="Admin Area"'
    })
  }
  await next()
})
```

### 2. Add Environment Variables

```bash
# Set secret admin password
npx wrangler pages secret put ADMIN_PASSWORD --project-name passionbots

# Set email API key (if using email service)
npx wrangler pages secret put EMAIL_API_KEY --project-name passionbots
```

### 3. Configure Custom Domain (Optional)

```bash
# Add your domain
npx wrangler pages domain add yourdomain.com --project-name passionbots
```

## 📊 Monitor Your Site

### View Deployment History
```bash
npx wrangler pages deployment list --project-name passionbots
```

### View Deployment Logs
```bash
npx wrangler pages deployment tail --project-name passionbots
```

### Check Database Records
```bash
# Count contacts
npx wrangler d1 execute passionbots-production \
  --command="SELECT COUNT(*) as total FROM contacts"

# Count enrollments
npx wrangler d1 execute passionbots-production \
  --command="SELECT COUNT(*) as total FROM enrollments"

# View recent contacts
npx wrangler d1 execute passionbots-production \
  --command="SELECT name, email, created_at FROM contacts ORDER BY created_at DESC LIMIT 5"
```

## 🆘 Troubleshooting

### Issue: "Database not found"
**Solution**: 
1. Verify database was created: `npx wrangler d1 list`
2. Check database_id in wrangler.jsonc is correct
3. Run migrations again: `npm run db:migrate:prod`

### Issue: "Admin dashboard shows 'Database Not Configured'"
**Solution**: 
- The D1 database binding is not available
- Check wrangler.jsonc has correct database configuration
- Redeploy: `npm run deploy:prod`

### Issue: "Contact form submissions not appearing"
**Solution**:
1. Check browser console for errors
2. Test API directly: `curl -X POST https://passionbots.pages.dev/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","message":"Test"}'`
3. Check deployment logs for errors

### Issue: "Course pages not loading"
**Solution**:
1. Verify all 4 course HTML files are in dist/static/pages/
2. Rebuild: `npm run build`
3. Redeploy: `npm run deploy:prod`

## ✅ Success Checklist

- [ ] Database created and ID copied
- [ ] wrangler.jsonc updated with database_id
- [ ] Migrations applied successfully
- [ ] Cloudflare Pages project created
- [ ] Code deployed to production
- [ ] Homepage loads correctly
- [ ] All 4 course pages accessible
- [ ] Contact form saves to database
- [ ] Admin dashboard shows submissions
- [ ] Enrollment form works
- [ ] WhatsApp links functional

## 📝 Next Steps

1. **Add Authentication**: Protect admin routes
2. **Set up Email Notifications**: Get notified of new submissions
3. **Add Analytics**: Track visitor behavior
4. **Configure Custom Domain**: Use your own domain
5. **Enable CAPTCHA**: Prevent spam submissions
6. **Set up Monitoring**: Use Cloudflare Analytics

## 🎉 Your Site is Live!

**Production URL**: https://passionbots.pages.dev  
**Admin Dashboard**: https://passionbots.pages.dev/admin  
**GitHub**: https://github.com/rahulgupta37079-oss/passionobots

Share your live site with students and start receiving enrollments!
