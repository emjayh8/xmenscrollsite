# X-Men Scroll Site 🦸‍♂️

An interactive, animated web experience featuring the iconic X-Men characters with smooth scroll-triggered animations and dynamic color transitions.

[![X-Men Scroll Site Preview](https://img.shields.io/badge/X--Men-Scroll%20Site-blue?style=for-the-badge&logo=react)](https://xmenscrollsite.web.app/)

## 🌟 Features

### **Interactive Character Sections**
- **Cyclops**: Optic blast animation with visor glow and energy beam effects
- **Wolverine**: Adamantium claws extension with yellow costume highlights
- **Storm**: Lightning summoning with atmospheric star effects
- **Psylocke**: Psychic sword manifestation with pink energy aura
- **Gambit**: Kinetic card throwing with rotation and energy charging
- **Colossus**: Metallic transformation from human to armored form

### **Responsive Design**
- **Desktop**: Vertical sidebar navigation with smooth transitions
- **Mobile/Tablet**: Horizontal navigation with adaptive layouts
- **Cross-device**: Optimized for all screen sizes and orientations

### **Advanced Animation System**
- **Scroll-triggered**: Animations activate when sections come into view
- **Sequenced timing**: Multi-stage animations with precise delays
- **Smooth transitions**: Framer Motion powered fluid animations
- **Color coordination**: Dynamic background colors matching each character's theme

### **Navigation Features**
- **Smart positioning**: Navigation adapts to screen size
- **Active state tracking**: Visual feedback for current section
- **Smooth scrolling**: Programmatic section centering
- **Debounced triggers**: Prevents animation conflicts during rapid scrolling

## 🚀 Live Demo

https://xmenscrollsite.web.app/

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Animation Library**: Framer Motion 12.23.3
- **Additional Animations**: GSAP 3.13.0, React Spring 10.0.1
- **Build Tool**: Create React App 5.0.1
- **Styling**: CSS3 with dynamic color transitions
- **Responsive Design**: CSS Grid, Flexbox, and media queries

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/xmen-scroll-site.git
   cd xmen-scroll-site/xmen-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Usage

### **Desktop Experience**
- Use the vertical sidebar on the left to navigate between characters
- Scroll naturally to trigger animations
- Each character section features unique animated effects

### **Mobile Experience**
- Horizontal navigation bar at the top
- Adaptive layout for different screen sizes
- Touch-friendly navigation buttons

### **Animation Triggers**
- **Scroll-based**: Animations activate when sections are 50% in view
- **Navigation-based**: Click navigation buttons for instant section changes
- **Debounced**: Prevents multiple triggers during rapid scrolling

## 🎨 Character Themes

| Character | Background Color | Animation Sequence |
|-----------|------------------|-------------------|
| **Cyclops** | `#ffffff` (White) | Visor glow → Optic blast → Starburst |
| **Wolverine** | `#0085ba` (Blue) | Claws extend → Highlights → Star effect |
| **Storm** | `#17609c` (Dark Blue) | Lightning bolt → Star effect |
| **Psylocke** | `#2a273d` (Dark Purple) | Pink aura → Sword manifest → Star effect |
| **Gambit** | `#bf1f2f` (Red) | White card rotation → Orange card energy |
| **Colossus** | `#fff203` (Yellow) | Human face → Metallic transformation → Star effect |

## 🔧 Project Structure

```
xmen-web/
├── public/
│   ├── assets/           # Character animation images
│   │   ├── cyclops_*.png
│   │   ├── wolverine_*.png
│   │   ├── storm_*.png
│   │   ├── psylocke_*.png
│   │   ├── gambit_*.png
│   │   └── colossus_*.png
│   └── index.html
├── src/
│   ├── App.js           # Main application component
│   ├── App.css          # Styling and animations
│   └── index.js         # Application entry point
└── package.json
```

## 🎯 Key Components

### **App.js**
- **State Management**: Tracks animation triggers, navigation states, and responsive design
- **Scroll Detection**: Monitors scroll position for animation triggers
- **Navigation System**: Handles both desktop sidebar and mobile horizontal nav
- **Animation Orchestration**: Coordinates multi-stage character animations

### **Responsive Navigation**
- **Desktop Sidebar**: Fixed vertical navigation with character-themed colors
- **Mobile Navigation**: Adaptive horizontal layout with grid/flexbox
- **Screen Size Detection**: Automatic layout switching based on viewport

### **Animation System**
- **Framer Motion**: Primary animation library for smooth transitions
- **Clip-path Animations**: Reveal effects for character powers
- **Opacity Transitions**: Fade-in effects for visual elements
- **Transform Animations**: Movement and rotation effects

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy Options**
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 🎨 Customization

### **Adding New Characters**
1. Add character images to `public/assets/`
2. Create new state variables for animation triggers
3. Add character section to the navigation arrays
4. Implement animation sequence in the trigger function
5. Add character assets to the JSX with motion components

### **Modifying Animations**
- Adjust timing in the `triggerAnimation` function
- Modify transition durations in motion components
- Update clip-path values for reveal effects
- Change color schemes in the navigation arrays

### **Responsive Adjustments**
- Modify breakpoints in the navigation components
- Adjust sizing variables for different screen sizes
- Update animation positioning for mobile devices

## 🐛 Troubleshooting

### **Common Issues**

**Animations not triggering:**
- Check if sections are properly positioned
- Verify scroll detection is working
- Ensure animation state variables are properly initialized

**Navigation not responsive:**
- Check browser console for errors
- Verify CSS media queries are working
- Test on different screen sizes

**Performance issues:**
- Optimize image sizes in `public/assets/`
- Consider lazy loading for animations
- Monitor bundle size with `npm run build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **Marvel Comics**: For the iconic X-Men characters
- **Framer Motion**: For the powerful animation library
- **React Community**: For the excellent documentation and tools
- **Create React App**: For the development environment

**Made with ❤️ and ⚡ by Emjay**

*"To me, my X-Men!" - Professor Charles Xavier*

License
MIT License
