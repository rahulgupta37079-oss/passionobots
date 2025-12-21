# 🚀 Manual Cloudflare Pages Deployment Guide

## ✅ Your Deployment Status

**Previous Successful Deployment:**
- ✅ Project Created: `passionbots`
- ✅ Deployment URL: https://94d8d222.passionbots.pages.dev
- ✅ Main URL: https://passionbots.pages.dev
- ✅ Database: Configured and migrated
- ✅ Code: Built in `dist/` folder

---

## 🔄 Option 1: Deploy via Wrangler CLI (Recommended)

### **From Your Local Machine:**

```bash
# 1. Navigate to project
cd /home/user/webapp

# 2. Make sure you're logged in to Cloudflare
npx wrangler login

# 3. Build the project
npm run build

# 4. Deploy to Pages
npx wrangler pages deploy dist --project-name passionbots

# Your site will be live at: https://passionbots.pages.dev
```

### **Expected Output:**
```
✨ Success! Uploaded 20 files
✨ Deployment complete!
🌎 https://passionbots.pages.dev
```

---

## 🌐 Option 2: Deploy via Cloudflare Dashboard (Alternative)

### **Step-by-Step:**

1. **Go to Cloudflare Dashboard:**
   - Visit: https://dash.cloudflare.com/
   - Login with your account

2. **Navigate to Pages:**
   - Click "Workers & Pages" in left sidebar
   - Click "passionbots" project

3. **Create Direct Upload Deployment:**
   - Click "Create deployment" button
   - Click "Direct upload"
   - Upload the `dist` folder contents

4. **Upload Files:**
   - Drag and drop these files from `dist/`:
     - `_worker.js`
     - `_routes.json`
     - `static/` folder (entire folder)

5. **Deploy:**
   - Click "Deploy site"
   - Wait for deployment to complete
   - Your site will be live!

---

## 📁 Option 3: Connect GitHub (Automated Deployments)

### **Best for Continuous Deployment:**

1. **Go to Pages Project Settings:**
   - Dashboard → Workers & Pages → passionbots → Settings

2. **Connect to Git:**
   - Click "Connect to Git"
   - Choose "GitHub"
   - Authorize Cloudflare
   - Select repository: `rahulgupta37079-oss/passionobots`

3. **Configure Build:**
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   Environment variables: (none needed for basic setup)
   ```

4. **Save and Deploy:**
   - Click "Save and Deploy"
   - Every push to `main` branch will auto-deploy!

---

## 🗄️ Bind D1 Database to Pages

**IMPORTANT:** After deployment, bind the database:

### **Via Cloudflare Dashboard:**

1. **Go to Pages Project:**
   - Dashboard → Workers & Pages → passionbots

2. **Settings → Functions:**
   - Click "D1 database bindings"
   - Click "Add binding"

3. **Configure Binding:**
   ```
   Variable name: DB
   D1 database: passionbots-production
   ```

4. **Save:**
   - Click "Save"
   - This enables database access in production

### **Via Wrangler CLI:**

The database binding is already in `wrangler.jsonc`:
```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "passionbots-production",
      "database_id": "08e65c8c-7647-404c-99ff-eda4f10cec9d"
    }
  ]
}
```

This should automatically work with Pages deployments.

---

## ✅ Verify Deployment

### **Test Your Live Site:**

1. **Homepage:**
   - https://passionbots.pages.dev

2. **Courses:**
   - https://passionbots.pages.dev/course/robotics-fundamentals
   - https://passionbots.pages.dev/course/ai-machine-learning
   - https://passionbots.pages.dev/course/iot-development
   - https://passionbots.pages.dev/course/advanced-automation

3. **Gallery:**
   - https://passionbots.pages.dev/gallery

4. **Admin Dashboard:**
   - https://passionbots.pages.dev/admin

5. **Contact Form:**
   - https://passionbots.pages.dev/contact

---

## 🔍 Troubleshooting

### **Issue: Database Not Working**

**Check D1 Binding:**
```bash
# List Pages projects
npx wrangler pages project list

# View project details
npx wrangler pages project view passionbots
```

**Fix:**
- Go to Dashboard → passionbots → Settings → Functions
- Add D1 binding (see instructions above)

### **Issue: Site Shows Old Version**

**Clear Cache:**
1. Force browser refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Or open in incognito/private window

**Redeploy:**
```bash
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name passionbots
```

### **Issue: 404 Errors on Routes**

**Check _routes.json:**
```bash
cat dist/_routes.json
```

Should include:
```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": []
}
```

### **Issue: Can't Access Wrangler**

**Re-authenticate:**
```bash
npx wrangler login
# This opens browser to login
```

---

## 📊 View Deployment Logs

### **Via Cloudflare Dashboard:**
1. Dashboard → Workers & Pages → passionbots
2. Click "View details" on latest deployment
3. See build logs and any errors

### **Via Wrangler CLI:**
```bash
# View recent deployments
npx wrangler pages deployment list --project-name passionbots

# Tail logs
npx wrangler pages deployment tail --project-name passionbots
```

---

## 🎯 Quick Deployment Checklist

- [ ] Build completed: `npm run build`
- [ ] Dist folder exists: `ls dist/`
- [ ] Logged in to Cloudflare: `npx wrangler whoami`
- [ ] Deploy command: `npx wrangler pages deploy dist --project-name passionbots`
- [ ] Database binding configured in dashboard
- [ ] Test all URLs work
- [ ] Admin dashboard accessible
- [ ] Contact form saves to database

---

## 🔗 Your Deployment URLs

**Primary URLs:**
- https://passionbots.pages.dev (main domain)
- https://94d8d222.passionbots.pages.dev (deployment URL)

**Custom Domain (Optional):**
- You can add your own domain in Dashboard → Settings → Custom domains

**GitHub:**
- https://github.com/rahulgupta37079-oss/passionobots

**Database:**
- passionbots-production (08e65c8c-7647-404c-99ff-eda4f10cec9d)

---

## 📞 If You Need Help

**Cloudflare Support:**
- Dashboard: https://dash.cloudflare.com/
- Docs: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/

**Your Current Status:**
✅ Database created and migrated  
✅ Project created on Cloudflare  
✅ Code built and ready  
✅ Previous deployment successful  
⏳ New deployment in progress  

**Next Step:** Use one of the 3 deployment options above to push your latest code!

---

## 🎉 Once Deployed

Your complete PassionBots platform will be live with:
- ✅ All 4 course pages
- ✅ Contact management system
- ✅ Admin dashboard
- ✅ Gallery page
- ✅ Database integration
- ✅ Mobile responsive
- ✅ Global CDN
- ✅ HTTPS secure

**Share your live URL with students and start receiving enrollments! 🚀**
