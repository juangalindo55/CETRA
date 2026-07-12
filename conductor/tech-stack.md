# Technology Stack: CETRA

## 1. Core Stack
- **Language**: TypeScript (Strict mode, Type-safe client/server definitions)
- **Framework**: Next.js 16 (App Router, Server-First architecture)
- **Runtime**: React 19

## 2. Styling & Layout
- **CSS Engine**: Tailwind CSS v4 (Atomic utilities, no custom CSS modules)
- **Icons**: Lucide React (v1.8)

## 3. Animations & Interactivity
- **Micro-interactions**: Web Animations API (WAAPI) native of the browser (for optimized scroll-reveal and sequence animations)
- **Complex UI Motion**: Framer Motion (for dynamic accordions, layouts, and route transitions)

## 4. Content Architecture
- **Parser**: next-mdx-remote + gray-matter (for dynamic rendering of clinical services pages with typed frontmatter validation)

## 5. Quality & Tools
- **Linter**: ESLint (Next.js configurations)
- **Testing**: Puppeteer (for end-to-end browser diagnostics)
- **Asset Optimization**: SVGO (for SVG compression)
