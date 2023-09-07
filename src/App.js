import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContent from './components/ItemListConteiner/ItemListConteiner';
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContent greeting={"Bienvenidos a Juegos GameOver"} />
    </div>
  );
}

export default App;
