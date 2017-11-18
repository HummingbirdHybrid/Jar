import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import staticAssets from './static-assets';
import { SheetsRegistry } from 'react-jss/lib/jss';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import { green, red } from 'material-ui/colors';
import { create } from 'jss';
import preset from 'jss-preset-default';
import JssProvider from 'react-jss/lib/JssProvider';

    // Create a sheetsRegistry instance.
const sheetsRegistry = new SheetsRegistry();

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: green,
        accent: red,
        type: 'light',
    },
});

const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

const createApp = (store, props) => renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss}>
        <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            <Provider store={store}>
                <RouterContext {...props} />
            </Provider>
        </MuiThemeProvider>
    </JssProvider>
);

const buildPage = ({ componentHTML, initialState, headAssets }) => {
  return `
<!doctype html>
<html>
  <head>
    ${headAssets.title.toString()}
    ${headAssets.meta.toString()}
    ${headAssets.link.toString()}
    ${staticAssets.createStylesheets()}
    ${staticAssets.createTrackingScript()}
  </head>
  <body>
    <div id="app">${componentHTML}</div>
    <script>window.__INITIAL_STATE__ = ${serialize(initialState)}</script>
    ${staticAssets.createAppScript()}
  </body>
</html>`;
};

export default (store, props) => {
  const initialState = store.getState();
  const componentHTML = createApp(store, props);
  const headAssets = Helmet.renderStatic();
  return buildPage({ componentHTML, initialState, headAssets });
};

