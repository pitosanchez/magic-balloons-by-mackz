# Magic Balloons by Mack 🎈✨

A modern, responsive website for Magic Balloons by Mack - a professional balloon decoration service. Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations and excellent user experience.

## ✨ Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite for optimal performance
- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Gallery**: Lightbox modal with navigation for viewing balloon creations
- **Contact Form**: Functional contact form with validation and success states
- **Floating Balloons**: Dynamic floating balloon animations throughout the site
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/magic-balloons-by-mackz.git
cd magic-balloons-by-mackz
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar with smooth scrolling
│   ├── Hero.tsx        # Hero section with call-to-action
│   ├── Services.tsx    # Services showcase with animations
│   ├── Gallery.tsx     # Interactive gallery with lightbox
│   ├── Contact.tsx     # Contact form and information
│   └── FloatingBalloons.tsx # Animated floating balloons
├── App.tsx             # Main application component
├── main.tsx           # React entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors

- **Primary**: `#FF6B6B` (Coral Red)
- **Secondary**: `#4ECDC4` (Turquoise)
- **Accent**: `#FFE66D` (Yellow)
- **Purple**: `#B57EDC` (Lavender)
- **Blue**: `#66D9EF` (Sky Blue)
- **Pink**: `#FF69B4` (Hot Pink)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Production-ready motion library
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful icon library
- **React Intersection Observer**: Scroll-based animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features

### Hero Section

- Animated gradient background
- Floating sparkle effects
- Call-to-action buttons with hover effects
- Smooth scroll navigation

### Services Section

- Grid layout with animated cards
- Hover effects with color transitions
- Staggered animation on scroll
- Service icons with rotation animations

### Gallery Section

- Responsive image grid
- Lightbox modal with navigation
- Image overlay effects
- Category filtering (ready for implementation)

### Contact Section

- Functional contact form
- Form validation
- Success/error states
- Contact information with icons
- Service area highlights

### Navigation

- Fixed navigation bar
- Smooth scrolling to sections
- Mobile hamburger menu
- Glass morphism effect on scroll

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Or connect your GitHub repository

## 🔧 Customization

### Adding New Services

Edit `src/components/Services.tsx` and add new service objects to the `services` array:

```typescript
{
  icon: '🎈',
  title: 'New Service',
  description: 'Description of the new service',
  color: 'from-purple-400 to-pink-400'
}
```

### Adding Gallery Images

Edit `src/components/Gallery.tsx` and add new items to the `galleryItems` array:

```typescript
{
  id: 7,
  image: 'path/to/image.jpg',
  title: 'New Creation',
  description: 'Description of the creation',
  category: 'Category'
}
```

### Customizing Colors

Update the CSS custom properties in `src/index.css`:

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  /* ... other colors */
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Contact

- **Website**: [Magic Balloons by Mack](https://magicballoonsbymack.com)
- **Email**: party@magicballoonsbymack.com
- **Phone**: (555) 123-BALLOON

---

Made with ❤️ and lots of balloons! 🎈✨
