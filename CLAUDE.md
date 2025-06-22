# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server on port 8443
npm run lint         # Run ESLint
```

### Database
```bash
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run Prisma migrations
npx prisma studio    # Open Prisma Studio for database management
```

### Testing
```bash
npm run test         # Run Jest tests
npm run test:watch   # Run tests in watch mode
```

### Docker Services
```bash
docker-compose up -d # Start PostgreSQL and Redis
docker-compose down  # Stop services
```

### Other
```bash
npm run generate:og-image  # Generate OpenGraph images
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.3.3 with App Router
- **UI**: React 19, shadcn/ui (Radix UI), Tailwind CSS v4
- **Animation**: Motion (formerly Framer Motion)
- **Database**: PostgreSQL with Prisma ORM
- **Cache**: Redis
- **Auth**: NextAuth.js v5 (beta)
- **Language**: TypeScript with strict mode

### Project Structure
- `/app`: Next.js App Router pages and layouts
  - `(admin)`: Protected admin routes
  - `api`: API routes
  - Service-specific pages (air-conditioner, mattress-sofa, etc.)
- `/components`: Shared components
  - `/ui`: shadcn/ui components
- `/actions`: Server actions (mutations)
- `/query`: Query functions (data fetching)
- `/prisma/schema`: Multi-file Prisma schema
  - `auth.prisma`: Authentication models
  - `app.prisma`: Business logic models
- `/lib`: Utility functions
- `/types`: TypeScript type definitions

### Key Patterns

#### Server Components by Default
- Pages are server components unless explicitly marked with "use client"
- Client functionality should be extracted to separate client components
- Wrap server components in Suspense with loading skeletons

#### Data Fetching
- Use server components for data fetching
- Place query functions in `/query` directory
- Server actions go in `/actions` directory
- Never use server actions for data fetching (mutations only)

#### State Management
- Minimize useEffect and useState usage
- Use useActionState (React 19) or useTransition for loading states
- Prefer server-side state when possible

#### Styling Rules
- Always use REMs over px (except for UI elements better suited for px)
- Define reusable CSS variables with @theme directive in Tailwind
- Mobile-first responsive design
- Follow Gleam Care Style Guide (available in Notion)

#### Animation with Motion
- Import from "motion/react" (never "framer-motion")
- For server components: `import * as motion from "motion/react-client"`
- Use Context7 to reference latest motion.dev docs

#### Localization
- All user-facing text must be in Korean
- Code comments should be in English

### Database Schema

#### Authentication (auth.prisma)
- User model with Role enum (USER, ADMIN)
- NextAuth.js compatible models (Account, Session, VerificationToken)

#### Application (app.prisma)
- Inquiry: Customer inquiries with type (QUOTE, OTHER, EDUCATION)
- Office: Physical office locations
- BlogPost: Blog content management
- Image: Polymorphic image storage

### Security
- Credentials stored in environment variables
- Role-based access control for admin routes
- Password hashing with bcryptjs

## Development Workflow

1. **Adding Components**: Check if shadcn/ui component exists first:
   ```bash
   npx shadcn@latest add <component>
   ```

2. **File Naming**: Use lowercase with dashes for directories

3. **Testing**: 
   - Unit tests with Jest for business logic
   - Playwright for UI testing (use MCP tool)

4. **Type Safety**: 
   - Use interfaces over types
   - Avoid enums, use maps instead
   - Use Zod for validation

5. **Performance**:
   - Import local images directly (not URL paths)
   - Use dynamic imports for code splitting
   - Implement proper loading states

## Environment Setup

Required environment variables:
```env
AUTH_SECRET=            # NextAuth secret
DATABASE_URL=           # PostgreSQL connection string
NAVER_CLIENT_ID=        # Optional: Naver OAuth
NAVER_CLIENT_SECRET=    # Optional: Naver OAuth
```

Default Docker services credentials:
- PostgreSQL: postgres / redisPrismaNaver2025@
- Redis: redisPrismaNaver2025@