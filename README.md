# circles

Playing with circles (vite + react + ts)

## Scripts

```sh
npm run dev    # start dev server
npm run build  # build for production
npm run serve  # locally preview production build

npm run fix       # run all of the below:
npm run prettier  # run prettier --write
npm run eslint    # run eslint --fix
npm run tsc       # run tsc --no-emit
```

## Project init

- Use latest stable node (`nvm install 16`)
- Init with [`create-vite`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) (`npm init vite@latest . -- --template react-ts`)
- Tighten `package.json`:
  - Add engines
  - Use exact versions
  - Run `npx npm-check-updates -u)`
- Improve DX:
  - Increase `tsconfig.json` strictness
  - Add prettier
  - Add eslint
  - Add [`vite-plugin-checker`]](https://github.com/fi3ework/vite-plugin-checker) for tsc & eslint in dev & build
