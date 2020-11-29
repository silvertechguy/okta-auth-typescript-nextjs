import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    // The provider class makes sharing the session between pages easier.
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
