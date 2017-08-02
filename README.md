# Laser Lines
>A fun little typescript / html5 canvas project

[**Live Demo**](http://travistx.me/laser-lines/)

## Built upon

- [Webpack 3](https://webpack.js.org/)
- [Typescript 2](https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/)

# Getting started

## Clone

```bash
git clone https://github.com/TravisTX/laser-lines
cd laser-lines
# Install the dependencies
npm install
```

## Run

Start a Webpack dev server 
```bash
npm start
```
And go to this URL: `http://localhost:3000` - 🎉

Start a Webpack server with the production configuration 
```bash
npm run server:prod
```


## Build Only
Build a development release
```bash
npm run build
```


Build a production release
```bash
npm run build:prod
```
After build phase, 3 files are generated into the `dist` folder:
- `app.bundle.js` - contains the core of the application. From the entry point `src/index.ts`
- `vendor.bundle.js` - contains the vendor dependencies
- `index.html` - html page with references to the 2 files above
