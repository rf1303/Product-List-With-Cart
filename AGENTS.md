# AGENTS.md

This file contains instructions for agentic coding agents working in this React + Vite product list with cart application.

## Build Commands

### Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint on all files (no test framework configured)

### Testing
No testing framework is currently configured. Consider adding Vitest or Jest for unit testing.

## Project Structure

This is a React 19 application using:
- **Build tool**: Vite 7.2.4
- **Styling**: Tailwind CSS v4.1.18 with Vite plugin
- **State management**: React Context API
- **Type checking**: TypeScript types available but using JSX files

Key directories:
- `src/` - Main application code
- `src/data-context/` - Context providers for data and cart state
- `public/` - Static assets including `data.json` with product data

## Code Style Guidelines

### File Naming
- Use PascalCase for React components: `Desserts.jsx`, `YourCartAdd.jsx`
- Use camelCase for utilities and hooks: `useDataJson()`
- Context files: `[Name]Context.jsx` pattern

### Import Organization
```javascript
// React imports first
import { createContext, useContext } from 'react';

// Local imports (relative paths)
import { useDataJson } from './DataJson.jsx';
import { YourAddCart } from './YourCartAdd.jsx'
```

### Component Structure
- Use functional components with named exports
- Prefer destructuring for props and context
- Keep components focused on single responsibility

### State Management
- Use React Context for global state (products, cart)
- Custom hooks pattern: `use[Feature]()` for context consumption
- Error boundaries in context providers with descriptive error messages

### Styling Conventions
- Use Tailwind CSS classes exclusively
- Follow design system colors from `style-guide.md`:
  - Primary: Red hsl(14, 86%, 42%), Green hsl(159, 69%, 38%)
  - Rose palette for UI elements (50-900)
- Responsive design: Mobile 375px, Desktop 1440px breakpoints
- Font: Red Hat Text (400, 600, 700 weights)

### Error Handling
- Use try-catch blocks for async operations
- Provide user-friendly error messages
- Log errors to console for debugging
- Return error UI components when appropriate

### ESLint Configuration
- Modern flat config format
- React hooks and refresh plugins enabled
- Unused vars rule: allows uppercase and underscore-prefixed variables
- JavaScript ES2020+ with JSX support

### Data Fetching
- Fetch from `public/data.json` for product data
- Use async/await pattern in custom hooks
- Handle loading and error states appropriately
- Validate response data before state updates

### Code Patterns
- Provider pattern for context: `[Name]Provider` components
- Custom hooks for context consumption with error validation
- Grid layouts using Tailwind grid classes
- Semantic HTML5 elements appropriately

## Development Notes

### Vite Configuration
- Uses React plugin with SWC for fast refresh
- Tailwind CSS Vite plugin for optimized styles
- Standard Vite development server setup

### Dependencies
- React 19.2.0 with DOM
- Tailwind CSS v4.1.18
- ESLint with React-specific plugins
- No testing framework currently installed

### Accessibility
- Use semantic HTML elements
- Provide alt text for images with descriptive content
- Ensure keyboard navigation support
- Test color contrast for WCAG compliance

## Common Tasks

### Adding New Products
Update `public/data.json` with new product objects following existing structure.

### Modifying Cart Logic
Work in `src/data-context/CartOrderData.jsx` for cart state management.

### Styling Updates
Use Tailwind classes following the color palette and typography from `style-guide.md`.

### Performance Considerations
- React.lazy() for code splitting large components
- useMemo/useCallback for expensive computations
- Optimize images with proper srcset usage