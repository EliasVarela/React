import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import{BrowserRouter,Routes,Route} from  "react-router-dom"
function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <CartWidget />
        <Routes>
        
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos A Mi Carniceria"} />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
