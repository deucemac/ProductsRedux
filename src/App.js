import React from 'react'
import { Provider } from 'react-redux'
import AddProducts from './components/AddProducts'
import Products from './components/Products'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <AddProducts />
      <Products />
    </Provider>
  );
}

export default App;
