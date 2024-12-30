
/* import {rutasSiturCircuitoMetropolitano} from '../Assets/Markers/rutasCircuitoMetropolitano';
 */
const map = L.map('map').setView([20.967922980795, -89.63024798011305],12); 



/* ---------------Rutas de camion--------------------- */


rutasSiturCircuitoMetropolitano.map((point) => {
    marker([point.lat,point.lng]).addTo(map);
});


/* 
const buscadorParaderosSCM = document.querySelector('#buscadorParaderosSCM').value;
const botonBuscar = document.querySelector('#botonBuscar');

const buscadorParaderosSCMgE = document.getElementById("buscadorParaderosSCM" ).value;
const botonBuscargE = document.getElementById("botonBuscar");

 */

/* ------------------Lista de paraderos-----------------------*/

/* const paraderos =[
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},
    {nombre: '', cordenadas: ''},



] */

/* ------------------Filtro de busqueda-----------------------*/

 const filtrar = ()=>{
    console.log(buscadorParaderosSCM.value)
    const texto = buscadorParaderosSCM.value.toLowerCase() 


}

function busParadero() {
    console.log(buscadorParaderosSCM.value)
  
}
 

function buscarParadero(){
    var regex = new RegExp(palabra,'gi');
	// console.log(regex);
	var resultado = elementoInput.match(regex);
    document.getElementById("impresion").innerHTML = resultado;
    
} 


