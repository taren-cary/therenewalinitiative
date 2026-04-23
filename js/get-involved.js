import { showToast } from './supabase-client.js';

const SUPABASE_URL = 'https://layrohjbvrmmqpgpomul.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxheXJvaGpidnJtbXFwZ3BvbXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNjQ4MDQsImV4cCI6MjA5MTk0MDgwNH0.t7CjKJcwS3_M2ILRM-aRMb0XRK8qTCiEfCzrnzKFXMY';

async function getSupabase() {
    if (typeof window.supabase === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        document.head.appendChild(script);
        await new Promise(resolve => { script.onload = resolve; });
    }
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

function getCheckedValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
}

function setButtonLoading(button, isLoading) {
    button.querySelector('.btn-text').style.display = isLoading ? 'none' : 'inline';
    button.querySelector('.btn-loader').style.display = isLoading ? 'inline-flex' : 'none';
    button.disabled = isLoading;
}

function showFormMessage(form, message, type) {
    const el = form.querySelector('.form-message');
    el.textContent = message;
    el.className = `form-message ${type}`;
    el.style.display = 'block';
    setTimeout(() => { el.style.display = 'none'; }, 6000);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('get-involved-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const button = form.querySelector('button[type="submit"]');

        const involvementTypes = getCheckedValues('involvement_types');
        if (involvementTypes.length === 0) {
            showFormMessage(form, 'Please select at least one way you\'d like to help.', 'error');
            return;
        }

        setButtonLoading(button, true);

        try {
            const client = await getSupabase();
            const { error } = await client.from('get_involved_submissions').insert([{
                full_name: form.querySelector('#gi-name').value.trim(),
                email: form.querySelector('#gi-email').value.toLowerCase().trim(),
                phone: form.querySelector('#gi-phone').value.trim() || null,
                zip_code: form.querySelector('#gi-zip').value.trim() || null,
                involvement_types: involvementTypes,
                interest_areas: getCheckedValues('interest_areas'),
                availability: getCheckedValues('availability'),
                skills: form.querySelector('#gi-skills').value.trim() || null,
                message: form.querySelector('#gi-message').value.trim() || null,
                referral_source: form.querySelector('#gi-referral').value || null,
            }]);

            if (error) throw error;

            showToast('Thank you! We\'ll be in touch soon.', 'success');
            showFormMessage(form, 'Your submission was received! We\'ll reach out shortly.', 'success');
            form.reset();
        } catch (err) {
            console.error('Get Involved submission error:', err);
            showToast('Something went wrong. Please try again.', 'error');
            showFormMessage(form, 'Something went wrong. Please try again later.', 'error');
        } finally {
            setButtonLoading(button, false);
        }
    });
});
