import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';

function App() {

  const name = 'Victor' 
  const newName = name.toUpperCase()

  function sum(a,b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'


  return (
    <div className="App">
      <h1>Olá React!</h1>
      <h2>Meu primeiro app com react</h2>
      <p>Olha só, estou criando meu primeiro app com react</p>
     
      <p>Soma: {sum(1, 2)}</p> 
      <img src={url} alt='Minha imagem'/>
      <p>Olha só, estou criando meu primeiro app com react, sou o {newName}</p>
      <HelloWorld/>
      <Frase/>
    </div>
  );
}

export default App;
