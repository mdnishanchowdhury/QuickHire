### QuickHire - Installation Steps
## 1. Clone the Repository
```text
git clone https://github.com/mdnishanchowdhury/QuickHire.git
cd QuickHire
```
## 2. Backend Setup

Navigate to backend folder:
```text
cd backend
```
# Install dependencies:
```text
pnpm install
```

# Create a .env file in backend/ with your database info:
```text
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
APP_URL=
```

# Run Prisma migrations (optional if using):
```text
npx prisma migrate dev
Start backend server in dev mode:
pnpm dev
```
Backend will run at http://localhost:5000.

## 3. Frontend Setup

Navigate to frontend folder:
```text
cd ../frontend
Install dependencies:
npm install
```
# Start frontend server:
```text
npm dev
```
Frontend will run at http://localhost:5173.
