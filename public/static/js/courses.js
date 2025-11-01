// Courses page functionality

// Load courses from API
async function loadCourses() {
    const coursesGrid = document.getElementById('courses-grid');
    
    try {
        coursesGrid.innerHTML = '<div class="col-span-full flex justify-center py-20"><div class="spinner"></div></div>';
        
        const response = await axios.get('/api/courses');
        const courses = response.data;
        
        coursesGrid.innerHTML = courses.map(course => `
            <div class="course-card rounded-2xl overflow-hidden">
                <div class="relative h-64 overflow-hidden">
                    <img src="${course.image}" alt="${course.name}" class="w-full h-full object-cover">
                    <div class="absolute top-4 right-4">
                        <span class="badge badge-${course.level.toLowerCase()}">${course.level}</span>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-orbitron font-bold mb-2">${course.name}</h3>
                    <p class="text-gray-400 mb-4">${course.description}</p>
                    <div class="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <span><i class="fas fa-clock text-primary mr-1"></i>${course.duration}</span>
                        <span><i class="fas fa-signal text-primary mr-1"></i>${course.level}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-primary">${course.price}</span>
                        <button onclick="viewCourse(${course.id})" class="bg-primary text-dark px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading courses:', error);
        coursesGrid.innerHTML = `
            <div class="col-span-full text-center py-20">
                <i class="fas fa-exclamation-circle text-6xl text-primary mb-4"></i>
                <p class="text-gray-400 text-lg">Failed to load courses. Please try again later.</p>
            </div>
        `;
    }
}

// View course details
async function viewCourse(courseId) {
    try {
        const response = await axios.get('/api/courses');
        const course = response.data.find(c => c.id === courseId);
        
        if (course) {
            const modalContent = document.getElementById('modal-content');
            modalContent.innerHTML = `
                <img src="${course.image}" alt="${course.name}" class="w-full h-64 object-cover rounded-lg mb-6">
                <div class="flex items-center gap-4 mb-4">
                    <span class="badge badge-${course.level.toLowerCase()}">${course.level}</span>
                    <span class="text-gray-400"><i class="fas fa-clock text-primary mr-2"></i>${course.duration}</span>
                </div>
                <h2 class="text-3xl font-orbitron font-bold mb-4">${course.name}</h2>
                <p class="text-gray-400 text-lg mb-6">${course.description}</p>
                
                <div class="bg-gray-900 rounded-lg p-6 mb-6">
                    <h3 class="font-orbitron font-bold text-xl mb-4">What You'll Learn:</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><i class="fas fa-check text-primary mr-2"></i>Fundamentals and advanced concepts</li>
                        <li><i class="fas fa-check text-primary mr-2"></i>Hands-on practical projects</li>
                        <li><i class="fas fa-check text-primary mr-2"></i>Industry best practices</li>
                        <li><i class="fas fa-check text-primary mr-2"></i>Certificate upon completion</li>
                        <li><i class="fas fa-check text-primary mr-2"></i>Lifetime access to course materials</li>
                        <li><i class="fas fa-check text-primary mr-2"></i>Expert instructor support</li>
                    </ul>
                </div>
                
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-orbitron font-bold text-primary">${course.price}</span>
                    <button onclick="enrollNow(${course.id})" class="bg-primary text-dark px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
                        <i class="fas fa-graduation-cap mr-2"></i>Enroll Now
                    </button>
                </div>
            `;
            
            openModal('course-modal');
        }
    } catch (error) {
        console.error('Error viewing course:', error);
        showNotification('Failed to load course details', 'error');
    }
}

// Enroll in course
function enrollNow(courseId) {
    closeModal('course-modal');
    showNotification('Please login to enroll in this course', 'success');
    setTimeout(() => {
        window.location.href = '/login';
    }, 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
});
