# MDS Quote Generator

Professional quote generation system for Motores del Sur motorcycle dealership.

## 🚀 Live Demo
[View Live App](https://your-app.vercel.app) _(Update after deployment)_

## ✨ Features

- **Modern Apple-Style UI** - Clean, premium design with glassmorphism effects
- **Brand Support** - Loncin (red theme) and Voge (black/yellow theme)
- **Payment Modes** - Cash and Financing options
- **Motorcycle Management** - Built-in inventory system in Settings page
- **Print-Optimized** - Quotes fit perfectly on A4 paper
- **Responsive** - Works on desktop, tablet, and mobile
- **Professional PDFs** - Brand-specific headers, specs, and signatures

## 🎯 Quick Start

### For End Users
1. Open the app link
2. Fill in quote details (client info, motorcycle, payment)
3. Click "Generar Cotización"
4. Review and print/download PDF

### For Administrators
1. Click the Settings (⚙️) icon in the top-right
2. Manage motorcycle inventory:
   - Add new models
   - Edit specifications and pricing
   - Update available colors
   - Delete discontinued models

## 📁 Project Structure

```
/
├── components/
│   ├── QuoteForm.tsx          # Main form with Apple-style UI
│   ├── QuoteTemplate.tsx       # Printable quote template
│   └── ui/                     # Reusable UI components
├── pages/
│   ├── FormPage.tsx            # Form entry page
│   ├── PreviewPage.tsx         # Quote preview & print
│   └── SettingsPage.tsx        # Inventory management
├── data/
│   └── motorcycles.ts          # Motorcycle inventory data
├── styles/
│   └── globals.css             # Global styles + print CSS
└── routes.ts                   # React Router configuration
```

## 🛠️ Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## 📦 Deployment

This app is deployed on **Vercel** for instant global access.

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## 🎨 Customization

### Adding a New Motorcycle Brand
1. Go to Settings page
2. Select brand (Loncin or Voge)
3. Fill in all specifications
4. Set pricing and available colors
5. Save

### Updating Quote Details
All quote details are managed through the form:
- Quote number and dates
- Client information
- Motorcycle selection
- Payment terms (cash/financing)
- Discount options

## 🖨️ Print Features

Quotes are optimized for A4 paper with:
- 85% scale to fit one page
- Preserved brand colors and gradients
- Professional layout with signature area
- Terms and conditions section
- Company contact information

## 👤 Powered By

**AlejoAutomations** - Custom automation solutions

## 📄 License

Proprietary - © 2024 Motores del Sur S.R.L.

---

**Need help?** Contact the development team for support and feature requests.
