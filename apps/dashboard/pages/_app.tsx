import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import store from '../store';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
);

export default App;
