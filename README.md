# 🚀 ZenoTrade - Next-Gen Trading Platform

<div align="center">
  <img src="frontend\public\media\images\logo1.png" alt="StockTrader Pro Logo" width="300" height="auto" />
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) &nbsp;&nbsp;&nbsp;[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) &nbsp;&nbsp;  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  
  *Your Gateway to Smart Trading*
</div>

## 🌟 Project Overview

StockTrader Pro is a modern, full-stack trading platform with three powerful components:

```
┌───────────────┐           ┌──────────────┐
│    Frontend   │           │   Dashboard  │
│  Landing &    │───┐   ┌───│   Trading    │
│     Auth      │   │   │   │  Interface   │
└───────────────┘   │   │   └──────────────┘
                    ▼   ▼
              ┌──────────────┐
              │   Backend    │
              │     API      │
              └──────────────┘
                     │
                     ▼
              ┌──────────────┐
              │   MongoDB    │
              │  Database    │
              └──────────────┘
```

## 📱 Frontend (`/frontend`)

The public-facing application featuring:

- **Landing Page Components**
  - Responsive Navigation Bar
  - Dynamic Home Page
  - About Section
  - Products Showcase
  - Pricing Plans
  - Support Center
  
- **User Management**
  - Login System
  - Signup Flow
  - Account Opening Process
  - User Authentication

## 📊 Dashboard (`/dashboard`)

The trader's command center with:

- **Core Trading Features**
  - Buy/Sell Action Windows
  - Real-time Position Tracking
  - Holdings Management
  - Order History
  
- **Analytics & Monitoring**
  - Doughnut Graph for Portfolio Distribution
  - Vertical Graph for Performance Analysis
  - WatchList for Market Monitoring
  - Fund Management Interface

- **User Experience**
  - Intuitive Menu Navigation
  - Top Bar with Quick Actions
  - Summary Dashboard
  - Responsive Layout

## ⚙️ Backend (`/backend`)

Robust server infrastructure featuring:

- **Data Models**
  - Holdings Management
  - Orders Processing
  - Positions Tracking
  - User Authentication
  
- **Schema Definitions**
  - Holdings Schema
  - Orders Schema
  - Positions Schema
  - User Schema

## 🚀 Quick Start

### Prerequisites
```bash
Node.js >= 14.x
MongoDB >= 4.x
npm or yarn
```

### Setting Up Development Environment

1. **Clone the Repository**
```bash
git clone <repository-url>
cd stock-trading-platform
```

2. **Backend Setup**
```bash
cd backend
npm install

# Create .env file with:
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret

npm start
```

3. **Frontend Setup**
```bash
cd frontend
npm install
npm start
# Access at http://localhost:3000
```

4. **Dashboard Setup**
```bash
cd dashboard
npm install
npm start
# Access at http://localhost:3001
```

## 🔧 Core Technologies

### Frontend & Dashboard
- React.js for UI Components
- Context API for State Management
- Chart.js for Data Visualization
- CSS for Modern Styling

### Backend
- Node.js Runtime
- Express.js Framework
- MongoDB Database
- Mongoose ODM
- JWT Authentication

## 📦 Project Structure

```
stock-trading-platform/
├── frontend/                 # Public website
│   ├── src/
│   │   ├── landing_page/    # Landing page components
│   │   └── test/            # Frontend tests
│   └── public/              # Static assets
│
├── dashboard/               # Trading interface
│   ├── src/
│   │   ├── components/      # Trading components
│   │   └── data/           # Data management
│   └── public/             # Dashboard assets
│
└── backend/                # Server
    ├── model/             # Data models
    ├── schemas/           # Database schemas
    └── index.js          # Entry point
```

## 🔐 Security Features

- JWT-based Authentication
- Secure Password Hashing
- Protected API Endpoints
- Input Validation
- Session Management

## 🛠️ Development Scripts

```bash
# Start development servers
npm run dev      # Run all services
npm run frontend # Run frontend only
npm run dashboard # Run dashboard only
npm run backend  # Run backend only

# Testing
npm test        # Run all tests
npm run test:frontend   # Frontend tests
npm run test:dashboard  # Dashboard tests
npm run test:backend    # Backend tests

# Build for production
npm run build   # Build all components
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a pull request

---

<div align="center">
  <p>Made with ❤️ for traders who demand excellence</p>
</div>
