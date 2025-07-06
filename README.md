### **Dr. Serena Blake, PsyD — Next.js Website**

---

### **📝 Overview**

This repository and live site present a professional portfolio and informational website for **Dr. Serena Blake, PsyD**, a clinical psychologist.  
The project is built with **Next.js 14+**, **Tailwind CSS v4**, and modern React best practices. The site is fully responsive, visually accessible, and designed to provide a welcoming, informative experience for prospective clients.

🔗 **Live Site:** [dr-serena-blake.vercel.app](https://dr-serena-blake-6e75.vercel.app/)  
📁 **Source Code:** [GitHub Repository](https://github.com/HarshitaNahata/dr-serena-blake)

---

### **✨ Features**

#### **1. Hero Section**
- Full-screen background video with a subtle overlay for text clarity.
- Headline, sub-headline, and call-to-action button ("Schedule a Consultation").
- Fully responsive: video and text scale gracefully on all devices.

#### **2. About Section**
- Professional headshot and detailed biography.
- Two-column layout on desktop, stacked layout on mobile.
- Elegant serif font for headings and body text.

#### **3. Services Section**
- Three primary services:
  - Anxiety & Stress Management
  - Relationship Counseling
  - Trauma Recovery
- Large, circular images for each service.
- Soft cream background (no card styling) for a modern look.
- Balanced spacing between image, heading, and description.

#### **4. FAQ Section**
- Accordion-style toggle UI with smooth, accessible animations.
- Blue divider lines for visual clarity.

#### **5. Contact Section**
- Contact form with required fields and inline validation.
- Rounded, soft UI with helpful labels and error messages.
- Office details (location, phone, email, hours) listed clearly.

#### **6. Footer**
- Displays name, title, contact info, office hours, and years of experience.
- Responsive, accessible, and consistent with the site theme.

---

### **🛠 Technical Stack**

- **Framework:** Next.js 14+
- **Styling:** Tailwind CSS v4 (with custom fonts/colors)
- **Image Optimization:** Next.js `<Image />` component
- **Form Validation:** Client-side, with inline error messages
- **Deployment:** Vercel

---

### **📁 Folder Structure**

```bash
dr-serena-blake/
├── public/
│   ├── hero-bg.mp4
│   ├── service-healthcare.jpg
│   ├── service-immigrant.jpg
│   ├── service-trauma.jpg
│   └── serena-blake-headshot.jpg
├── src/
│   ├── app/
│   │   └── page.tsx
│   └── components/
│       ├── TopBar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── tailwind.config.js
├── globals.css
└── ...
