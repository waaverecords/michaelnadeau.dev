---
title: How to build a blog in React and Next.js
publishedOn: '2022-11-20'
---

While there are many out of the box solutions for blogging, I believe that coding our way to our very own build has many advantages:

1. Apply any changes to your blog that your heart desires
2. Make the most modern or silliest UI
3. Control the complexity of your posts management system
4. Use your blog as a portfolio piece
5. Use building your own blog as content for your blog 😅

Before we start, if you'd like an ez pz copy pasta solution, this very blog's code can be found on my [Github](https://github.com/waaverecords/michael.nadeau.dev). Now, if you didn't click the link, let's get started!

## Project initialization

First, a Next.js project must be initialized. Open your favorite terminal and type the following:
```
npx create-next-app@latest --typescript
```

Next, navigate to your newly created project's folder and install a few helpful packages by typing:
```
npm install gray-matter react-code-blocks react-markdown remark-gfm
```

Let's now remove most of the boilerplate code the create-next-app script wrote for us. Cleaning the project is the first thing I always do; I do not want to worry about carrying unused code within my commits later on. After the cleanup, your project's folder structure should look something like this:
```
node_modules/
pages/
    _app.tsx
    index.tsx
public/
.gitignore
next-env.d.ts
next.config.js
package-lock.json
package.json
tsconfig.json
```

_app.tsx should be almost empty:
```tsx
// pages/_app.tsx

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

and so does index.tsx:
```tsx
// pages/index.ts

export default function Home() {
const b = true;
  return null;
}
```

The purge being done, we will start building the core blocks of our application.