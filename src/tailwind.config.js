/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Gradient directions
    'bg-gradient-to-br',
    'bg-gradient-to-r',
    
    // QuoteForm gradients
    'from-pink-200',
    'via-blue-100',
    'to-cyan-200',
    
    // QuoteTemplate gradients - Loncin (red)
    'from-white',
    'via-white',
    'to-red-700',
    'from-red-600',
    'to-red-700',
    
    // QuoteTemplate gradients - Voge (yellow)
    'to-yellow-400',
    'from-yellow-400',
    'to-yellow-500',
    'via-gray-100',
    'to-black',
    
    // QuoteTemplate - other
    'from-gray-50',
    'to-gray-100',
    'from-black',
    'from-70%',
    
    // Backdrop blur
    'backdrop-blur-md',
    'backdrop-blur-xl',
    'backdrop-saturate-150',
    
    // White opacity variants
    'bg-white/60',
    'bg-white/70',
    'bg-white/80',
    'bg-white/90',
    'hover:bg-white/80',
    
    // Rounded corners
    'rounded-[2.5rem]',
    'rounded-2xl',
    
    // Full color pattern match
    {
      pattern: /^(bg|text|border|from|via|to)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern: /^backdrop-(blur|saturate|brightness|contrast)-(sm|md|lg|xl|2xl|3xl)$/,
    },
    {
      pattern: /^(bg|text|border)-(white|black)\/(10|20|30|40|50|60|70|80|90|95)$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [],
}