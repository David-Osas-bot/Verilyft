# VeriLyft

**Verify before you buy.** VeriLyft is a mobile marketplace that lets buyers order physical-market products across Africa with independent, in-person verification before payment is released — plus integrated logistics to get the item to their door.

## Overview

Traditional online marketplaces for physical/local markets carry a trust problem: buyers can't see or inspect the product before paying, and sellers risk chargebacks or disputes after the fact. VeriLyft solves this with a three-sided model:

- **Buyers** browse verified vendors and request products from physical markets
- **Errand Guys** (verification agents) physically inspect the product — checking condition, authenticity, and price — before funds are released from escrow
- **V-RIDE Drivers** handle last-mile delivery of verified products to the buyer's door or a PUDO (pick-up/drop-off) hub

All three roles live in a single app, with a role switcher letting one user operate as Buyer, Seller, Errand Guy, or Driver depending on context.

## Key Features

- 🔍 **Product Verification** — Errand Guys inspect items against a structured checklist (brand, model, condition, price match) with photo evidence before purchase funds are released
- 💰 **Escrow-Protected Payments** — Funds are held securely until verification is complete
- 🚗 **V-RIDE Logistics** — Integrated ride-hailing and parcel delivery for consolidated, trusted last-mile shipping
- 📍 **PUDO Hub Network** — Pick-up/drop-off centres as an alternative to doorstep delivery
- 💬 **In-App Negotiation & Chat** — Buyers and Errand Guys negotiate verification fees and communicate in real time
- ⚠️ **Dispute Resolution** — Built-in flow for reporting issues (wrong/damaged/missing items) with photo evidence
- 🔄 **Multi-Role Accounts** — Switch between Buyer, Seller, Errand Guy, and Driver workspaces from one account
- 👛 **Wallet** — Track earnings, withdrawals, and transaction history across all roles

## Tech Stack

- **React Native** (Expo, managed workflow)
- **TypeScript**
- **React Navigation** — stack + bottom tab navigation, split by role
- **Zustand** — state management (auth, active role, wallet, chat)
- **NativeWind** (Tailwind CSS for React Native) — styling
- **Backend** — separate repo (Node.js API)

## Project Structure

```
verilyft/
├── App.tsx                  # Entry point
├── src/
│   ├── navigation/          # Role-based navigators (Auth, Buyer, Errand Guy, Driver)
│   ├── features/            # Domain-driven feature folders (auth, buyer, errand-guy, v-ride, wallet, chat, etc.)
│   ├── components/          # Shared UI components
│   ├── store/               # Zustand stores
│   ├── services/            # API clients, sockets, location
│   ├── hooks/
│   ├── constants/
│   ├── types/
│   └── utils/
├── assets/
└── app.json
```

## Getting Started

### Prerequisites
- Node.js `>=20.19.4`
- npm
- Expo Go app (iOS/Android) or an Android/iOS emulator

### Installation

```bash
git clone <repo-url>
cd verilyft
npm install
```

### Running the app

```bash
npx expo start
```

Then:
- Press `a` to open on a connected Android emulator/device
- Press `i` to open on iOS simulator (macOS only)
- Press `w` to open in a web browser
- Scan the QR code with Expo Go to run on a physical device

If your device can't reach the dev server over your local network, use tunnel mode:

```bash
npx expo start --tunnel
```

## Status

🚧 Actively in development — frontend UI is being built out screen by screen based on Figma designs, ahead of backend integration.

## License

See [LICENSE](./LICENSE) for details.
