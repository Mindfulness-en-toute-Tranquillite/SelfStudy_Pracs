import store from '@/redux/config/configStore'
import {Provider} from 'react-redux'
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <Component {...pageProps} />
    </Provider> )
}
