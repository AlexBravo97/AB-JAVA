const nombredeusuario = document.getElementById('nombredeusuario')
const contraseña = document.getElementById('contraseña')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        nombredeusuario: nombredeusuario.Value,
        contraseña: contraseña.Value
    }

    console.log(data)
}


)