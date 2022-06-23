var name = window.document.getElementById('nome')
var email = document.querySelector('#email')
var nomeOk = false
var emailOk = false

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length<2){
        txtNome.innerHTML = 'Informe um nome válido 🥱'
        txtNome.style.color='red'
        nomeOk = false
    }else{
        txtNome.innerHTML = '❤'
        txtNome.style.color='red' 
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
        txtEmail.innerHTML = '❤'
        txtEmail.style.color='red' 
        emailOk = true
    }else{
        txtEmail.innerHTML = 'Informe um email válido 🥱'
        txtEmail.style.color='red' 
        emailOk = false
    }
}
    function enviar(){
        if(nomeOk == true){
            alert('Mensagem enviada com sucesso!')
        }else{
            alert('Preencha os campos corretamente 😪')
        }
    }
    function validaAssunto() {
        let txtAssunto = document.querySelector('#txtAssunto')
        if (assunto.value.length < 15 || assunto.value.length > 1000) {
            txtAssunto.innerHTML = 'Escreva mais para vovó, no minimo 15 caracteres!'
            txtAssunto.style.color = 'red'
            assuntoOk = false
        } else {
            txtAssunto.innerHTML = "❤"
            txtAssunto.style.color = 'red'
            assuntoOk = true
        }
    }
    function enviar() {
        if (nomeOk == true && emailOk == true && assuntoOk == true) {
            alert('Mensagem enviada com sucesso')
        } else {
            alert('Você precisa preencher os campos corretamente.')
        }
    }
