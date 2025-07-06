# 🧺 LaundryFlow

**The complete laundry subscription platform for South Africa**

LaundryFlow connects busy customers with trusted local laundry providers through flexible subscription plans. Built with Next.js, Supabase, and modern web technologies.

![LaundryFlow Banner](https://via.placeholder.com/800x200/2563eb/ffffff?text=LaundryFlow+-+Laundry+Made+Simple)

## 🌟 Features

### For Customers

- 📱 **Subscription Plans** - Basic (R199), Premium (R349), Family (R549)
- 🚚 **Flexible Service Options** - Pickup/delivery or drop-off
- 📍 **Provider Discovery** - Find verified laundry providers in your area
- 📅 **Easy Scheduling** - Book services at your convenience
- 📊 **Order Tracking** - Real-time status updates
- 💳 **Secure Payments** - Stripe integration with ZAR support

### For Laundry Providers

- 🏪 **Provider Dashboard** - Manage orders, customers, and analytics
- 💰 **Transparent Commission** - 12-20% based on volume
- 📈 **Business Growth** - Access to subscription-based customers
- 🔧 **Flexible Service Models** - Choose pickup/delivery, drop-off, or hybrid
- 📊 **Analytics & Reporting** - Track performance and revenue

### For Platform Owners

- 🎛️ **Super Admin Panel** - Manage providers, customers, and platform
- 💼 **Multi-tenancy** - Support multiple laundry providers
- 📊 **Platform Analytics** - Revenue, growth, and performance metrics
- ⚙️ **Provider Management** - Onboarding, verification, and support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Stripe account (for payments)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/laundryflow.git
cd laundryflow

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Database Setup

1. Create a new Supabase project
2. Run the database migrations:

```bash
# Run initial schema
npm run db:migrate

# Seed sample data
npm run db:seed
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## 📱 Mobile App

LaundryFlow includes a React Native mobile app built with Expo.

```bash
# Navigate to mobile app directory
cd mobile

# Install dependencies
npm install

# Start Expo development server
npx expo start
```

## 🏗️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern component library
- **React Hook Form** - Form handling
- **Zustand** - State management

### Backend

- **Supabase** - Database, authentication, and real-time
- **PostgreSQL** - Relational database
- **Row Level Security** - Data security
- **Supabase Edge Functions** - Serverless functions

### Mobile

- **Expo** - React Native development platform
- **React Navigation** - Navigation library
- **React Native Paper** - Material Design components

### Payments & Services

- **Stripe** - Payment processing
- **Stripe Connect** - Multi-party payments
- **Resend** - Email notifications
- **Twilio** - SMS notifications (optional)

## 📊 Database Schema

### Core Tables

- `users` - Customer and provider accounts
- `laundry_shops` - Provider information and settings
- `subscription_plans` - Available plans per provider
- `subscriptions` - Customer subscriptions
- `orders` - Service bookings and tracking
- `payments` - Payment history and status
- `service_areas` - Provider coverage areas

### Key Relationships

- Users can have multiple subscriptions (different providers)
- Providers can offer multiple subscription plans
- Orders are linked to subscriptions and providers
- Payments track both subscription and one-off charges

## 🔐 Authentication & Authorization

LaundryFlow uses Supabase Auth with Row Level Security (RLS):

- **Customers** - Can only access their own data
- **Shop Admins** - Can access their shop's orders and customers
- **Super Admins** - Full platform access

### User Roles

```typescript
type UserRole = "customer" | "shop_admin" | "super_admin";
```

## 💳 Payment Flow

1. **Subscription Creation** - Customer selects plan and provider
2. **Stripe Setup** - Create customer and subscription in Stripe
3. **Webhook Processing** - Handle payment events
4. **Load Allocation** - Credit customer's account with loads
5. **Service Booking** - Deduct loads when services are booked

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Docker

```bash
# Build Docker image
docker build -t laundryflow .

# Run container
docker run -p 3000:3000 laundryflow
```

## 📱 Mobile App Deployment

### iOS (App Store)

```bash
# Build for iOS
eas build --platform ios

# Submit to App Store
eas submit --platform ios
```

### Android (Google Play)

```bash
# Build for Android
eas build --platform android

# Submit to Google Play
eas submit --platform android
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```

## 📚 API Documentation

### Customer Endpoints

- `GET /api/subscriptions` - Get user subscriptions
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `GET /api/providers` - Find nearby providers

### Provider Endpoints

- `GET /api/shop/orders` - Get shop orders
- `PUT /api/shop/orders/:id` - Update order status
- `GET /api/shop/analytics` - Get shop analytics

### Admin Endpoints

- `GET /api/admin/providers` - Manage providers
- `GET /api/admin/analytics` - Platform analytics
- `POST /api/admin/providers/:id/approve` - Approve provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Use conventional commit messages
- Update documentation for API changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 **Email**: support@laundryflow.co.za
- 💬 **Discord**: [Join our community](https://discord.gg/laundryflow)
- 📖 **Documentation**: [docs.laundryflow.co.za](https://docs.laundryflow.co.za)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/laundryflow/issues)

## 🗺️ Roadmap

### Phase 1 (Current)

- [x] Customer web app
- [x] Provider signup and dashboard
- [x] Basic subscription management
- [x] Order tracking
- [ ] Mobile app (React Native)
- [ ] Payment integration (Stripe)

### Phase 2 (Q2 2024)

- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] SMS notifications
- [ ] Provider mobile app
- [ ] API for third-party integrations

### Phase 3 (Q3 2024)

- [ ] AI-powered demand forecasting
- [ ] Route optimization for providers
- [ ] Loyalty program
- [ ] Corporate accounts
- [ ] Franchise management

## 🏆 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Supabase](https://supabase.com/) - The open source Firebase alternative
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Stripe](https://stripe.com/) - Payment processing platform

---

**Made with ❤️ in South Africa**

_LaundryFlow - Making laundry simple for busy people everywhere_

```

This README provides comprehensive documentation covering:

- ✅ **Project overview** and features
- ✅ **Quick start** instructions
- ✅ **Tech stack** details
- ✅ **Database schema** overview
- ✅ **Authentication** and security
- ✅ **Payment flow** explanation
- ✅ **Deployment** instructions
- ✅ **API documentation** structure
- ✅ **Contributing** guidelines
- ✅ **Roadmap** and future plans
- ✅ **Support** information

The README is structured to help both developers and stakeholders understand the project quickly and get started with development or deployment.
```
