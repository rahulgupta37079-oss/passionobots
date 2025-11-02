# PassionBots - Robotics & AI Education Platform

A comprehensive education platform offering robotics, AI, IoT, and automation courses with hands-on projects and industry certifications.

## 🚀 Live URLs

- **Production**: Will be deployed to Cloudflare Pages
- **GitHub**: https://github.com/rahulgupta37079-oss/passionobots
- **Admin Dashboard**: /admin (requires setup)

## ✨ Features

### 🎓 Course System
- **4 Complete Courses** with detailed curricula:
  - Robotics Fundamentals (Beginner, ₹4,999)
  - AI & Machine Learning (Intermediate, ₹7,999)
  - IoT Development (Intermediate, ₹5,999)
  - Advanced Automation (Advanced, ₹9,999)

- **Dual Certification**: Course Completion + Internship Certificate
- **8-Week Programs**: Comprehensive hands-on training
- **Industry Partnerships**: Aligned with Amazon, Google, Siemens, ABB, etc.

### 📊 Database Integration
- **Cloudflare D1** database for data persistence
- **Contact Management**: Track all form submissions
- **Enrollment Tracking**: Monitor course enrollments
- **Course Inquiries**: Log WhatsApp and direct inquiries

### 🎨 User Experience
- **Modern Design**: Black, yellow, and white color scheme
- **Fully Responsive**: Mobile-first approach
- **Course Dropdown Menu**: Easy navigation like Corizo.in
- **WhatsApp Integration**: Direct course inquiries
- **FAQ Sections**: Interactive accordion on all course pages

### 📱 Pages
1. **Home** - Hero, featured courses, testimonials, stats
2. **About** - Company vision and mission
3. **Products** - Robotics kits and hardware
4. **Courses** - All 4 courses overview
5. **Gallery** - Student projects and events
6. **Contact** - Multi-purpose contact form
7. **Login/Signup** - User authentication
8. **Admin Dashboard** - View all submissions
9. **4 Course Detail Pages** - Complete curriculum and enrollment

## 🛠️ Tech Stack

- **Framework**: Hono (lightweight web framework)
- **Runtime**: Cloudflare Workers/Pages
- **Database**: Cloudflare D1 (SQLite)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6
- **HTTP Client**: Axios
- **Deployment**: Cloudflare Pages

## 📂 Project Structure

```
webapp/
├── src/
│   ├── index.tsx           # Main Hono application
│   └── types/
│       └── bindings.ts     # TypeScript type definitions
├── public/
│   └── static/
│       ├── pages/          # All HTML pages
│       ├── css/            # Custom styles
│       └── js/             # Frontend JavaScript
├── migrations/
│   └── 0001_create_contacts.sql  # Database schema
├── dist/                   # Built files for deployment
├── wrangler.jsonc          # Cloudflare configuration
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── ecosystem.config.cjs    # PM2 configuration
├── DEPLOYMENT.md           # Deployment guide
└── README.md               # This file
```

## 🚀 Quick Start

### Installation
```bash
# Clone repository
git clone https://github.com/rahulgupta37079-oss/passionobots.git
cd passionobots

# Install dependencies
npm install

# Build the project
npm run build

# Start development server (without database)
npm run dev:sandbox

# Start development server (with local D1 database)
npm run db:migrate:local
npm run dev:d1
```

### Environment Setup
See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete setup instructions.

## 📊 Data Architecture

### Database Tables

**contacts** - Contact form submissions
- id, name, email, phone, subject, message, source, status, created_at, updated_at

**enrollments** - Course enrollments
- id, name, email, phone, course_slug, course_name, college, graduation_year, experience_level, hear_about_us, status, payment_status, created_at, updated_at

**course_inquiries** - Direct course inquiries
- id, name, email, phone, course_slug, course_name, inquiry_type, message, status, created_at

## 🔌 API Endpoints

### Public APIs
```
GET  /api/courses              - Get all courses
GET  /api/course/:slug         - Get course details
POST /api/contact              - Submit contact form
POST /api/enroll               - Submit enrollment
POST /api/course-inquiry       - Track course inquiry
GET  /api/testimonials         - Get testimonials
GET  /api/whatsapp-testimonials - Get WhatsApp-style testimonials
GET  /api/why-choose           - Get reasons to choose PassionBots
GET  /api/stats                - Get platform statistics
```

### Admin APIs (Protected in production)
```
GET  /api/admin/contacts       - Get all contact submissions
GET  /api/admin/enrollments    - Get all enrollments
GET  /api/admin/stats          - Get dashboard statistics
```

## 📝 Development Scripts

```bash
# Development
npm run dev                 # Vite dev server
npm run dev:sandbox         # Wrangler local server
npm run dev:d1              # Wrangler with local D1

# Building
npm run build               # Build for production

# Deployment
npm run deploy              # Deploy to Cloudflare Pages
npm run deploy:prod         # Deploy to production

# Database
npm run db:create           # Create D1 database
npm run db:migrate:local    # Apply migrations locally
npm run db:migrate:prod     # Apply migrations to production
npm run db:console:local    # SQL console (local)
npm run db:console:prod     # SQL console (production)

# Git
npm run git:status          # Git status
npm run git:commit "msg"    # Commit with message
npm run git:log             # View commit history

# Utilities
npm run clean-port          # Kill port 3000
npm run test                # Test local server
```

## 📧 Contact Information

- **Email**: sales@passionbots.in
- **Phone**: +91 9137361474
- **WhatsApp**: https://wa.me/919137361474

## 🎯 Course Pages

1. **/course/robotics-fundamentals** - Complete robotics course with Arduino & Raspberry Pi
2. **/course/ai-machine-learning** - Build AI models with TensorFlow and Python
3. **/course/iot-development** - Create smart IoT systems with ESP32
4. **/course/advanced-automation** - Master PLC, SCADA, and industrial robotics

## 🔐 Security Notes

⚠️ **Important**: Before going to production:
1. Add authentication to `/admin` routes
2. Implement rate limiting on form submissions
3. Add input validation and sanitization
4. Configure proper CORS policies
5. Use environment variables for sensitive data
6. Enable CAPTCHA on contact forms

## 📄 License

Copyright © 2024 PassionBots. All rights reserved.

## 🤝 Contributing

This is a private project. Contact sales@passionbots.in for inquiries.

## 🆘 Support

For technical issues or questions:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- Email: sales@passionbots.in
- GitHub Issues: https://github.com/rahulgupta37079-oss/passionobots/issues

---

**Built with ❤️ by PassionBots Team**
