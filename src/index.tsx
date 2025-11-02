import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import type { Bindings } from './types/bindings'

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// API Routes
app.get('/api/products', (c) => {
  const products = [
    {
      id: 1,
      name: "Arduino Starter Kit",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=300&fit=crop",
      description: "Complete kit for beginners with Arduino UNO, sensors, and components"
    },
    {
      id: 2,
      name: "Raspberry Pi Robot Kit",
      price: "₹5,999",
      image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=300&fit=crop",
      description: "Advanced robotics kit with Raspberry Pi 4 and motor controllers"
    },
    {
      id: 3,
      name: "IoT Smart Home Kit",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
      description: "Build your own smart home automation system"
    },
    {
      id: 4,
      name: "AI Vision Camera Module",
      price: "₹4,299",
      image: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=400&h=300&fit=crop",
      description: "Computer vision module with AI capabilities"
    },
    {
      id: 5,
      name: "Drone Builder Kit",
      price: "₹8,999",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
      description: "Build and program your own autonomous drone"
    },
    {
      id: 6,
      name: "3D Printing Starter Pack",
      price: "₹6,499",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      description: "Everything you need to start 3D printing robotics parts"
    }
  ]
  return c.json(products)
})

app.get('/api/courses', (c) => {
  const courses = [
    {
      id: 1,
      slug: "robotics-fundamentals",
      name: "Robotics Fundamentals Internship",
      price: "₹4,999",
      duration: "2 Months",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      description: "Master robotics fundamentals with hands-on projects - Internship Program",
      shortDesc: "Learn robotics basics, electronics, and programming with real projects"
    },
    {
      id: 2,
      slug: "ai-machine-learning",
      name: "AI & Machine Learning Internship",
      price: "₹7,999",
      duration: "2 Months",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      description: "Build AI models and deploy ML solutions - Internship Program",
      shortDesc: "Master AI concepts and implement ML models in real applications"
    },
    {
      id: 3,
      slug: "iot-development",
      name: "IoT Development Internship",
      price: "₹5,999",
      duration: "2 Months",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop",
      description: "Create smart IoT solutions and connected devices - Internship Program",
      shortDesc: "Build connected devices and smart systems with IoT protocols"
    },
    {
      id: 4,
      slug: "advanced-automation",
      name: "Advanced Automation Internship",
      price: "₹9,999",
      duration: "2 Months",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      description: "Design industrial automation systems - Internship Program",
      shortDesc: "Industrial automation and control systems for manufacturing"
    }
  ]
  return c.json(courses)
})

app.get('/api/course/:slug', (c) => {
  const slug = c.req.param('slug')
  const courseDetails = {
    'robotics-fundamentals': {
      id: 1,
      slug: "robotics-fundamentals",
      name: "Robotics Fundamentals Internship",
      tagline: "Master Robotics from Scratch with Industry Projects",
      price: "₹4,999",
      originalPrice: "₹9,999",
      discount: "50% OFF",
      duration: "2 Months",
      level: "Beginner",
      mode: "Online + Hands-on Projects",
      enrolled: "2,500+ Students",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      description: "Comprehensive robotics internship program with hands-on projects, industry mentorship, and dual certification",
      
      highlights: [
        "Build 5+ Real Robotics Projects",
        "2 Industry-Recognized Certificates",
        "Live Mentorship from IIT/NIT Experts",
        "Guaranteed Placement Assistance",
        "Premium Arduino & Raspberry Pi Kit",
        "Lifetime Course Access & Updates"
      ],
      
      certificates: [
        { name: "Robotics Fundamentals Completion Certificate", issuer: "PassionBots Academy" },
        { name: "Project Internship Certificate", issuer: "PassionBots & Partner Companies" }
      ],
      
      curriculum: "8 Weeks - Detailed curriculum available",
      
      instructor: {
        name: "Dr. Rajesh Kumar",
        designation: "Senior Robotics Engineer",
        experience: "12+ years in Robotics & Automation",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        credentials: [
          "PhD in Robotics from IIT Delhi",
          "Ex-Amazon Robotics Team Lead",
          "Published 15+ Research Papers",
          "Mentored 2000+ Students"
        ]
      },
      
      companies: [
        "Amazon Robotics", "ABB Robotics", "KUKA", "Fanuc", "Boston Dynamics", "Tesla"
      ],
      
      whyChoose: [
        { icon: "fa-tools", title: "Premium Kits", desc: "Industry-standard Arduino & Raspberry Pi kits included" },
        { icon: "fa-users", title: "Expert Mentors", desc: "Learn from IIT/NIT alumni working at top companies" },
        { icon: "fa-certificate", title: "Dual Certification", desc: "Get 2 certificates valued by 200+ companies" },
        { icon: "fa-project-diagram", title: "Real Projects", desc: "Build 5+ portfolio-worthy robotics projects" },
        { icon: "fa-briefcase", title: "Job Guarantee", desc: "95% placement rate with partner companies" },
        { icon: "fa-infinity", title: "Lifetime Access", desc: "All materials, recordings & updates forever" }
      ]
    }
  }
  
  const course = courseDetails[slug]
  if (course) {
    return c.json(course)
  }
  return c.json({ error: "Course not found" }, 404)
})

app.post('/api/contact', async (c) => {
  try {
    const data = await c.req.json()
    const { name, email, phone, subject, message } = data
    
    // Save to database if DB is available (production)
    if (c.env?.DB) {
      await c.env.DB.prepare(`
        INSERT INTO contacts (name, email, phone, subject, message, source, status)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(name, email, phone || null, subject || 'General Inquiry', message, 'contact_form', 'new').run()
    } else {
      // Development mode - just log
      console.log('Contact form submission:', data)
    }
    
    return c.json({ 
      success: true, 
      message: 'Thank you! We will contact you soon. Our team will reach out within 24 hours.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ 
      success: false, 
      message: 'Something went wrong. Please try again or contact us at sales@passionbots.in' 
    }, 500)
  }
})

app.post('/api/auth/login', async (c) => {
  const { email, password } = await c.req.json()
  // In production, implement proper authentication
  if (email && password) {
    return c.json({ 
      success: true, 
      user: { email, name: 'User' },
      message: 'Login successful' 
    })
  }
  return c.json({ success: false, message: 'Invalid credentials' }, 401)
})

app.post('/api/auth/signup', async (c) => {
  const { name, email, password } = await c.req.json()
  // In production, implement proper user registration
  if (name && email && password) {
    return c.json({ 
      success: true, 
      user: { email, name },
      message: 'Registration successful' 
    })
  }
  return c.json({ success: false, message: 'Invalid data' }, 400)
})

// Course enrollment API
app.post('/api/enroll', async (c) => {
  try {
    const data = await c.req.json()
    const { name, email, phone, course_slug, course_name, college, graduation_year, experience_level, hear_about_us } = data
    
    // Validate required fields
    if (!name || !email || !phone || !course_slug || !course_name) {
      return c.json({ success: false, message: 'Missing required fields' }, 400)
    }
    
    // Save to database if DB is available
    if (c.env?.DB) {
      await c.env.DB.prepare(`
        INSERT INTO enrollments (name, email, phone, course_slug, course_name, college, graduation_year, experience_level, hear_about_us, status, payment_status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        name, email, phone, course_slug, course_name,
        college || null, graduation_year || null, experience_level || null,
        hear_about_us || null, 'pending', 'unpaid'
      ).run()
    } else {
      console.log('Enrollment submission:', data)
    }
    
    return c.json({ 
      success: true, 
      message: 'Enrollment request received! Our team will contact you within 24 hours with payment details.' 
    })
  } catch (error) {
    console.error('Enrollment error:', error)
    return c.json({ 
      success: false, 
      message: 'Failed to submit enrollment. Please contact sales@passionbots.in' 
    }, 500)
  }
})

// Course inquiry API (for WhatsApp clicks, etc.)
app.post('/api/course-inquiry', async (c) => {
  try {
    const data = await c.req.json()
    const { name, email, phone, course_slug, course_name, inquiry_type, message } = data
    
    if (!course_slug || !course_name) {
      return c.json({ success: false, message: 'Invalid course information' }, 400)
    }
    
    if (c.env?.DB) {
      await c.env.DB.prepare(`
        INSERT INTO course_inquiries (name, email, phone, course_slug, course_name, inquiry_type, message, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        name || null, email || null, phone || null,
        course_slug, course_name, inquiry_type || 'general', message || null, 'new'
      ).run()
    }
    
    return c.json({ success: true, message: 'Inquiry recorded' })
  } catch (error) {
    console.error('Inquiry error:', error)
    return c.json({ success: false, message: 'Failed to record inquiry' }, 500)
  }
})

// Admin API - Get all contacts (protected - add authentication in production)
app.get('/api/admin/contacts', async (c) => {
  try {
    if (!c.env?.DB) {
      return c.json({ success: false, message: 'Database not configured' }, 500)
    }
    
    const result = await c.env.DB.prepare(`
      SELECT id, name, email, phone, subject, message, source, status, created_at
      FROM contacts
      ORDER BY created_at DESC
      LIMIT 100
    `).all()
    
    return c.json({ success: true, contacts: result.results })
  } catch (error) {
    console.error('Admin contacts error:', error)
    return c.json({ success: false, message: 'Failed to fetch contacts' }, 500)
  }
})

// Admin API - Get all enrollments
app.get('/api/admin/enrollments', async (c) => {
  try {
    if (!c.env?.DB) {
      return c.json({ success: false, message: 'Database not configured' }, 500)
    }
    
    const result = await c.env.DB.prepare(`
      SELECT id, name, email, phone, course_slug, course_name, college, graduation_year, 
             experience_level, hear_about_us, status, payment_status, created_at
      FROM enrollments
      ORDER BY created_at DESC
      LIMIT 100
    `).all()
    
    return c.json({ success: true, enrollments: result.results })
  } catch (error) {
    console.error('Admin enrollments error:', error)
    return c.json({ success: false, message: 'Failed to fetch enrollments' }, 500)
  }
})

// Admin API - Get dashboard stats
app.get('/api/admin/stats', async (c) => {
  try {
    if (!c.env?.DB) {
      return c.json({ success: false, message: 'Database not configured' }, 500)
    }
    
    // Get counts
    const contactsCount = await c.env.DB.prepare('SELECT COUNT(*) as count FROM contacts').first()
    const enrollmentsCount = await c.env.DB.prepare('SELECT COUNT(*) as count FROM enrollments').first()
    const inquiriesCount = await c.env.DB.prepare('SELECT COUNT(*) as count FROM course_inquiries').first()
    
    // Get recent activity
    const recentContacts = await c.env.DB.prepare(`
      SELECT name, email, created_at FROM contacts ORDER BY created_at DESC LIMIT 5
    `).all()
    
    const recentEnrollments = await c.env.DB.prepare(`
      SELECT name, email, course_name, created_at FROM enrollments ORDER BY created_at DESC LIMIT 5
    `).all()
    
    return c.json({
      success: true,
      stats: {
        total_contacts: contactsCount?.count || 0,
        total_enrollments: enrollmentsCount?.count || 0,
        total_inquiries: inquiriesCount?.count || 0,
        recent_contacts: recentContacts.results,
        recent_enrollments: recentEnrollments.results
      }
    })
  } catch (error) {
    console.error('Admin stats error:', error)
    return c.json({ success: false, message: 'Failed to fetch stats' }, 500)
  }
})

app.get('/api/testimonials', (c) => {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Patel",
      role: "Engineering Student",
      college: "IIT Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      rating: 5,
      text: "PassionBots transformed my understanding of robotics! The hands-on projects and expert guidance helped me build my own autonomous robot. Highly recommended for anyone serious about robotics.",
      course: "Robotics Fundamentals"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Computer Science Student",
      college: "BITS Pilani",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 5,
      text: "The AI & Machine Learning course exceeded my expectations. The curriculum is industry-relevant and the instructors are incredibly knowledgeable. I got placed at a top tech company!",
      course: "AI & Machine Learning"
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Tech Enthusiast",
      college: "NIT Trichy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      rating: 5,
      text: "Best investment I made! The IoT course was practical and engaging. Within 3 months, I built my own smart home system. The support from instructors was exceptional.",
      course: "IoT Development"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Robotics Engineer",
      college: "VIT Vellore",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
      rating: 5,
      text: "PassionBots helped me transition from theory to practice. The advanced automation course gave me skills that directly translate to my job. Worth every penny!",
      course: "Advanced Automation"
    },
    {
      id: 5,
      name: "Karthik Kumar",
      role: "Final Year Student",
      college: "Anna University",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      rating: 5,
      text: "The quality of kits and learning materials is outstanding. I completed my final year project using their drone kit and won first prize. Thank you PassionBots!",
      course: "Drone Technology"
    },
    {
      id: 6,
      name: "Ananya Singh",
      role: "Startup Founder",
      college: "IIT Bombay",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
      rating: 5,
      text: "Started my robotics startup after completing courses at PassionBots. The mentorship and technical knowledge I gained here was invaluable. Couldn't have done it without them!",
      course: "Robotics Fundamentals"
    }
  ]
  return c.json(testimonials)
})

app.get('/api/stats', (c) => {
  const stats = {
    students: "5000+",
    courses: "50+",
    projects: "1000+",
    rating: "4.9",
    placement: "95%",
    companies: "200+"
  }
  return c.json(stats)
})

app.get('/api/whatsapp-testimonials', (c) => {
  const whatsappTestimonials = [
    {
      id: 1,
      name: "Rohit Sharma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      time: "10:30 AM",
      messages: [
        "Just completed the Robotics Fundamentals course! 🤖",
        "The hands-on approach was amazing",
        "Built my first autonomous robot in just 8 weeks",
        "Instructor support was incredible 👍"
      ],
      typing: false
    },
    {
      id: 2,
      name: "Anjali Gupta",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      time: "11:15 AM",
      messages: [
        "Best decision ever! 💯",
        "Got placed at a top tech company",
        "The AI & ML course gave me exactly what the industry needed",
        "Salary increased by 60% 🚀"
      ],
      typing: false
    },
    {
      id: 3,
      name: "Vikram Reddy",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      time: "2:45 PM",
      messages: [
        "Thank you PassionBots! 🙏",
        "The IoT kit quality is top-notch",
        "Delivery was super fast",
        "Already working on my second project"
      ],
      typing: false
    },
    {
      id: 4,
      name: "Meera Patel",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
      time: "4:20 PM",
      messages: [
        "Started my own robotics startup after the course! 💼",
        "The mentorship was invaluable",
        "Now we have 5 clients already",
        "PassionBots changed my life ❤️"
      ],
      typing: false
    },
    {
      id: 5,
      name: "Aditya Singh",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      time: "5:30 PM",
      messages: [
        "Won first prize in national robotics competition! 🏆",
        "All thanks to the drone kit and guidance",
        "The instructors are industry experts",
        "Highly recommended to everyone"
      ],
      typing: false
    }
  ]
  return c.json(whatsappTestimonials)
})

app.get('/api/why-choose', (c) => {
  const reasons = [
    {
      id: 1,
      icon: "fa-graduation-cap",
      title: "Industry Expert Instructors",
      description: "Learn from professionals with 10+ years of experience in robotics and AI",
      stats: "50+ Expert Mentors"
    },
    {
      id: 2,
      icon: "fa-hands-helping",
      title: "Hands-On Learning",
      description: "Build real projects, not just theory. Every course includes practical assignments",
      stats: "100% Practical Focus"
    },
    {
      id: 3,
      icon: "fa-certificate",
      title: "Industry-Recognized Certificates",
      description: "Get certificates valued by top companies like TCS, Infosys, and startups",
      stats: "Accepted by 200+ Companies"
    },
    {
      id: 4,
      icon: "fa-briefcase",
      title: "Guaranteed Placement Support",
      description: "Dedicated placement cell with resume building, mock interviews, and job referrals",
      stats: "95% Placement Rate"
    },
    {
      id: 5,
      icon: "fa-box",
      title: "Premium Quality Kits",
      description: "Original Arduino, Raspberry Pi, and authentic components. No cheap duplicates",
      stats: "100% Authentic Parts"
    },
    {
      id: 6,
      icon: "fa-clock",
      title: "Lifetime Access",
      description: "Access all course materials, recordings, and updates forever. No expiry",
      stats: "Never Expires"
    },
    {
      id: 7,
      icon: "fa-users",
      title: "Strong Community",
      description: "Join 5000+ learners. Network, collaborate, and grow together",
      stats: "5000+ Active Members"
    },
    {
      id: 8,
      icon: "fa-headset",
      title: "24/7 Support",
      description: "Stuck at 2 AM? No problem. Our support team is always available",
      stats: "Round-the-clock Help"
    },
    {
      id: 9,
      icon: "fa-rupee-sign",
      title: "Affordable Pricing",
      description: "Quality education at student-friendly prices. EMI options available",
      stats: "Starting at ₹2,499"
    },
    {
      id: 10,
      icon: "fa-trophy",
      title: "Competition Ready",
      description: "Train for hackathons and robotics competitions. Our students win regularly",
      stats: "100+ Competition Winners"
    },
    {
      id: 11,
      icon: "fa-sync",
      title: "Regular Updates",
      description: "Curriculum updated quarterly to match industry trends and new technologies",
      stats: "Updated Every 3 Months"
    },
    {
      id: 12,
      icon: "fa-star",
      title: "4.9/5 Rating",
      description: "Consistently high ratings from 5000+ verified students across India",
      stats: "5000+ Reviews"
    }
  ]
  return c.json(reasons)
})

// Home page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PassionBots - Innovating the Future with Robotics & AI</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="/static/css/styles.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#FFD300',
                  dark: '#000000',
                }
              },
              fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'orbitron': ['Orbitron', 'sans-serif'],
              }
            }
          }
        </script>
    </head>
    <body class="bg-dark text-white font-poppins">
        <!-- Navigation -->
        <nav id="navbar" class="fixed w-full z-50 transition-all duration-300">
            <div class="container mx-auto px-4 py-4">
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                            <i class="fas fa-robot text-dark text-xl"></i>
                        </div>
                        <span class="text-2xl font-orbitron font-bold">Passion<span class="text-primary">Bots</span></span>
                    </div>
                    
                    <div class="hidden md:flex space-x-6">
                        <a href="/" class="hover:text-primary transition">Home</a>
                        <a href="/about" class="hover:text-primary transition">About</a>
                        <a href="/products" class="hover:text-primary transition">Products</a>
                        <a href="/courses" class="hover:text-primary transition">Courses</a>
                        <a href="/testimonials" class="hover:text-primary transition">Reviews</a>
                        <a href="/contact" class="hover:text-primary transition">Contact</a>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <a href="/login" class="hidden md:block bg-primary text-dark px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">Login</a>
                        <button id="mobile-menu-btn" class="md:hidden text-primary">
                            <i class="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
                    <div class="flex flex-col space-y-4">
                        <a href="/" class="hover:text-primary transition">Home</a>
                        <a href="/about" class="hover:text-primary transition">About</a>
                        <a href="/products" class="hover:text-primary transition">Products</a>
                        <a href="/courses" class="hover:text-primary transition">Courses</a>
                        <a href="/testimonials" class="hover:text-primary transition">Reviews</a>
                        <a href="/contact" class="hover:text-primary transition">Contact</a>
                        <a href="/login" class="bg-primary text-dark px-6 py-2 rounded-full font-semibold text-center">Login</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div class="absolute inset-0 bg-gradient-to-br from-dark via-gray-900 to-dark">
                <div class="absolute inset-0 opacity-20">
                    <div class="grid-pattern"></div>
                </div>
            </div>
            
            <div class="container mx-auto px-4 z-10">
                <div class="text-center">
                    <div class="mb-8 animate-float">
                        <i class="fas fa-robot text-primary text-8xl md:text-9xl"></i>
                    </div>
                    <h1 class="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 animate-fade-in">
                        Innovating the Future with<br>
                        <span class="text-primary">Robotics & AI</span>
                    </h1>
                    <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
                        Empowering students and tech enthusiasts with cutting-edge robotics kits, 
                        AI courses, and custom automation solutions
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
                        <a href="/products" class="bg-primary text-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition transform hover:scale-105">
                            <i class="fas fa-box mr-2"></i>Explore Products
                        </a>
                        <a href="/courses" class="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-dark transition transform hover:scale-105">
                            <i class="fas fa-graduation-cap mr-2"></i>Join Our Courses
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <i class="fas fa-chevron-down text-primary text-3xl"></i>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20 bg-gray-900">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        Why Choose <span class="text-primary">PassionBots</span>?
                    </h2>
                    <p class="text-gray-400 text-lg">Leading the way in robotics education and innovation</p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="feature-card bg-dark p-8 rounded-2xl border-2 border-gray-800 hover:border-primary transition">
                        <div class="w-16 h-16 bg-primary bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                            <i class="fas fa-microchip text-primary text-3xl"></i>
                        </div>
                        <h3 class="text-2xl font-orbitron font-bold mb-4">Quality Kits</h3>
                        <p class="text-gray-400">Premium robotics and electronics kits with detailed documentation and support</p>
                    </div>
                    
                    <div class="feature-card bg-dark p-8 rounded-2xl border-2 border-gray-800 hover:border-primary transition">
                        <div class="w-16 h-16 bg-primary bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                            <i class="fas fa-chalkboard-teacher text-primary text-3xl"></i>
                        </div>
                        <h3 class="text-2xl font-orbitron font-bold mb-4">Expert Training</h3>
                        <p class="text-gray-400">Learn from industry professionals with hands-on practical projects</p>
                    </div>
                    
                    <div class="feature-card bg-dark p-8 rounded-2xl border-2 border-gray-800 hover:border-primary transition">
                        <div class="w-16 h-16 bg-primary bg-opacity-20 rounded-xl flex items-center justify-center mb-6">
                            <i class="fas fa-cogs text-primary text-3xl"></i>
                        </div>
                        <h3 class="text-2xl font-orbitron font-bold mb-4">Custom Solutions</h3>
                        <p class="text-gray-400">Tailored automation projects for businesses and educational institutions</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose PassionBots -->
        <section class="py-20 bg-dark">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        Why Choose <span class="text-primary">PassionBots</span>?
                    </h2>
                    <p class="text-gray-400 text-lg max-w-3xl mx-auto">
                        We're not just another robotics education platform. Here's what makes us stand out from the rest.
                    </p>
                </div>
                
                <div id="why-choose-grid" class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <!-- Reasons loaded dynamically -->
                </div>
            </div>
        </section>

        <!-- WhatsApp Testimonials -->
        <section class="py-20 bg-gray-900">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        What Students Are <span class="text-primary">Saying</span>
                    </h2>
                    <p class="text-gray-400 text-lg">Real messages from real students</p>
                    <div class="flex items-center justify-center gap-2 mt-4">
                        <i class="fab fa-whatsapp text-green-500 text-3xl"></i>
                        <span class="text-gray-400">Live from our WhatsApp community</span>
                    </div>
                </div>
                
                <div id="whatsapp-testimonials" class="max-w-4xl mx-auto space-y-6">
                    <!-- WhatsApp chats loaded dynamically -->
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="py-20 bg-dark">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        Our <span class="text-primary">Impact</span>
                    </h2>
                    <p class="text-gray-400 text-lg">Trusted by thousands of students and professionals</p>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2" data-stat="students">5000+</div>
                        <p class="text-gray-400">Students Trained</p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2" data-stat="courses">50+</div>
                        <p class="text-gray-400">Courses Offered</p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2" data-stat="projects">1000+</div>
                        <p class="text-gray-400">Projects Built</p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2" data-stat="rating">4.9/5</div>
                        <p class="text-gray-400">Average Rating</p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2" data-stat="placement">95%</div>
                        <p class="text-gray-400">Placement Rate</p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-2" data-stat="companies">200+</div>
                        <p class="text-gray-400">Hiring Partners</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Courses -->
        <section class="py-20 bg-gray-900">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        Featured <span class="text-primary">Courses</span>
                    </h2>
                    <p class="text-gray-400 text-lg">Start your learning journey with our most popular courses</p>
                </div>
                
                <div id="featured-courses" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    <!-- Courses loaded dynamically -->
                </div>
                
                <div class="text-center">
                    <a href="/courses" class="inline-block bg-primary text-dark px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition transform hover:scale-105">
                        View All Courses <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="py-20 bg-dark">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        What Our <span class="text-primary">Students Say</span>
                    </h2>
                    <p class="text-gray-400 text-lg">Real stories from real students</p>
                </div>
                
                <div id="testimonials-container" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Testimonials loaded dynamically -->
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-20 bg-gray-900">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        Frequently Asked <span class="text-primary">Questions</span>
                    </h2>
                    <p class="text-gray-400 text-lg">Got questions? We've got answers</p>
                </div>
                
                <div class="max-w-3xl mx-auto space-y-4">
                    <div class="faq-item bg-dark rounded-2xl border-2 border-gray-800 overflow-hidden">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition">
                            <span class="font-semibold text-lg">What is the duration of the courses?</span>
                            <i class="fas fa-chevron-down text-primary transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden p-6 pt-0 text-gray-400">
                            Our courses range from 8 to 14 weeks depending on the level. Each course includes video lectures, hands-on projects, and live doubt-solving sessions.
                        </div>
                    </div>
                    
                    <div class="faq-item bg-dark rounded-2xl border-2 border-gray-800 overflow-hidden">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition">
                            <span class="font-semibold text-lg">Do I get a certificate after completion?</span>
                            <i class="fas fa-chevron-down text-primary transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden p-6 pt-0 text-gray-400">
                            Yes! Upon successful completion of the course and project submission, you'll receive an industry-recognized certificate from PassionBots.
                        </div>
                    </div>
                    
                    <div class="faq-item bg-dark rounded-2xl border-2 border-gray-800 overflow-hidden">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition">
                            <span class="font-semibold text-lg">What are the prerequisites for robotics courses?</span>
                            <i class="fas fa-chevron-down text-primary transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden p-6 pt-0 text-gray-400">
                            For beginner courses, no prior experience is needed. For intermediate and advanced courses, basic programming knowledge is recommended.
                        </div>
                    </div>
                    
                    <div class="faq-item bg-dark rounded-2xl border-2 border-gray-800 overflow-hidden">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition">
                            <span class="font-semibold text-lg">Do you provide placement assistance?</span>
                            <i class="fas fa-chevron-down text-primary transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden p-6 pt-0 text-gray-400">
                            Yes! We have partnerships with 200+ companies and provide dedicated placement assistance, including resume building, mock interviews, and job referrals.
                        </div>
                    </div>
                    
                    <div class="faq-item bg-dark rounded-2xl border-2 border-gray-800 overflow-hidden">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition">
                            <span class="font-semibold text-lg">What if I miss a live session?</span>
                            <i class="fas fa-chevron-down text-primary transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden p-6 pt-0 text-gray-400">
                            All live sessions are recorded and available for lifetime access. You can watch them anytime at your convenience.
                        </div>
                    </div>
                    
                    <div class="faq-item bg-dark rounded-2xl border-2 border-gray-800 overflow-hidden">
                        <button class="faq-question w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition">
                            <span class="font-semibold text-lg">How do I get the robotics kits?</span>
                            <i class="fas fa-chevron-down text-primary transition-transform"></i>
                        </button>
                        <div class="faq-answer hidden p-6 pt-0 text-gray-400">
                            Robotics kits can be purchased separately or as part of a course bundle. We ship across India with free delivery for orders above ₹5,000.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partners Section -->
        <section class="py-20 bg-dark">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        Our <span class="text-primary">Partners</span>
                    </h2>
                    <p class="text-gray-400 text-lg">Collaborating with industry leaders</p>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    <div class="partner-logo bg-gray-900 rounded-xl p-6 flex items-center justify-center border-2 border-gray-800 hover:border-primary transition">
                        <span class="text-2xl font-bold text-gray-600">IIT</span>
                    </div>
                    <div class="partner-logo bg-gray-900 rounded-xl p-6 flex items-center justify-center border-2 border-gray-800 hover:border-primary transition">
                        <span class="text-2xl font-bold text-gray-600">NIT</span>
                    </div>
                    <div class="partner-logo bg-gray-900 rounded-xl p-6 flex items-center justify-center border-2 border-gray-800 hover:border-primary transition">
                        <span class="text-2xl font-bold text-gray-600">BITS</span>
                    </div>
                    <div class="partner-logo bg-gray-900 rounded-xl p-6 flex items-center justify-center border-2 border-gray-800 hover:border-primary transition">
                        <span class="text-2xl font-bold text-gray-600">VIT</span>
                    </div>
                    <div class="partner-logo bg-gray-900 rounded-xl p-6 flex items-center justify-center border-2 border-gray-800 hover:border-primary transition">
                        <span class="text-2xl font-bold text-gray-600">Arduino</span>
                    </div>
                    <div class="partner-logo bg-gray-900 rounded-xl p-6 flex items-center justify-center border-2 border-gray-800 hover:border-primary transition">
                        <span class="text-2xl font-bold text-gray-600">RasPi</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-primary">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-4xl md:text-5xl font-orbitron font-bold text-dark mb-6">
                    Ready to Start Your Journey?
                </h2>
                <p class="text-dark text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of students and innovators building the future with robotics and AI
                </p>
                <a href="/login" class="inline-block bg-dark text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition transform hover:scale-105">
                    Get Started Now <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black py-12 border-t-2 border-gray-900">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div class="flex items-center space-x-2 mb-4">
                            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <i class="fas fa-robot text-dark text-xl"></i>
                            </div>
                            <span class="text-2xl font-orbitron font-bold">Passion<span class="text-primary">Bots</span></span>
                        </div>
                        <p class="text-gray-400">Innovating the future with robotics and AI education</p>
                    </div>
                    
                    <div>
                        <h4 class="font-orbitron font-bold mb-4">Quick Links</h4>
                        <div class="flex flex-col space-y-2">
                            <a href="/about" class="text-gray-400 hover:text-primary transition">About Us</a>
                            <a href="/products" class="text-gray-400 hover:text-primary transition">Products</a>
                            <a href="/courses" class="text-gray-400 hover:text-primary transition">Courses</a>
                            <a href="/gallery" class="text-gray-400 hover:text-primary transition">Gallery</a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="font-orbitron font-bold mb-4">Contact</h4>
                        <div class="flex flex-col space-y-2 text-gray-400">
                            <p><i class="fas fa-envelope text-primary mr-2"></i>info@passionbots.in</p>
                            <p><i class="fas fa-phone text-primary mr-2"></i>+91 XXX XXX XXXX</p>
                            <p><i class="fas fa-map-marker-alt text-primary mr-2"></i>India</p>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="font-orbitron font-bold mb-4">Follow Us</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="w-10 h-10 bg-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-900 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 PassionBots. All rights reserved.</p>
                </div>
            </div>
        </footer>

        <!-- Floating Chat Button -->
        <div class="fixed bottom-8 right-8 z-50">
            <button class="w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-400 transition transform hover:scale-110 animate-pulse-slow">
                <i class="fas fa-comment-dots text-dark text-2xl"></i>
            </button>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/js/main.js"></script>
    </body>
    </html>
  `)
})

// Other pages will be served similarly
app.get('/about', (c) => c.redirect('/static/pages/about.html'))
app.get('/products', (c) => c.redirect('/static/pages/products.html'))
app.get('/courses', (c) => c.redirect('/static/pages/courses.html'))
app.get('/gallery', (c) => c.redirect('/static/pages/gallery.html'))
app.get('/contact', (c) => c.redirect('/static/pages/contact.html'))
app.get('/login', (c) => c.redirect('/static/pages/login.html'))
app.get('/testimonials', (c) => c.redirect('/static/pages/testimonials.html'))
app.get('/why-choose', (c) => c.redirect('/static/pages/why-choose.html'))
app.get('/admin', (c) => c.redirect('/static/pages/admin.html'))
app.get('/course/robotics-fundamentals', (c) => c.redirect('/static/pages/course-robotics.html'))
app.get('/course/ai-machine-learning', (c) => c.redirect('/static/pages/course-ai-ml.html'))
app.get('/course/iot-development', (c) => c.redirect('/static/pages/course-iot.html'))
app.get('/course/advanced-automation', (c) => c.redirect('/static/pages/course-automation.html'))

export default app
