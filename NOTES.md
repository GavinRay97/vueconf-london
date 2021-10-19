- [ ] Brief Intro to GraphQL
- [ ] Discuss application being built
  - Give overview to project structure (frontend/backend/hasura, etc)
  - Outline of technologies
- [ ] Data model walk through -- table creation
  - Show Schema Diagram
  - Show schema.sql
  - Walk through bulk-creation of tables through "Run SQL" tab
    - Show process of adding/modifying new table using the UI
  - Discuss ability to connect to an existing DB, no requirement for new models
  - Requirement to "Track" tables, foreign key relationships


- [ ] Discuss high-level tradeoffs between various frameworks, or lack of frameworks:
  - Urql:
    - No state management
    - Official support for all major frameworks
    - No batched queries
    - Has "offline" support
    - Medium userbase

  - Apollo:
    - State management ideally integrated through local resolvers
    - React-centric API
    - Has batched queries
    - Large userbase

  - Villus
    - No state management
    - Only supports Vue
    - Supports auto-refetch/reactive queries (integrated with Vue computed() etc)
    - Has batched queries
    - Small userbase

  - Plain fetch(), or libraries liike swrv (Stale-While-Revalidate wrapper)
   - Easy to understand
   - No "magic"
   - Offers fine-grained control over fetch and mutation logic
   - Can provide a high degree of caching and data-fetching parallelism for little effort
  
  