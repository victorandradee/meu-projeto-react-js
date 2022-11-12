import './App.css';
import SeyMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = 'Maria' 

  return (
    <div className="App">
      <Frase/>
      <SeyMyName nome = 'Victor' />
      <SeyMyName nome = 'Andrade' />
      <SeyMyName nome = {nome} />
      <Pessoa 
        nome='Vitória' 
        idade='19' 
        profissão='Biologa' 
        foto = 'https://via.placeholder.com/150'/>
    </div>
  )
}

export default App;
