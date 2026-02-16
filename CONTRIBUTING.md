# Contributing to Alaska's Store

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and add your credentials
4. Run dev server: `npm run dev`

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── *Banner.tsx  # Feature banners
│   ├── *Card.tsx    # Card components
│   └── *Section.tsx # Page sections
├── hooks/           # Custom React hooks
├── lib/             # Utilities and constants
├── pages/           # Page components
├── services/        # API services
└── types/           # TypeScript types
```

## Adding New Features

### Adding a New Partner Site

1. Update `src/lib/constants.ts`:
   ```typescript
   export const allSites: SiteInfo[] = [
     // ... existing sites
     {
       id: 'new-site',
       name: 'New Site Name',
       url: 'https://newsite.com',
       description: 'Site description',
       category: 'Commerce',
       icon: '🎯',
       color: 'bg-blue-500',
     },
   ];
   ```

2. If it has products, update `src/services/productAggregator.ts`

### Adding a New Category

1. Update `src/lib/constants.ts`:
   ```typescript
   export const categories: Category[] = [
     // ... existing categories
     {
       id: 'new-category',
       name: 'Category Name',
       icon: '🎯',
       description: 'Category description',
       slug: 'category-slug',
       color: 'bg-blue-500',
     },
   ];
   ```

## Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components small and focused
- Use React Query for data fetching

## Testing

Before submitting:

```bash
# Type check
npm run build

# Test locally
npm run dev
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit PR with clear description

## Questions?

Contact the development team.
