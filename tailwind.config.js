module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Saffron Orange
        primary: {
          DEFAULT: "#E67E22", // saffron orange for CTAs and brand power
          50: "#FDF2E9", // lightest saffron tint
          100: "#FCE4CA", // light saffron tint
          200: "#F8C471", // medium saffron tint
          300: "#F5B041", // darker saffron tint
          400: "#F39C12", // turmeric yellow transition
          500: "#E67E22", // base saffron orange
          600: "#D35400", // darker saffron
          700: "#BA4A00", // deep saffron
          800: "#A04000", // deepest saffron
          900: "#873600", // darkest saffron
        },
        // Secondary Colors - Turmeric Yellow
        secondary: {
          DEFAULT: "#F39C12", // turmeric yellow for supporting hierarchy
          50: "#FEF9E7", // lightest turmeric
          100: "#FCF3CF", // light turmeric
          200: "#F9E79F", // medium turmeric
          300: "#F7DC6F", // darker turmeric
          400: "#F4D03F", // deep turmeric
          500: "#F39C12", // base turmeric yellow
          600: "#D68910", // darker turmeric
          700: "#B7950B", // deep turmeric
          800: "#9A7D0A", // deepest turmeric
          900: "#7D6608", // darkest turmeric
        },
        // Accent Colors - Cardamom Green
        accent: {
          DEFAULT: "#27AE60", // cardamom green for conversion moments
          50: "#E8F8F5", // lightest cardamom
          100: "#D1F2EB", // light cardamom
          200: "#A3E4D7", // medium cardamom
          300: "#76D7C4", // darker cardamom
          400: "#48C9B0", // deep cardamom
          500: "#27AE60", // base cardamom green
          600: "#229954", // darker cardamom
          700: "#1E8449", // deep cardamom
          800: "#196F3D", // deepest cardamom
          900: "#145A32", // darkest cardamom
        },
        // Background Colors
        background: "#FFFFFF", // clean canvas for content clarity
        surface: {
          DEFAULT: "#F8F9FA", // section separation without borders
          50: "#FAFBFC", // lightest surface
          100: "#F8F9FA", // base surface
          200: "#E9ECEF", // medium surface
          300: "#DEE2E6", // darker surface
        },
        // Text Colors
        text: {
          primary: "#2C3E50", // high contrast for mobile scanning
          secondary: "#7F8C8D", // supporting without distraction
          light: "#BDC3C7", // light text for subtle elements
          dark: "#1C2833", // darkest text for emphasis
        },
        // Status Colors
        success: "#27AE60", // positive reinforcement for achievements
        warning: "#E74C3C", // scarcity/urgency countdown timers
        error: "#E74C3C", // form validation feedback only
        info: "#3498DB", // informational elements
      },
      fontFamily: {
        // Headlines - Bold impact with playful personality
        poppins: ['Poppins', 'sans-serif'],
        // Body - Exceptional mobile legibility
        inter: ['Inter', 'sans-serif'],
        // Default sans
        sans: ['Inter', 'sans-serif'],
        // Accents - Cultural authenticity
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        // Mobile-first typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        // CTA button shadows
        'cta': '0 4px 12px rgba(230, 126, 34, 0.15)',
        'cta-hover': '0 6px 16px rgba(230, 126, 34, 0.2)',
        // Card shadows
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out forwards',
        'slide-up': 'slideUp 400ms ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}