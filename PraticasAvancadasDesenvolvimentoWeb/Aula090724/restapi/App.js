function App() {
    return (
        <div>
        <h1>Lista de usuários</h1>
        <form id="usuariosForm">
        <label htmlFor="nome"> Nome:</label>
        <input type="text" id="nome" name="nome" require /> <br/>

        <label htmlFor="idade"> Idade:</label>
        <input type="text" id="idade" name="idade" require /> <br/>

        <label htmlFor="cidade"> Cidade:</label>
        <input type="text" id="cidade" name="cidade" require /> <br/>
        </form>

        <ul id="usuariosLista"></ul>
        <script src="script.js"></script> 
        </div>
    )
}