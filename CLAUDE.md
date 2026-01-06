# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Expo Clean Architecture Template - A React Native mobile app built with Expo, using Redux Toolkit, NativeWind (Tailwind CSS), i18next for internationalization, and Amplitude for analytics.

## Commands

```bash
yarn start           # Start Expo dev server
yarn ios             # Run on iOS simulator
yarn android         # Run on Android emulator
yarn test            # Jest tests with watch mode
yarn jest            # Run tests once (used by pre-push hook)
yarn lint            # ESLint
yarn typeCheck       # TypeScript type checking
yarn pretty          # Prettier on staged files
```

## Architecture

This project follows **Clean Architecture** with dependency injection:

### Module Structure (`/src/modules/`)

Each feature module follows this pattern:

- `core/` - Interfaces and abstractions (gateways, providers)
- `*-impl/` - Concrete implementations
- `react/` - React components and hooks

### Key Modules

- **app/** - App bootstrapping (`main.ts` creates dependency container, initializes i18n)
- **store/** - Redux store setup with dependency injection via thunk `extraArgument`
- **global/** - Cross-cutting concerns (analytics gateway, storage provider, device locale provider)
- **shared/** - Utility functions and shared hooks
- **locales/** - i18n translation files (en.json, fr.json)

### Dependency Injection Pattern

Dependencies are injected through Redux Toolkit's thunk middleware:

- Interfaces defined in `modules/[feature]/core/`
- Implementations in `modules/[feature]/*-impl/`
- Container created in `App` class (`src/modules/app/main.ts`)
- Accessed via `DependenciesProvider` context or thunk's `extraArgument`

### Testing

- Stub implementations in `core/testing/` for each interface
- `createTestStore()` and `createTestState()` helpers in `src/modules/testing/`
- Use in-memory implementations (e.g., `InMemoryStorageProvider`) for tests

## File Conventions

- `*.test.ts(x)` - Jest tests
- `*.utils.ts` - Utility functions
- `*.hook.ts` - Custom React hooks

## Path Aliases

- `@/*` - Maps to project root
- `@root/*` - Maps to `/src/`
