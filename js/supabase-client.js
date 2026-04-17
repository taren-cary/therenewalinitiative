// Supabase Configuration
const SUPABASE_URL = 'https://layrohjbvrmmqpgpomul.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxheXJvaGpidnJtbXFwZ3BvbXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNjQ4MDQsImV4cCI6MjA5MTk0MDgwNH0.t7CjKJcwS3_M2ILRM-aRMb0XRK8qTCiEfCzrnzKFXMY';

// Initialize Supabase client
let supabase;

// Load Supabase from CDN
async function initSupabase() {
    if (typeof window.supabase === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        document.head.appendChild(script);
        
        await new Promise((resolve) => {
            script.onload = resolve;
        });
    }
    
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Initialize on load
initSupabase();

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - 'success' or 'error'
 */
export function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    // Update message
    toastMessage.textContent = message;
    
    // Update icon based on type
    if (type === 'success') {
        toast.classList.remove('error');
        toast.classList.add('success');
        toastIcon.innerHTML = '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>';
    } else {
        toast.classList.remove('success');
        toast.classList.add('error');
        toastIcon.innerHTML = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>';
    }
    
    // Show toast
    toast.style.display = 'flex';
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideToast();
    }, 5000);
}

/**
 * Hide toast notification
 */
export function hideToast() {
    const toast = document.getElementById('toast');
    toast.style.display = 'none';
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Set button loading state
 * @param {HTMLButtonElement} button - Button element
 * @param {boolean} isLoading - Loading state
 */
function setButtonLoading(button, isLoading) {
    const btnText = button.querySelector('.btn-text');
    const btnLoader = button.querySelector('.btn-loader');
    
    if (isLoading) {
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-flex';
        button.disabled = true;
    } else {
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        button.disabled = false;
    }
}

/**
 * Show form message
 * @param {HTMLFormElement} form - Form element
 * @param {string} message - Message to display
 * @param {string} type - 'success' or 'error'
 */
function showFormMessage(form, message, type) {
    const messageEl = form.querySelector('.form-message');
    messageEl.textContent = message;
    messageEl.className = `form-message ${type}`;
    messageEl.style.display = 'block';
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 5000);
}

/**
 * Subscribe to newsletter
 * @param {string} email - Email address
 * @param {string} pageSource - Source page (home or about)
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function subscribeToNewsletter(email, pageSource = 'home') {
    try {
        // Validate email
        if (!validateEmail(email)) {
            return { success: false, error: 'Please enter a valid email address.' };
        }
        
        // Wait for Supabase to be initialized
        let attempts = 0;
        while (!supabase && attempts < 50) {
            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
        }
        
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        
        // Insert into database
        const { data, error } = await supabase
            .from('newsletter_subscriptions')
            .insert([
                { 
                    email: email.toLowerCase().trim(),
                    page_source: pageSource
                }
            ])
            .select();
        
        if (error) {
            // Handle duplicate email error
            if (error.code === '23505') {
                return { success: false, error: 'This email is already subscribed!' };
            }
            throw error;
        }
        
        return { success: true };
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return { success: false, error: 'Something went wrong. Please try again later.' };
    }
}

/**
 * Submit contact form
 * @param {string} name - Name
 * @param {string} email - Email address
 * @param {string} message - Message
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function submitContactForm(name, email, message) {
    try {
        // Validate inputs
        if (!name || !email || !message) {
            return { success: false, error: 'All fields are required.' };
        }
        
        if (!validateEmail(email)) {
            return { success: false, error: 'Please enter a valid email address.' };
        }
        
        if (message.length < 10) {
            return { success: false, error: 'Message must be at least 10 characters long.' };
        }
        
        // Wait for Supabase to be initialized
        let attempts = 0;
        while (!supabase && attempts < 50) {
            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
        }
        
        if (!supabase) {
            throw new Error('Supabase client not initialized');
        }
        
        // Insert into database
        const { data, error } = await supabase
            .from('contact_messages')
            .insert([
                {
                    name: name.trim(),
                    email: email.toLowerCase().trim(),
                    message: message.trim()
                }
            ])
            .select();
        
        if (error) {
            throw error;
        }
        
        return { success: true };
    } catch (error) {
        console.error('Contact form submission error:', error);
        return { success: false, error: 'Something went wrong. Please try again later.' };
    }
}

/**
 * Handle newsletter form submission
 * @param {Event} event - Form submit event
 * @param {string} pageSource - Source page
 */
export async function handleNewsletterSubmit(event, pageSource) {
    event.preventDefault();
    
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('button[type="submit"]');
    
    const email = emailInput.value;
    
    // Set loading state
    setButtonLoading(submitButton, true);
    
    // Submit to Supabase
    const result = await subscribeToNewsletter(email, pageSource);
    
    // Remove loading state
    setButtonLoading(submitButton, false);
    
    if (result.success) {
        // Show success message
        showToast('Thank you for subscribing! 🎉', 'success');
        showFormMessage(form, 'Successfully subscribed!', 'success');
        
        // Clear form
        form.reset();
    } else {
        // Show error message
        showToast(result.error, 'error');
        showFormMessage(form, result.error, 'error');
    }
}

/**
 * Handle contact form submission
 * @param {Event} event - Form submit event
 */
export async function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const nameInput = form.querySelector('#contact-name');
    const emailInput = form.querySelector('#contact-email');
    const messageInput = form.querySelector('#contact-message');
    const submitButton = form.querySelector('button[type="submit"]');
    
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    
    // Set loading state
    setButtonLoading(submitButton, true);
    
    // Submit to Supabase
    const result = await submitContactForm(name, email, message);
    
    // Remove loading state
    setButtonLoading(submitButton, false);
    
    if (result.success) {
        // Show success message
        showToast('Message sent successfully! We\'ll get back to you soon. 🎉', 'success');
        showFormMessage(form, 'Message sent successfully!', 'success');
        
        // Clear form
        form.reset();
    } else {
        // Show error message
        showToast(result.error, 'error');
        showFormMessage(form, result.error, 'error');
    }
}

// Setup toast close button
document.addEventListener('DOMContentLoaded', () => {
    const toastCloseBtn = document.querySelector('.toast-close');
    if (toastCloseBtn) {
        toastCloseBtn.addEventListener('click', hideToast);
    }
});
