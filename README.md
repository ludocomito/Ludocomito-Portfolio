# Minimal Portfolio

A modern, minimal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Package Manager**: PNPM
- **Additional Libraries**: 
  - Lucide React (icons)
  - Next Themes (dark/light mode)
  - React Hook Form + Zod (forms)
  - Framer Motion compatible components

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **PNPM** (recommended package manager)

### Installing PNPM

If you don't have PNPM installed, you can install it globally:

```bash
npm install -g pnpm
```

Or using other methods from [pnpm.io](https://pnpm.io/installation).

## Getting Started

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd minimal-portfolio
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

The page will automatically reload when you make changes to the code.

## Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Creates an optimized production build
- `pnpm start` - Starts the production server (run `pnpm build` first)
- `pnpm lint` - Runs ESLint to check for code issues

## Development Workflow

1. **Development**: Use `pnpm dev` for local development with hot reloading
2. **Building**: Use `pnpm build` to create a production-ready build
3. **Production**: Use `pnpm start` to serve the production build locally

## Project Structure

```
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── projects/       # Projects section
├── components/         # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
├── styles/            # Additional stylesheets
└── README.md          # This file
```

## Customization

- **Styling**: Modify `tailwind.config.ts` for custom Tailwind configuration
- **Components**: Add new components in the `components/` directory
- **Pages**: Add new routes in the `app/` directory (App Router)
- **Global Styles**: Edit `app/globals.css` for global styling

## Rendering LaTeX

This project uses `react-latex-next` to render LaTeX. The KaTeX stylesheet is already imported in `app/layout.tsx`.

To add LaTeX to a component, first import the `Latex` component:

```tsx
import Latex from "react-latex-next";
```

### Inline LaTeX

To render LaTeX within a line of text, wrap the expression in single dollar signs (`$`).

```tsx
<p>
  This is an inline formula: <Latex>$a^2 + b^2 = c^2$</Latex>.
</p>
```

### Block LaTeX

For larger equations that should appear on their own line, wrap the expression in double dollar signs (`$$`). It's recommended to use template literals (`{`$$...$$`}`) to avoid issues with backslashes.

```tsx
<Latex>
  {`$$ x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} $$`}
</Latex>
```

## Deployment

This project can be deployed on any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repo for automatic deployments
- **Netlify**: Use the build command `pnpm build` and publish directory `out` (if using static export)
- **Other platforms**: Run `pnpm build` and deploy the `.next` folder

## Environment Variables

If your project uses environment variables, create a `.env.local` file in the root directory:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Troubleshooting

### Common Issues

1. **Port already in use**: If port 3000 is busy, Next.js will automatically use the next available port
2. **Installation issues**: Try deleting `node_modules` and `pnpm-lock.yaml`, then run `pnpm install` again
3. **Build errors**: Check the console output for specific TypeScript or build errors

### Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Visit [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Browse [Radix UI Documentation](https://www.radix-ui.com/)

## License

[Add your license information here] 