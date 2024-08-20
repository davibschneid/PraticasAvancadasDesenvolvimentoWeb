
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
      <Header title="Programa 3 Mil Talentos" />

      <header className="App-header">

        <p>Praticas avançadas em Desenvolvimento Web.</p>
        <nav style={{ position: 'absolute', top: '150px', left: 0, width: '100%', textAlign: 'center', padding: '10px', backgroundColor: 'black' }}>
          <Link to="/cadastro" className="nav-link">Acessar cadastro</Link>
          <Link to="/lista" className="nav-link">Listagem de cadastro</Link>
          <Link to="/upload" className="nav-link">Upload de arquivos</Link>
        </nav>
      </header>

       {/* Importamos o componente Footer  criado como HTML */}
      <Footer/>

    </div>
  );
}

export default Home;
