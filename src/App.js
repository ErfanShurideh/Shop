import './App.css';
import ProductDetails from './components/ProductDetails';
import Store from './components/Store';
import ProductContextProvider from './Context/ProductContextProvider';
import CartContextProvider from './Context/CartContextProvider';
import { Navigate , Route , Routes  } from 'react-router-dom';
function App() {
  return (
   <ProductContextProvider>
    <CartContextProvider>
      <Routes>
          <Route path='/products/:id' Component={ProductDetails} />
          <Route path='/products' Component={Store}/>
          <Route
                          path="*"
                          element={<Navigate to="/products" />}
                      />
        </Routes>
      </CartContextProvider>
   </ProductContextProvider>
  );
}

export default App;
