// Contact form functionality

document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Get form data
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        subject: form.subject.value,
        message: form.message.value
    };
    
    // Validate email
    if (!validateEmail(formData.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading
    showLoading(submitBtn);
    
    try {
        const response = await axios.post('/api/contact', formData);
        
        if (response.data.success) {
            showNotification(response.data.message, 'success');
            form.reset();
        } else {
            showNotification('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error submitting contact form:', error);
        showNotification('An error occurred. Please try again later.', 'error');
    } finally {
        hideLoading(submitBtn, originalText);
    }
});
