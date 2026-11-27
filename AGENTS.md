# Project rules

- Keep roster regression tests in `tests/`, outside `src/routes/`, so test files cannot become application routes.
- Enumerate public static routes and every local service/article URL in Vite's native TanStack prerender configuration, with discovery and crawling disabled and a bounded page count, so CyberPanel can serve `dist/client` without an SSR process or accidentally capturing private/preview routes.