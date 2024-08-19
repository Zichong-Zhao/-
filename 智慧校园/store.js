function getdata() {
    if(!localStorage.getItem('geojson')){
        localStorage.setItem('geojson','[]')
    }
    return JSON.parse(localStorage.getItem('geojson'))
}

function savedata(data) {
    localStorage.setItem('geojson',JSON.stringify(data))
}