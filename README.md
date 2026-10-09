# KENNYSONG

**Your next comfort-food craving starts here.**

Uwansum is a food and recipe-sharing website inspired by the joy of discovering delicious, comforting meals. Users can explore a collection of recipes, view individual recipe details, and submit their own recipes through a simple interface.

##  Features

- **Home Page** — A welcoming landing page with a food-inspired design.
- **Recipe Collection** — Browse a collection of recipes.
- **Recipe Details** — View individual recipes on dedicated pages.
- **Share a Recipe** — Submit a recipe with your name, email, and recipe details.
- **Database Integration** — Uses MongoDB Atlas to store submitted recipes.
- **Responsive Design** — A layout designed to work across different screen sizes.
- **Deployment** — Built with Next.js and deployed using Vercel.

##  Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Deployment:** Vercel
- **Version Control:** Git and GitHub

##  Project Structure

```text
kenny-food/
├── app/
│   ├── api/
│   │   └── recipes/
│   │       └── route.ts
│   ├── recipes/
│   │   └── [slug]/
│   ├── share/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── data/
│   └── recipes.ts
├── lib/
│   └── mongodb.ts
├── models/
│   └── Recipe.ts
├── public/
├── .env.local
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- A MongoDB Atlas account

### 1. Clone the repository

```bash
git clone https://github.com/enkay1309/uwansum-website.git
cd uwansum-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add your MongoDB Atlas connection string:

```env
MONGODB_URI="your-mongodb-atlas-connection-string"
```

Replace the placeholder with your actual connection string. Never commit `.env.local` or expose database credentials publicly.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

##  Database

Uwansum uses MongoDB Atlas to store recipes submitted through the website. Mongoose defines the recipe schema and manages database interactions.

The application uses an API route to process recipe submissions and save them to the database.

##  Deployment

The project can be deployed using [Vercel](https://vercel.com/).

To deploy:

1. Import the GitHub repository into Vercel.
2. Add `MONGODB_URI` under the project's environment variables.
3. Deploy the application.
4. Test recipe submissions on the deployed website.

