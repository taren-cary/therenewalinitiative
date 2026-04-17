# The Renewal Initiative Website 

## Requirements
- The website should be responsive and desktop and mobile-friendly.
- The website should be built using HTML, CSS, and JavaScript.
- The website should be built using a modern and clean design.
- Navigation bar should be fixed on the top of the page and should have a logo and a menu with links to the Home page, About page, and a Contact page.
- Mobile navigation bar should be hidden on desktop and should be visible on mobile.
- The website should have a Home page, About page, and a Contact page.
- On the home page, there should be a hero section with the background image from the assets folder.
- On the home page there should be a "Renewing Our Community Starts Here & Now" heading and "Events Coming Soon" subheading with a email input field and a button to subscribe to the newsletter.
- On the about us page there should be an "About Us" heading with a paragraph of text and a button to subscribe to the newsletter.
- On the contact page there should be a "Contact Us" heading with a form with a name, email, message, and a button to submit the form, as well as the contact information from below.
- Every page should have a footer with links to the Home page, About page, and a Contact page.

## Logo
- The logo can be found in the assets folder at The Renewal Initiative Logo.svg

##Hero Section
- The image for the hero section can be found in the assets folder at herosection.png

## About Us
- The mission of the organization is to strengthen communities by promoting economic revitalization, public safety, and holistic well-being through collaborative partnerships, property redevelopment, and community-based services. The organization is dedicated to transforming underserved neighborhoods into safe, healthy, and economically vibrant environments where residents and businesses can thrive.

Our approach recognizes that community challenges such as blighted properties, crime, substance abuse, unemployment, and limited access to health resources are interconnected. Addressing these issues requires comprehensive solutions that combine physical redevelopment with social services and economic opportunities.

### Program Highlights:
- Drug Prevention, Treatment Support, and Recovery Resources
- Crime Prevention and Public Safety Initiatives
- Community Redevelopment and Property Revitalization
- Reentry and Workforce Reintegration
- Health and Wellness Promotion

## Contact Information
- Adrien Jones 240-736-6168
- iamadriantjones@gmail.com

## Email and Message submission
- Email and messages submission will be submitted to a Supabase database under "The Renewal Initiative Website"

---

## Modern & Sleek Branding Extensions

### 1. Color Palette: "Grounded Vitality"
* **Primary (Safety & Authority):** `#1B263B` (Deep Navy) - Use for Navigation, Headers, and Footer.
* **Secondary (Growth & Recovery):** `#4A7C59` (Sage Green) - Use for section backgrounds and iconography.
* **Accent (Call to Action):** `#E76F51` (Burnt Coral) - Use for "Subscribe" and "Submit" buttons.
* **Background:** `#F8F9FA` (Soft Mist) - Use for main content area backgrounds to keep a "sleek" open feel.

### 2. Typography Pairings
* **Headlines:** `Plus Jakarta Sans` or `Montserrat` (Sans-Serif, Bold) - Communicates modern professionalism.
* **Body Text:** `Inter` or `Open Sans` (Sans-Serif, Regular) - Optimized for high readability across devices.

### 3. UI Styling Elements
* **Navigation Bar:** Use `backdrop-filter: blur(10px);` with `rgba(255, 255, 255, 0.8)` for a "Glassmorphism" effect when scrolling.
* **Cards (Bento Grid Style):** Use cards for the "Program Highlights" section. Apply a subtle `box-shadow: 0 10px 30px rgba(0,0,0,0.05);` and a `border-radius: 12px;`.
* **Hero Section:** Apply a linear gradient overlay (e.g., `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`) on the background image to ensure the H1 heading is perfectly legible.
* **Inputs & Buttons:** Rounded corners (`8px`) and transition effects (`ease-in-out 0.3s`) on hover to create a premium, interactive feel.

### 4. Interactive Components
* **Success States:** Add a subtle "Thank You" toast notification or animation when a user successfully submits to the Supabase database.
* **Smooth Scroll:** Enable `scroll-behavior: smooth;` for internal page navigation.


