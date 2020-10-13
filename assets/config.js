'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {


	
	nombre: "Ivan ricardo taborda sanchez",
	profesion: "Desarrolador junior",
	correo: "ivantaborda.30@hotmail.com",
	telefono: "+57 3227717523",
	perfil: "instalacion de redes.",
	habilidades: {
		comunicativas:['Asertivo, ' ,'Actitud Positiva, ','Tolerancia, ','Respeto, ','Diálogo Abierto, ','Orden, ','Apoyo'],
		gestion: ['Liderazgo, ', 'Responsabilidad, ','Análisis para toma de Decisiones'],
		tecnicas: ['Office']
	},
	hobbies: ['Escuchar Música, ', 'Ver Peliculas, ', 'Tocar Guitarra, ', 'Video-Juegos']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:

const banner = "https://3.bp.blogspot.com/-TkVKyVxdxgQ/U2kGFcBl3LI/AAAAAAAABVo/zrDM3ittaz0/s1600/Banner+Soy+Cultura+SENA+-+CTMA.png";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}