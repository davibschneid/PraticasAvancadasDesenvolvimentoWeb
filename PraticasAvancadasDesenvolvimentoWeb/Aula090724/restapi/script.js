const usuariosForm =  document.getElementById('usuariosForm');
const usuarioLista =  document.getElementById('usuariosLista');



const fetchUsuarios = async () => {
    const response = await fetch('http://localhost:3000/usuarios');
    const usuarios = await response.json();
    return usuarios;
}


const renderUsuarios = async() => {
    usuarioLista.innerHTML = "";
    const usuarios = await fetchUsuarios();

        usuarios.forEach((usuarioLista) => {
            const li = document.createElement('li');
            li.textContent = `${usuario.nome} by ${usuario.nome}`;
            usuarioLista.appendChild(li);
        }
    ) ;      
};