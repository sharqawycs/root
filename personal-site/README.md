## my personal site :)

[sharq.tech](https://sharq.tech)

### Stack

- **Astro** - Static site generator with islands architecture
- **Preact** - Lightweight React alternative for interactive components
- **MDX** - Markdown with JSX components for content
- **Bun** - Fast JavaScript runtime and package manager
- **Vercel** - Deployment and hosting
- **Tailwind CSS** - CSS framework
- **TypeScript**

### Architecture

- **File-based routing** - Pages in `src/pages/` become routes
- **Content collections** - Blog posts managed with Astro's content system
- **Hybrid approach** - `.astro` files for static content, `.tsx` for interactive components
- **Static generation** - Everything builds to pure HTML/CSS/JS

### Fonts

- **Satoshi Variable** - Main text and UI
- **Playfair Display** - Headers and accents (regular & italic)

### Development

```bash
bun install    # Install dependencies
bun run dev    # Start dev server with hot reload
bun run build  # Build for production to /dist
bun run preview # Preview production build locally
```

### Code Formatting

```bash
bun run format       # Format all files with Prettier
bun run format:check # Check if files are formatted correctly
```

### Project Structure

```
src/
├── pages/           # File-based routing
├── layouts/         # Page layouts
├── components/      # Reusable components
│   ├── layout/      # Header, Footer, Page wrapper
│   ├── home/        # Homepage sections
│   ├── blog/        # Blog-related components
│   ├── ui/          # UI components (Highlight, etc.)
│   └── mdx/         # Components for MDX content
├── content/         # Content collections (journal posts)
└── styles/          # Global CSS
```

That's it.
