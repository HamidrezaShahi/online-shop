# Online Shop - E-Commerce Platform

A modern, full-featured e-commerce platform built with Next.js 14, TypeScript, and MongoDB. This project provides a complete online shopping experience with product management, shopping cart, checkout, user authentication, and admin features.

## 🚀 Features

### Customer Features

- **Product Browsing**: Browse products by categories with featured sections
- **Shopping Cart**: Add products to cart and manage quantities
- **Checkout**: Complete purchase flow with order management
- **Wishlist**: Save favorite products for later
- **User Authentication**: Sign up and login functionality
- **My Account**: User account management
- **Product Search & Filtering**: Find products easily
- **Flash Sales**: Time-limited promotional products

### Admin Features

- **Product Management**: Add, edit, and delete products
- **Product Type Management**: Manage product categories/types
- **Property Management**: Manage product properties
- **Property Type Management**: Manage property types

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **Icons**: Lucide React, React Icons

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- MongoDB database (local or cloud instance)
- Environment variables configured (see below)

## 🔧 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:

   ```bash
   cd "D:\online shop"
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # MongoDB Configuration
   MNG_URI=your-mongodb-host:port
   MNG_PASS=your-mongodb-password

   # If using local MongoDB without authentication:
   # Leave MNG_URI and MNG_PASS empty or unset
   ```

   The application will default to `mongodb://localhost:27017/` if environment variables are not set.

## 🏃 Running the Project

### Development Mode

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-update as you edit the files.

### Production Build

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## 📁 Project Structure

```
online shop/
├── api/                    # API models, repositories, and services
│   ├── models/            # TypeScript models/interfaces
│   ├── repository/        # Data access layer
│   └── services/          # Business logic layer
├── app/                   # Next.js app directory
│   ├── api/              # API routes
│   ├── about/            # About page
│   ├── add/              # Admin pages (add product, property, etc.)
│   ├── cart/             # Shopping cart page
│   ├── checkout/         # Checkout page
│   ├── contact/          # Contact page
│   ├── myAccount/        # User account page
│   ├── product/          # Product detail page
│   ├── signup/           # Authentication pages
│   └── wishlist/         # Wishlist page
├── components/            # React components
│   ├── base/             # Business logic components
│   ├── common/           # Reusable UI components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # UI primitives (shadcn/ui)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
│   ├── mongodb.ts        # MongoDB connection
│   └── utils.ts          # Helper functions
└── public/                # Static assets
```

## 🔌 API Endpoints

The application includes RESTful API endpoints:

- `POST/GET/PUT/DELETE /api/v1/base/productType` - Product type management
- `POST/GET/PUT/DELETE /api/v1/base/property` - Property management
- `POST/GET/PUT/DELETE /api/v1/base/propType` - Property type management

## 🎨 Styling

This project uses:

- **Tailwind CSS** for utility-first styling
- **Geist Font** (Vercel's font family) for typography
- **shadcn/ui** components built on Radix UI

## 📝 Key Pages

- `/` - Home page with featured products and categories
- `/product` - Product listing/detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/wishlist` - User wishlist
- `/myAccount` - User account management
- `/signup` - User registration
- `/signup/login` - User login
- `/add/product` - Admin: Add product
- `/add/ptype` - Admin: Add product type
- `/add/property` - Admin: Add property
- `/add/prtype` - Admin: Add property type

## 🔐 Environment Variables

Make sure to configure these environment variables:

- `MNG_URI`: MongoDB connection URI (host:port)
- `MNG_PASS`: MongoDB password (if authentication is required)

For local MongoDB without authentication, these can be left unset.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [MongoDB Documentation](https://www.mongodb.com/docs/) - Learn about MongoDB
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [Radix UI Documentation](https://www.radix-ui.com/) - Learn about Radix UI components

## 🚀 Deploy

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository
2. Import your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

This project is private and proprietary.
