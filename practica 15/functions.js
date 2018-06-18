addEventListener('load',inicializarEventos,false);
function inicializarEventos(){
  cargarPagina("procesar.php");
}
function presionEnlace(e){
  e.preventDefault();
  var href = e.target.getAttribute('href');
  cargarPagina(href);
}
var conexion;
function cargarPagina(url){
  conexion = new XMLHttpRequest();
  conexion.onreadystatechange = respuestaAjax;
  conexion.open("GET",url,true);
  conexion.send(null);
}
function respuestaAjax(){
  var respuesta = document.getElementById("comentarios");
  if (conexion.readyState ==4) {
    if (conexion.status == 200) {
      respuesta.innerHTML = conexion.responseText;
      var siguiente = document.getElementById("siguiente");
      if(siguiente != null) addEventListener('click',presionEnlace,false);
      var anterior = document.getElementById("anterior");
      if(anterior != null) addEventListener('click',presionEnlace,false);
    }
  }else{
    respuesta.innerHTML = '<img src="giphy.gif" width="100px">';
  }
}
