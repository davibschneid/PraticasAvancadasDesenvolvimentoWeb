import logo from '../logo.svg';
import '../App.css';

//Importa o componente Header
import Header from '../Header';

//Importa o componente Header
import Footer from '../Footer';

//Importa o recurso para criar link do react
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div className="App">
      {/* Importamos o componente Header criado como HTML */}
      <Header title="Parametro de titulo" />

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>Praticas avançadas em Desenvolvimento Web.</p>

        <Link to="/cadastro">Acessar cadastro</Link>
        <Link to="/lista">Listagem de cadastro</Link>

      </header>

       {/* Importamos o componente Footer  criado como HTML */}
      <Footer/>

    </div>
  );
}

export default Home;
