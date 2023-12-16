<img src="src/assets/img/icon-128.png" width="64"/>

# Twitch Live Extension 

A twitch extension to keep track of live channels and recieve notifcations when your followed channels go live.


### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is >= **18**.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your extension on `src/manifest.json`.
5. Run `npm install` to install the dependencies.
6. Run `npm start`
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
8. Happy hacking.

## Webpack auto-reload and HRM
Extension uses [webpack server](https://webpack.github.io/docs/webpack-dev-server.html) to development (started with `npm start`) with auto reload feature that reloads the browser automatically every time that you save some file in your editor.


## Resources:

- [Chrome Extension Boilerplate](https://github.com/lxieyang/chrome-extension-boilerplate-react)


