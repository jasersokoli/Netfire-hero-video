# Netfire Hero Video

A React + TypeScript web app featuring a hero section, navigation bar, and example sections, styled with custom CSS and using SVG assets.

## Features

- **React 19 + TypeScript**: Modern, type-safe codebase.
- **Component-based**: Includes `Navbar`, `Hero`, `ExampleSection`, and `Footer` components.
- **Custom Styling**: CSS modules for each component in `src/styles/`.
- **SVG Assets**: All icons and logos are imported from `src/assets/` and used as image assets.
- **PWA Ready**: Based on Create React App PWA template.

## Project Structure

```
src/
  assets/         # SVG icons and logo
  components/     # React components (Navbar, Hero, etc.)
  styles/         # CSS files for each component
  App.tsx         # Main app component
  index.tsx       # Entry point
  svg.d.ts        # TypeScript declaration for SVG imports
public/
  index.html      # HTML template
  favicon.ico     # Favicon
```

## Setup & Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Run tests:**
   ```bash
   npm test
   ```

## SVG Asset Usage

SVGs in `src/assets/` are imported as image assets:
```tsx
import logo from '../assets/Logo.svg';
<img src={logo} alt="Logo" />
```
TypeScript support is enabled via `src/svg.d.ts`.

## Customization

- **Styling:** Edit CSS files in `src/styles/`.
- **Assets:** Add or replace SVGs in `src/assets/`.
- **Components:** Modify or add React components in `src/components/`.
