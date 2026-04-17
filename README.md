# The Renewal Initiative Website

A modern, responsive website for The Renewal Initiative - an organization dedicated to strengthening communities through economic revitalization, public safety, and holistic well-being.

## 🌟 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with glassmorphism effects and smooth animations
- **Newsletter Subscription**: Integrated with Supabase for collecting email subscribers
- **Contact Form**: Direct message submission to database for easy communication
- **Accessible**: Built with semantic HTML and ARIA labels for screen readers
- **Fast Loading**: Optimized CSS and JavaScript with minimal dependencies

## 🎨 Design System

### Color Palette - "Grounded Vitality"
- **Primary (Navy)**: `#1B263B` - Navigation, Headers, Footer
- **Secondary (Sage Green)**: `#4A7C59` - Section backgrounds, Icons
- **Accent (Burnt Coral)**: `#E76F51` - Call-to-action buttons
- **Background**: `#F8F9FA` - Main content area

### Typography
- **Headlines**: Montserrat (Bold, 700-800 weights)
- **Body Text**: Inter (Regular, 400-600 weights)

## 📁 Project Structure

```
RenewalInitiativeWebsite/
├── index.html              # Home page with hero section
├── about.html              # About page with program highlights
├── contact.html            # Contact page with form
├── assets/
│   ├── herosection.png     # Hero background image
│   └── The Renewal Initiative Logo.svg
├── css/
│   └── styles.css          # Complete styling with design system
└── js/
    ├── main.js             # Navigation and UI interactions
    └── supabase-client.js  # Database integration
```

## 🗄️ Database Structure

The website uses Supabase for data storage with two tables:

### `newsletter_subscriptions`
- `id` (UUID, primary key)
- `email` (text, unique)
- `page_source` (text) - tracks if subscription came from home or about page
- `subscribed_at` (timestamp)

### `contact_messages`
- `id` (UUID, primary key)
- `name` (text)
- `email` (text)
- `message` (text)
- `submitted_at` (timestamp)

## 🚀 Getting Started

### Local Development

1. **Open the website**:
   - Simply open `index.html` in your web browser
   - No build process required!

2. **Test the forms**:
   - Newsletter subscription forms on Home and About pages
   - Contact form on Contact page
   - All submissions are saved to Supabase database

### Deployment Options

#### Option 1: Netlify (Recommended)
1. Drag and drop the entire folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly with HTTPS

#### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Option 3: GitHub Pages
1. Create a new GitHub repository
2. Push all files to the repository
3. Enable GitHub Pages in repository settings
4. Select the main branch as source

## 🔧 Configuration

### Supabase Configuration
The Supabase credentials are already configured in `js/supabase-client.js`:
- **Project URL**: https://layrohjbvrmmqpgpomul.supabase.co
- **Anon Key**: Configured in the file

### Accessing Database Records

To view submitted newsletters and contact messages:
1. Log in to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select "The Renewal Initiative Website" project
3. Go to Table Editor
4. View `newsletter_subscriptions` and `contact_messages` tables

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px and above

## ✨ Key Features Implemented

### Navigation
- Fixed navigation bar with glassmorphism effect
- Mobile hamburger menu with smooth animations
- Active page highlighting
- Smooth scroll for anchor links

### Hero Section (Home)
- Full-screen background image with gradient overlay
- Responsive typography
- Email subscription form with validation

### Program Highlights (About)
- Bento grid layout with 5 program cards
- Icon integration with hover effects
- Responsive card layout

### Contact Form
- Input validation
- Loading states during submission
- Success/error toast notifications
- Contact information display

### Forms & Validation
- Email format validation
- Required field checking
- Duplicate email detection
- Loading states with spinner
- Toast notifications for feedback
- Form clearing after successful submission

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- **No framework overhead**: Pure HTML, CSS, and JavaScript
- **CDN-loaded libraries**: Supabase JS client loaded from CDN
- **Optimized assets**: Compressed images and minimal CSS/JS
- **Fast load times**: < 2 seconds on standard connections

## 🔒 Security

- Row Level Security (RLS) enabled on all Supabase tables
- Public insert-only policies for forms
- Email validation on both client and server side
- XSS protection through proper input sanitization

## 🐛 Troubleshooting

### Forms not submitting?
1. Check browser console for errors
2. Verify Supabase project is active in dashboard
3. Ensure RLS policies are configured correctly

### Images not loading?
1. Verify `assets/` folder contains both images
2. Check file paths in HTML files
3. Ensure images are not being blocked by browser

### Mobile menu not working?
1. Clear browser cache
2. Check if JavaScript is enabled
3. Verify `js/main.js` is loading correctly

## 📧 Contact Information

- **Name**: Adrien Jones
- **Phone**: 240-736-6168
- **Email**: iamadriantjones@gmail.com

## 📄 License

© 2026 The Renewal Initiative. All rights reserved.

## 🎉 Success!

Your website is now complete and ready to use! All forms are connected to the Supabase database and will save submissions automatically.

To test:
1. Open `index.html` in your browser
2. Try subscribing to the newsletter on the home page
3. Visit the about page and explore the program highlights
4. Go to the contact page and send a test message
5. Check your Supabase dashboard to see the submissions!

---

Built with ❤️ for The Renewal Initiative
