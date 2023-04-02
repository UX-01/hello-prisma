# hello-prisma

Getting started with Prisma from scratch using TypeScript and a local SQLite database file. It covered data modeling, migrations, and querying a database.

```
npm init -y
npm install typescript ts-node @types/node --save-dev
```

Initialize the TS project

```
npm init -y 
npm install typescript ts-node @types/node --save-dev
npx tsc --init
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
```
Our schema lives in `scheam.prisma` and they serve two purposes:

- Represent the tables in the underlying database
- Serve as a foundation for the generated  Prisma Client API


```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}


model User {
  id Int @id @default(autoincrement())
  email String @unique
  name String?
  posts Post[]
}

model Post {
  id Int @id @default(autoincrement())
  title String
  content String?
  published Boolean @default(false)
  author User  @relation(fields: [authorId], references: [id])
  authorId Int
}
```

Let's map the models to the database tables by migrating

```
npx prisma migrate dev --name init
```

To execute the `script.ts` file:

```
npx ts-node scripts.ts
```

Lastly, use the built-in GUI by running:

```
npx prisma studio
```

