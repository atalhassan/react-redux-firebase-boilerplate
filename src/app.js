import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import AppRouter, {history} from './routers/AppRouter'
import {login, logout} from './actions/auth'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import moment from 'moment'
import LoadingPage from './components/LoadingPage'
import {firebase} from './firebase/firebase'

const store = configureStore()

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true
  }
}

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);



ReactDOM.render(<LoadingPage/>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    renderApp()
    if (history.location.pathname === '/') {
      history.push('/dashboard')
    }
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
