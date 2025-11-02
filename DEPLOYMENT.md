# PassionBots Deployment Guide

## Prerequisites
- Cloudflare account
- Cloudflare API token configured
- GitHub repository set up

## Quick Start

### 1. Create D1 Database (One-time setup)
```bash
npx wrangler d1 create passionbots-production
```

This will output a database ID. **Copy this ID!**

### 2. Update wrangler.jsonc
Replace `REPLACE_WITH_ACTUAL_DATABASE_ID` in `wrangler.jsonc` with the actual database ID:

```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "passionbots-production",
      "database_id": "YOUR_ACTUAL_DATABASE_ID_HERE"
    }
  ]
}
```

### 3. Apply Database Migrations
```bash
# Apply migrations to production database
npm run db:migrate:prod
```

### 4. Create Cloudflare Pages Project (One-time setup)
```bash
npx wrangler pages project create passionbots \
  --production-branch main \
  --compatibility-date 2024-01-01
```

### 5. Deploy to Cloudflare Pages
```bash
npm run deploy:prod
```

## Local Development with Database

### Start with Local D1 Database
```bash
# Apply migrations to local database
npm run db:migrate:local

# Start development server with D1
npm run dev:d1
```

### Test Database Locally
```bash
# Execute SQL query on local database
npx wrangler d1 execute passionbots-production --local --command="SELECT COUNT(*) FROM contacts"
```

## Admin Dashboard

Access the admin dashboard at:
- **Local**: http://localhost:3000/admin
- **Production**: https://passionbots.pages.dev/admin

**Note**: In production, add authentication to protect the admin dashboard!

## Database Operations

### View Database Schema
```bash
npx wrangler d1 execute passionbots-production --local --command=".schema"
```

### Query Contacts
```bash
npx wrangler d1 execute passionbots-production --local --command="SELECT * FROM contacts LIMIT 10"
```

### Query Enrollments
```bash
npx wrangler d1 execute passionbots-production --local --command="SELECT * FROM enrollments LIMIT 10"
```

## Troubleshooting

### Database Not Found
If you see "Database not found" errors, make sure:
1. You've created the database: `npm run db:create`
2. You've updated the database_id in wrangler.jsonc
3. You've applied migrations: `npm run db:migrate:prod`

### Admin Dashboard Shows "Database Not Configured"
This means the D1 database is not available. In local development:
- Use `npm run dev:d1` instead of `npm run dev:sandbox`
- Apply local migrations: `npm run db:migrate:local`

### Deployment Fails
1. Check Cloudflare API token permissions
2. Verify wrangler.jsonc configuration
3. Ensure database_id is correct
4. Check deployment logs: `npx wrangler pages deployment list --project-name passionbots`

## Course Pages

All 4 courses are now live:
- **Robotics Fundamentals**: /course/robotics-fundamentals
- **AI & Machine Learning**: /course/ai-machine-learning
- **IoT Development**: /course/iot-development
- **Advanced Automation**: /course/advanced-automation

## API Endpoints

### Public Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/enroll` - Submit course enrollment
- `POST /api/course-inquiry` - Track course inquiries
- `GET /api/courses` - Get all courses
- `GET /api/course/:slug` - Get course details

### Admin Endpoints (Protect these in production!)
- `GET /api/admin/contacts` - Get all contact submissions
- `GET /api/admin/enrollments` - Get all course enrollments
- `GET /api/admin/stats` - Get dashboard statistics

## Security Recommendations

1. **Protect Admin Routes**: Add authentication middleware for `/admin` and `/api/admin/*`
2. **Rate Limiting**: Implement rate limiting on form submissions
3. **Input Validation**: Add proper validation for all form inputs
4. **CORS Configuration**: Configure CORS properly for production
5. **API Keys**: Use environment variables for sensitive data

## Next Steps

1. ✅ Database created and configured
2. ✅ Migrations applied
3. ✅ Code deployed to GitHub
4. ⏳ Deploy to Cloudflare Pages
5. ⏳ Test all course pages
6. ⏳ Verify contact form submissions
7. ⏳ Check admin dashboard functionality
