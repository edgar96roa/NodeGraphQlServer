# TS GraphQL Backend

This project is a backend application built with TypeScript and GraphQL using Onion Architecture.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the repository:**

   ```bash
   git clone <REPOSITORY_URL>
   cd ts-graphql_backend

2. **Install dependencies:**

   ```bash
   npm install

3. **Compile TypeScript code:**

   ```bash
   npm run build

4. **Start the server in production mode:**

   ```bash
   npm start

5. **Start the server in development mode (with automatic restart):**

   ```bash
   npm run start:dev

6. **Start the server using ts-node:**

   ```bash
   npm run start:ts

## Project Structure
### The project is organized as follows:

/ts-graphql_backend
  /node_modules
  /src
    /application
      /services
        AddressBookService.ts
    /domain
      /entities
        AddressBook.ts
      /repositories
        IAddressBookRepository.ts
    /infrastructure
      /repositories
        FileAddressBookRepository.ts
    /presentation
      /resolvers
        AddressBookResolver.ts
    /utils
      LoggerFactory.ts
    index.ts
  package.json
  tsconfig.json
  .gitignore
  README.md

## Structure Explanation
- application/services: Contains business logic and application services.
- domain/entities: Contains domain entities.
- domain/repositories: Contains repository interfaces.
- infrastructure/repositories: Contains repository implementations.
- presentation/resolvers: Contains GraphQL resolvers.
- utils: Contains utilities like the logger.
- index.ts: Application entry point.

## Usage
Once the server is running, you can interact with the GraphQL API at http://localhost:4000/graphql using tools like Postman or GraphQL Playground.