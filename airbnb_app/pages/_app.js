import store from '../app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss';
import { useEffect } from 'react';



function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
  return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
  );
}

export default MyApp;
