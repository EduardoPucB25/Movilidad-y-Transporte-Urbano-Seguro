
const map = L.map('map').setView([20.967922980795, -89.63024798011305],12); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
    
    combo = document.getElementById("select-location");
    texto = combo.options[combo.selectedIndex].text;
    rutasMapa = texto;
    L.marker(coords).addTo(map)
    .bindPopup(texto)
    .openPopup();

})




