# ✨ Starmap Landing

A beautiful, interactive star map poster customization platform built with Next.js 15 and d3-celestial. Create personalized celestial maps capturing the exact night sky from any moment in time.

## 🌟 Features

- **Interactive Star Map Customization** - Real-time celestial map rendering with d3-celestial
- **Full Personalization** - Customize colors, layouts, frames, and display options
- **Date & Location Precision** - Set exact date, time, timezone, and coordinates
- **Smooth Scrolling** - Locomotive Scroll integration for premium UX
- **Responsive Design** - Optimized for all devices with Tailwind CSS
- **Modern Stack** - Built with Next.js 15 App Router and React 18

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 18.3.1
- **Styling:** Tailwind CSS 3.4.1
- **Star Map:** d3-celestial
- **Animations:** GSAP, Locomotive Scroll
- **Icons:** Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/KarimAdel-1/starmap-landing.git

# Navigate to project directory
cd starmap-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.jsx          # Root layout with SmoothScroll
│   ├── page.jsx            # Landing page route
│   └── create/
│       └── page.jsx        # Product customization route
├── components/
│   ├── customize/          # Product customization components
│   │   ├── ProductNav.jsx
│   │   ├── ProductHero.jsx
│   │   ├── ProductToolbar.jsx
│   │   ├── CelestialMap.jsx
│   │   └── ...
│   ├── landing/            # Landing page components
│   │   ├── HeroSection/
│   │   ├── AboutSection/
│   │   ├── ProductsSection/
│   │   └── ...
│   └── SmoothScroll.jsx    # Locomotive Scroll wrapper
├── pages/
│   ├── LandingPage.jsx
│   └── ProductPage.jsx
└── data/                   # d3-celestial star data
```

## 🎨 Key Features

### Star Map Customization
- Background color selection
- Map color customization
- Layout options (portrait/landscape)
- Frame styles
- Constellation lines, ecliptic, grid, and Milky Way toggles
- Personal message with character limit
- Date, time, and timezone selection
- Location coordinates (latitude/longitude)

### Smart Color Logic
- White text on dark backgrounds
- Black text on white backgrounds
- Dynamic border color based on background
- Uppercase formatting for all poster text

### Smooth Scrolling
- Locomotive Scroll for premium feel
- Fixed navigation with scroll-based animations
- Independent scrollable dropdowns with `data-scroll-ignore`

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📝 Environment

Default configuration uses Egypt coordinates:
- Latitude: 30.0444
- Longitude: 31.2357
- Timezone: +02:00
- Default time: 23:45

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Karim Adel**
- GitHub: [@KarimAdel-1](https://github.com/KarimAdel-1)

---

Made with ❤️ and ✨ by Karim Adel
