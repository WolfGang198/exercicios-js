function carregar(){
    var msg = window.document.getElementById('msg')
    var img = Window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
} 