import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <CartWidget />
      <ItemListContainer greeting={"Bienvenidos A Mi Carniceria"} />
    </div>
  );
}

export default App;
