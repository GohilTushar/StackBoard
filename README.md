<div align="center">
  <br />
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/stackboard-logo.svg">
    <img src="public/brand/stackboard-logo-dark.svg" alt="Stackboard" height="64">
  </picture>
  <br /><br />

  <div>

<img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/-Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/-shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" /><br/>

<img src="https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
<img src="https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/-Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" /><br/>

<img src="https://img.shields.io/badge/Trigger.dev-22c55e?style=for-the-badge&logo=triggerdotdev&logoColor=white" />
<img src="https://img.shields.io/badge/-Liveblocks-050505?style=for-the-badge&logo=liveblocks&logoColor=white" />

  </div>

  <h3 align="center">Design system architecture together, in real time, with an AI architect on the board</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 📜 [Available Scripts](#scripts)
6. 🚀 [Deployment](#deployment)
7. 🗂️ [Project Structure](#structure)

## <a name="introduction">✨ Introduction</a>

Stackboard is a real-time collaborative workspace for designing software systems. Several developers can work on the same canvas at once, talk it through in a shared room chat, and ask the AI architect for suggestions or a full design.

Describe a system in plain English (for example, "Design a scalable e-commerce backend") and a Google Gemini-powered agent places nodes and edges onto the shared React Flow canvas while everyone in the room watches. The team then refines the diagram together. When the design is ready, a second AI background task turns the graph and the AI conversation into a detailed Markdown technical specification you can preview and download.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[Next.js](https://nextjs.org/)** is a production-ready React framework that offers server-side rendering, static site generation, and powerful routing features. It streamlines the development of full-stack web applications by providing a comprehensive ecosystem for performance optimization, data fetching, and API development.

- **[React](https://react.dev/)** is a popular JavaScript library for building declarative and component-based user interfaces. It excels at creating reusable UI components and efficient state management, making it the standard choice for building dynamic and interactive single-page applications.

- **[TypeScript](https://www.typescriptlang.org/)** is a strongly typed superset of JavaScript that adds static type definitions to your code. It significantly improves developer productivity and code reliability by catching errors during development, enhancing IDE support, and facilitating maintainability in large-scale projects.

- **[Liveblocks](https://liveblocks.io/)** is a real-time collaboration infrastructure that enables developers to build multiplayer experiences. It provides robust APIs for presence, shared state, and feeds, which power the live canvas, cursors, room chat, and AI status updates in this app.

- **[Clerk](https://clerk.com/)** is a specialized authentication and user management platform for React and Next.js. It offers drop-in pre-built components for sign-in, sign-up, and profile management, while handling complex requirements like session management and multi-factor authentication out of the box.

- **[Trigger.dev](https://trigger.dev/)** is an open-source platform for orchestrating long-running background jobs and workflows. It runs the AI design agent and the spec generator as durable tasks, handling retries and real-time run status without extra infrastructure.

- **[Google Gemini](https://ai.google.dev/)** (via the [Vercel AI SDK](https://ai-sdk.dev/)) powers the AI architect that generates canvas diagrams and the technical specifications.

- **[Prisma ORM](https://www.prisma.io/)** is a next-generation ORM for Node.js and TypeScript that simplifies database interactions. By providing a type-safe client generated from your schema, it makes querying your database intuitive, readable, and efficient.

- **[PostgreSQL](https://www.postgresql.org/)** is an advanced, open-source object-relational database system widely recognized for its reliability, extensibility, and standard compliance. It stores projects, collaborators, and spec metadata.

- **[Vercel Blob](https://vercel.com/docs/storage/vercel-blob)** stores canvas snapshots and generated Markdown specs.

- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that enables rapid custom UI development. By utilizing low-level utility classes directly in your markup, it allows for highly consistent and responsive design systems.

- **[shadcn/ui](https://ui.shadcn.com/)** is a collection of beautifully designed, accessible, and re-usable UI components that you copy directly into your project, giving you full control over the component code.
## <a name="features">🔋 Features</a>

👉 **AI Architect**: Describe a system in plain English; Gemini draws nodes and edges onto the live canvas in real time via a Trigger.dev background task and the Liveblocks Node.js SDK. A live status strip shows what the AI is doing.

👉 **Multiplayer Canvas**: Real-time collaboration powered by Liveblocks: synchronized node and edge state, live cursors, and presence avatars for every connected user.

👉 **Room Chat**: A dedicated chat for everyone in the room, kept separate from the AI Architect conversation, so team discussion and AI prompts never mix.

👉 **Custom Canvas Nodes**: Double-click to edit labels inline, resize selected nodes, and pick shapes and colours from a floating toolbar, all synced across clients instantly.

👉 **Starter Templates**: Import prebuilt designs (microservices, CI/CD pipeline, event-driven system, and more) into the canvas at any time.

👉 **AI Spec Generation**: One click converts the current graph and AI conversation into a detailed Markdown technical specification using a second Gemini-powered Trigger.dev task.

👉 **Spec Library**: Each project keeps multiple specs. Metadata lives in PostgreSQL; content is stored in Vercel Blob. Preview specs in the app or download them as `.md` files.

👉 **Auto-Save Canvas**: The canvas is saved automatically to Vercel Blob after a short period of inactivity.

👉 **Projects & Sharing**: Create, rename, and delete projects; invite collaborators; copy a share link in one click.

👉 **Authentication**: Global route protection with Clerk; Liveblocks access tokens are only issued to authenticated users with access to the project.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v20 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

You will also need accounts for [Clerk](https://clerk.com/), [Liveblocks](https://liveblocks.io/), [Trigger.dev](https://trigger.dev/), [Google AI Studio](https://aistudio.google.com/), [Vercel](https://vercel.com/) (for Blob storage), and a PostgreSQL database.

**Cloning the Repository**

```bash
git clone <your-repository-url> stackboard
cd stackboard
```

**Installation**

Install the project dependencies using npm. This also generates the Prisma client.

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Liveblocks
LIVEBLOCKS_SECRET_KEY=

# Trigger.dev
TRIGGER_SECRET_KEY=
TRIGGER_PROJECT_REF=

# Database
DATABASE_URL=

# Google Gemini
GOOGLE_GENERATIVE_AI_API_KEY=

# Vercel Blob
BLOB_READ_WRITE_TOKEN=

APP_URL=http://localhost:3000
```

Replace the placeholder values with your real credentials.

**Set Up the Database**

Apply the Prisma migrations to your database:

```bash
npx prisma migrate deploy
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

**Run Trigger.dev (Background Tasks)**

In a second terminal, start the Trigger.dev dev worker so the AI tasks run locally:

```bash
npm run dev:trigger
```

## <a name="scripts">📜 Available Scripts</a>

| Command                  | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `npm run dev`            | Start the Next.js development server                 |
| `npm run build`          | Build for production                                 |
| `npm run start`          | Start the production server                          |
| `npm run lint`           | Run ESLint                                           |
| `npm run dev:trigger`    | Run the Trigger.dev dev worker locally               |
| `npm run deploy:trigger` | Deploy the Trigger.dev tasks to production           |
| `npx prisma generate`    | Regenerate the Prisma client (also runs on install)  |
| `npx prisma migrate dev` | Create and apply a new migration                     |
| `npx prisma studio`      | Open Prisma Studio                                   |

## <a name="deployment">🚀 Deployment</a>

The Next.js app and the background tasks are deployed separately.

**1. Deploy the app to Vercel**

Import the repository in Vercel and add the environment variables from `.env`. Use the **production** Trigger.dev secret key (`tr_prod_…`) for `TRIGGER_SECRET_KEY`, and set `APP_URL` to your production URL.

**2. Deploy the tasks to Trigger.dev**

```bash
npx trigger.dev@latest login   # once
npm run deploy:trigger
```

Redeploy whenever anything in `trigger/` (or code it imports) changes. To automate this, either:

- set Vercel's Build Command to `if [ "$VERCEL_ENV" = "production" ]; then npm run deploy:trigger; fi && npm run build` and add `TRIGGER_ACCESS_TOKEN` and `TRIGGER_PROJECT_REF` to Vercel, or
- use the included GitHub Action (`.github/workflows/deploy-trigger.yml`) with `TRIGGER_ACCESS_TOKEN` and `TRIGGER_PROJECT_REF` repository secrets.

Use only one of these, so tasks aren't deployed twice.

**3. Add task environment variables in Trigger.dev**

The tasks run on Trigger.dev's servers, so add these in the Trigger.dev dashboard under the Production environment: `GOOGLE_GENERATIVE_AI_API_KEY`, `LIVEBLOCKS_SECRET_KEY`, `DATABASE_URL`, and `BLOB_READ_WRITE_TOKEN`.

## <a name="structure">🗂️ Project Structure</a>

```
.
├── app/
│   ├── api/              # API routes (Liveblocks auth, AI, projects, canvas, specs)
│   ├── editor/           # Canvas editor pages
│   ├── generated/prisma/ # Auto-generated Prisma client
│   ├── sign-in/          # Clerk sign-in page
│   └── sign-up/          # Clerk sign-up page
├── components/
│   ├── editor/           # Editor UI (canvas, AI sidebar, room chat, dialogs)
│   └── ui/               # Reusable shadcn/ui primitives
├── context/              # Product, architecture, UI, and code-standards docs
├── hooks/                # Custom React hooks (auto-save, shortcuts, projects)
├── lib/                  # Shared utilities (Prisma client, Liveblocks, access control)
├── prisma/               # Prisma schema and migrations
├── public/brand/         # Stackboard logo and icon
├── trigger/              # Trigger.dev background tasks
│   ├── design-agent.ts   # AI canvas generation task
│   └── generate-spec.ts  # AI spec generation task
└── types/                # Shared TypeScript types
```
