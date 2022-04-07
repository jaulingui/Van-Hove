
var fotosBanner = []

fotosBanner[0] = ['media/cab1.jpg'];
fotosBanner[1] = ['media/cab2.jpg'];
fotosBanner[2] = ['media/cab3.jpg'];
fotosBanner[3] = ['media/cab4.jpg'];
fotosBanner[4] = ['media/cab5.jpg'];

var fotos = document.getElementById('fotobanner')


fotos.src = fotosBanner[0]

var inicio = 0

function actualizarBanner() {
    inicio++
    if (inicio>4){
        inicio=0
    }
   
    fotos.src = fotosBanner[inicio]
}

setInterval(actualizarBanner, 4000)