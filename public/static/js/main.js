// Main JavaScript for PassionBots Website

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.feature-card, .product-card, .course-card, .team-member, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white font-semibold animate-fade-in`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Loading spinner helper
function showLoading(element) {
    const spinner = document.createElement('div');
    spinner.className = 'spinner mx-auto';
    element.innerHTML = '';
    element.appendChild(spinner);
    element.disabled = true;
}

function hideLoading(element, text) {
    element.innerHTML = text;
    element.disabled = false;
}

// Modal helper functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on outside click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Image lazy loading
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.animate-float');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Chat button functionality
const chatButton = document.querySelector('.fixed.bottom-8.right-8 button');
if (chatButton) {
    chatButton.addEventListener('click', () => {
        // In production, integrate with actual chat service
        showNotification('Chat feature coming soon!', 'info');
    });
}

// Auto-hide notification
let notificationTimeout;
function autoHideNotification() {
    clearTimeout(notificationTimeout);
    notificationTimeout = setTimeout(() => {
        const notifications = document.querySelectorAll('.fixed.top-20.right-4');
        notifications.forEach(n => n.remove());
    }, 5000);
}

// Local storage helper
const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    },
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage', e);
            return null;
        }
    },
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing from localStorage', e);
        }
    }
};

// Check if user is logged in
function checkAuth() {
    const user = storage.get('user');
    const loginBtn = document.querySelector('a[href="/login"]');
    
    if (user && loginBtn) {
        loginBtn.textContent = user.name || 'Dashboard';
        loginBtn.href = '/dashboard';
    }
}

// Initialize auth check
checkAuth();

// Load testimonials on home page
async function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    
    try {
        const response = await axios.get('/api/testimonials');
        const testimonials = response.data.slice(0, 3); // Show first 3
        
        container.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card bg-gray-900 p-8 rounded-2xl border-2 border-gray-800 hover:border-primary transition">
                <div class="flex items-center mb-4">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full border-4 border-primary mr-4">
                    <div>
                        <h4 class="font-bold text-lg">${testimonial.name}</h4>
                        <p class="text-gray-400 text-sm">${testimonial.role}</p>
                        <p class="text-primary text-xs">${testimonial.college}</p>
                    </div>
                </div>
                <div class="flex mb-4">
                    ${'<i class="fas fa-star text-primary"></i>'.repeat(testimonial.rating)}
                </div>
                <p class="text-gray-400 italic mb-4">"${testimonial.text}"</p>
                <div class="text-sm text-gray-500">
                    <i class="fas fa-graduation-cap mr-1"></i>${testimonial.course}
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

// Load featured courses on home page
async function loadFeaturedCourses() {
    const container = document.getElementById('featured-courses');
    if (!container) return;
    
    try {
        const response = await axios.get('/api/courses');
        const courses = response.data.slice(0, 3); // Show first 3
        
        container.innerHTML = courses.map(course => `
            <div class="course-card rounded-2xl overflow-hidden">
                <div class="relative h-48 overflow-hidden">
                    <img src="${course.image}" alt="${course.name}" class="w-full h-full object-cover">
                    <div class="absolute top-4 right-4">
                        <span class="badge badge-${course.level.toLowerCase()}">${course.level}</span>
                    </div>
                </div>
                <div class="p-6 bg-dark border-2 border-gray-800">
                    <h3 class="text-xl font-orbitron font-bold mb-2">${course.name}</h3>
                    <p class="text-gray-400 text-sm mb-4">${course.description}</p>
                    <div class="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <span><i class="fas fa-clock text-primary mr-1"></i>${course.duration}</span>
                        <span><i class="fas fa-signal text-primary mr-1"></i>${course.level}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-primary">${course.price}</span>
                        <a href="/courses" class="bg-primary text-dark px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition text-sm">
                            Enroll Now
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading featured courses:', error);
    }
}

// FAQ accordion functionality
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = question.querySelector('i');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.querySelector('.faq-answer').classList.add('hidden');
                    item.querySelector('.faq-question i').style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('hidden');
            if (answer.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// Counter animation for stats
function animateCounters() {
    const stats = document.querySelectorAll('[data-stat]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = element.textContent;
                
                // Simple animation - just show the value
                element.style.opacity = '0';
                setTimeout(() => {
                    element.style.transition = 'opacity 0.5s ease';
                    element.style.opacity = '1';
                }, 100);
                
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// Load WhatsApp testimonials
async function loadWhatsAppTestimonials() {
    const container = document.getElementById('whatsapp-testimonials');
    if (!container) return;
    
    try {
        const response = await axios.get('/api/whatsapp-testimonials');
        const testimonials = response.data;
        
        container.innerHTML = testimonials.map((chat, index) => `
            <div class="whatsapp-chat" style="animation-delay: ${index * 0.1}s">
                <div class="whatsapp-header">
                    <img src="${chat.avatar}" alt="${chat.name}" class="whatsapp-avatar">
                    <div class="flex-1">
                        <h4 class="font-bold text-white">${chat.name}</h4>
                        <p class="text-xs text-green-500 flex items-center gap-1">
                            <i class="fas fa-circle" style="font-size: 6px;"></i>
                            Online
                        </p>
                    </div>
                    <span class="text-xs text-gray-400">${chat.time}</span>
                </div>
                <div class="whatsapp-body">
                    ${chat.messages.map((message, msgIndex) => `
                        <div class="whatsapp-message" style="animation-delay: ${(index * 0.1) + (msgIndex * 0.05)}s">
                            <p class="text-white">${message}</p>
                            <div class="whatsapp-time">
                                ${chat.time} <span class="whatsapp-checkmarks">✓✓</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading WhatsApp testimonials:', error);
    }
}

// Load Why Choose reasons
async function loadWhyChoose() {
    const container = document.getElementById('why-choose-grid');
    if (!container) return;
    
    try {
        const response = await axios.get('/api/why-choose');
        const reasons = response.data;
        
        container.innerHTML = reasons.map((reason, index) => `
            <div class="why-choose-card" style="animation-delay: ${index * 0.05}s">
                <div class="why-choose-icon">
                    <i class="fas ${reason.icon} text-primary text-2xl"></i>
                </div>
                <h3 class="font-orbitron font-bold text-lg mb-2 text-white">${reason.title}</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-3">${reason.description}</p>
                <span class="why-choose-stats">
                    <i class="fas fa-check-circle mr-1"></i>${reason.stats}
                </span>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading Why Choose reasons:', error);
    }
}

// Initialize home page features
if (window.location.pathname === '/') {
    document.addEventListener('DOMContentLoaded', () => {
        loadWhyChoose();
        loadWhatsAppTestimonials();
        loadTestimonials();
        loadFeaturedCourses();
        initFAQ();
        animateCounters();
    });
}

// Print console message
console.log('%c🤖 PassionBots Website', 'font-size: 20px; font-weight: bold; color: #FFD300;');
console.log('%cInnovating the Future with Robotics & AI', 'font-size: 14px; color: #888;');
