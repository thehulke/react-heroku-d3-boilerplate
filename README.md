# Deployable React Heroku boilerplate using Node.js

## Read before using this boilerplate
--------
## Main Tech.
- React
- Node.js
- Webpack

## Installing

```
git clone https://github.com/thehulke/react-heroku-d3-boilerplate.git
npm install
git remote rm origin
// Copy paste your heroku remote here
```
## Conditions

Please note!

there are 2 different `webpack.config` files,
this due to the fact that there are 2 working `process.env.NODE_ENV`: `'production'` and `'development'` (or `!production`).

### Regarding `npm start`
- if you have ran `npm run build` **or** you have the file `bundle.js` at your `/public` folder, the `bundle.js` will be pulled from that folder. **that is the best practice for me to view the production file before deploying it to heroku**.
- Once we have a `bundle.js` file built **or** we are working in `NODE_ENV='production'`, 'hot reload' will not work. This is because `react-hmre` **cannot run in production mode**

## Enter/exit production mode
go to `webpack.prod.config.js`, and simply uncomment the `process.env.NODE_ENV = 'production';` line.

```
////////////////////////////////////////
//APPLY LINE BELOW BEFORE PRODUCTION
// process.env.NODE_ENV = 'production'; <-------- uncomment this ||
////////////////////////////////////////
```

## Deploying to heroku
1. **Make sure you are in production mode**
2. `npm run build`.
3. `npm start` - to check we are good.
4. `git push heroku master`.
5. uncomment `process.env.NODE_ENV = 'production';` to exit production and keep working
6. remove `bundle.js` from `/public` folder.
