// Authentication functionality

function showLogin() {
    document.getElementById('login-form-container').classList.remove('hidden');
    document.getElementById('signup-form-container').classList.add('hidden');
}

function showSignup() {
    document.getElementById('login-form-container').classList.add('hidden');
    document.getElementById('signup-form-container').classList.remove('hidden');
}

// Login form submission
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    const email = form.email.value;
    const password = form.password.value;
    
    // Validate
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    if (!validatePassword(password)) {
        showNotification('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Show loading
    showLoading(submitBtn);
    
    try {
        const response = await axios.post('/api/auth/login', {
            email,
            password
        });
        
        if (response.data.success) {
            // Save user data
            storage.set('user', response.data.user);
            
            showNotification('Login successful! Redirecting...', 'success');
            
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);
        } else {
            showNotification(response.data.message || 'Login failed', 'error');
        }
    } catch (error) {
        console.error('Login error:', error);
        if (error.response?.status === 401) {
            showNotification('Invalid email or password', 'error');
        } else {
            showNotification('An error occurred. Please try again.', 'error');
        }
    } finally {
        hideLoading(submitBtn, originalText);
    }
});

// Signup form submission
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    
    // Validate
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    if (!validatePassword(password)) {
        showNotification('Password must be at least 6 characters', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    // Show loading
    showLoading(submitBtn);
    
    try {
        const response = await axios.post('/api/auth/signup', {
            name,
            email,
            password
        });
        
        if (response.data.success) {
            // Save user data
            storage.set('user', response.data.user);
            
            showNotification('Account created successfully! Redirecting...', 'success');
            
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);
        } else {
            showNotification(response.data.message || 'Signup failed', 'error');
        }
    } catch (error) {
        console.error('Signup error:', error);
        if (error.response?.status === 400) {
            showNotification('Email already registered or invalid data', 'error');
        } else {
            showNotification('An error occurred. Please try again.', 'error');
        }
    } finally {
        hideLoading(submitBtn, originalText);
    }
});
