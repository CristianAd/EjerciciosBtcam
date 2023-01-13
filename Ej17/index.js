let maker, map
function initMap() {
    console.log("inicializando")
    const posicion ={
        lat: -25.363,
        log:   131.044 
    }

    const map = new google.maps.Map(document.getElementById("map", {
        zoom: 4, 
        center: posicion
    }))
    const maker = new google.maps.Maker({
        position: posicion,
        map, 
        tile: "Posición incial"
    })

    geoposiciona()
}

function geoposiciona() {
    if (navigator.geolocation) {
        const geoloc = navigator.geolocation
        const options = {timeout: 606060}
      const watchPosi =   geoloc.watchPosition(centrarMapa, onError,
        options) 
    } else {
        alert("tu navegador no adminte geolocalización")
    }
}

function centrarMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude, 
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    maker.setposition(nuevaPos), 
    map.setcenter(nuevaPos)
}

function onError(error) {
    console.log("se ha produdido un error y lo hemos gestionado")
    console.error(error)
}