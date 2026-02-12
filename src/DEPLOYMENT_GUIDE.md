# Deploying MDS Quote Generator to Vercel

## 📦 Quick Deploy (2 minutes)

### Step 1: Download Your Project
1. In Figma Make, click the **Export** or **Download** button
2. You'll get a ZIP file with all your code
3. Extract the ZIP to a folder on your computer

### Step 2: Deploy to Vercel

#### Option A: Deploy via Web (Easiest - No coding needed)
1. Go to **[vercel.com/new](https://vercel.com/new)**
2. Sign up with GitHub, GitLab, or Bitbucket (free)
3. Click **"Deploy with GitHub"** or **"Import Project"**
4. Drag and drop your extracted project folder
5. Click **"Deploy"**
6. Wait 1-2 minutes ⏱️
7. You'll get a live URL like: `https://mds-quotes.vercel.app` 🎉

#### Option B: Deploy via CLI (For developers)
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to your project folder
cd /path/to/your-project

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? mds-quotes
# - Directory? ./
# - Override settings? No

# For production deployment:
vercel --prod
```

---

## 🔗 After Deployment

### Your Live URLs:
- **Preview URL**: `https://mds-quotes-abc123.vercel.app` (changes with each deploy)
- **Production URL**: `https://mds-quotes.vercel.app` (permanent)

### Share with Client:
1. Copy the production URL
2. Send to client via email/WhatsApp
3. They can open it on any device (phone, tablet, computer)

---

## 🎨 Custom Domain (Optional)

Want a branded URL like `quotes.motoresdelsur.com`?

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records (Vercel provides instructions)
5. Done! ✨

---

## 🔄 Updating Your App

When you make changes:

**Method 1: Re-upload via Web**
1. Export updated project from Figma Make
2. Go to your Vercel project dashboard
3. Drag and drop the new version
4. Vercel auto-deploys

**Method 2: GitHub Auto-Deploy (Best)**
1. Push code to GitHub
2. Connect Vercel to your GitHub repo
3. Every push = automatic deployment
4. No manual uploads needed!

---

## 🛠️ Troubleshooting

### Issue: Build fails
- Make sure all files are included in the export
- Check that `package.json` and `vite.config.ts` exist

### Issue: Page shows blank
- Check browser console for errors (F12)
- Verify all image assets are included

### Issue: Routes not working
- Vercel automatically handles React Router
- No additional config needed!

---

## 📱 Testing the Deployment

Once deployed, test these features:
- ✅ Form loads correctly
- ✅ Motorcycle selection works
- ✅ Quote preview displays properly
- ✅ Print/PDF download works
- ✅ Settings page accessible
- ✅ Works on mobile devices

---

## 💡 Pro Tips

1. **Share the link early** - Get client feedback quickly
2. **Use Preview URLs** for testing changes before production
3. **Enable password protection** in Vercel settings if needed
4. **Check Analytics** - Vercel shows how many people visit

---

## 📧 What to Send Your Client

**Email Template:**

> Hi [Client Name],
>
> The MDS Quote Generator is now live! 🎉
>
> **Access the app here:** https://mds-quotes.vercel.app
>
> **Features:**
> - Generate professional quotes for Loncin & Voge motorcycles
> - Choose cash or financing payment options
> - Download/print quotes as PDF
> - Manage motorcycle inventory in Settings
>
> The app works on desktop, tablet, and mobile devices.
>
> Let me know if you have any feedback!
>
> Best regards,
> [Your Name]

---

## 🚀 Next Steps

1. Deploy now → **[vercel.com/new](https://vercel.com/new)**
2. Share link with client
3. Collect feedback
4. Make improvements
5. Re-deploy with one click!

Need help? Let me know! 👍
