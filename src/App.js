import './App.css';
import Store from './components/Store';
import ProductContextProvider from './Context/ProductContextProvider';
function App() {
  return (
   <ProductContextProvider>
    <Store />
   </ProductContextProvider>
  );
}

export default App;
