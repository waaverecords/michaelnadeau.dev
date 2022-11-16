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
```js
npx create-next-app@latest --typescript
```

Next, navigate to your newly created project's folder and install the following packages by typing:
```js
npm install gray-matter react-code-blocks react-markdown remark-gfm
```