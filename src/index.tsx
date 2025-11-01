import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

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
      name: "Robotics Fundamentals",
      price: "₹4,999",
      duration: "8 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      description: "Learn the basics of robotics, electronics, and programming"
    },
    {
      id: 2,
      name: "AI & Machine Learning",
      price: "₹7,999",
      duration: "12 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      description: "Master AI concepts and implement ML models in robotics"
    },
    {
      id: 3,
      name: "IoT Development",
      price: "₹5,999",
      duration: "10 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop",
      description: "Build connected devices and smart systems"
    },
    {
      id: 4,
      name: "Advanced Automation",
      price: "₹9,999",
      duration: "14 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop",
      description: "Industrial automation and control systems"
    }
  ]
  return c.json(courses)
})

app.post('/api/contact', async (c) => {
  const data = await c.req.json()
  // In production, you would save this to a database or send an email
  console.log('Contact form submission:', data)
  return c.json({ success: true, message: 'Thank you! We will contact you soon.' })
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
                    
                    <div class="hidden md:flex space-x-8">
                        <a href="/" class="hover:text-primary transition">Home</a>
                        <a href="/about" class="hover:text-primary transition">About</a>
                        <a href="/products" class="hover:text-primary transition">Products</a>
                        <a href="/courses" class="hover:text-primary transition">Courses</a>
                        <a href="/gallery" class="hover:text-primary transition">Gallery</a>
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
                        <a href="/gallery" class="hover:text-primary transition">Gallery</a>
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

export default app
