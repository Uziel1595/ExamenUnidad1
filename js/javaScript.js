var publicaciones = [];

function guardar(){
	var usu = document.getElementById('usuario').value;
	var des = document.getElementById('desc').value;
	var img = document.getElementById('img').value;
	var publicacion = new Publicacion(usu,des,img);
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < 3; i++)
		inputs[i].value = "";
	publicaciones.push(publicacion);
	publicaciones.length;

	mostrar(publicacion,(publicaciones.length-1));
}

function mostrar(Publicacion,num){
	var total = document.getElementById('publicaciones');
	var nuevoDiv = document.createElement('div');
	var nuevoImg = document.createElement('img');
	nuevoImg.src=Publicacion.imagen;
	nuevoImg.alt="error";
	nuevoDiv.appendChild(nuevoImg);
	var nuevoUsu = document.createElement('h3');
	var nuevoTexto = document.createTextNode("Usuario: "+Publicacion.usuario);
	nuevoUsu.appendChild(nuevoTexto);
	var nuevoDes = document.createElement('h3');
	nuevoTexto = document.createTextNode("Descripcion: "+Publicacion.descripcion);
	nuevoDes.appendChild(nuevoTexto);
	nuevoDiv.appendChild(nuevoUsu);
	nuevoDiv.appendChild(nuevoDes);
	
	nuevoDes = document.createElement('h3');
	var fecha = new Date();
	nuevoTexto = document.createTextNode("Fecha: "+fecha.getDate()+"/"+fecha.getMonth()+"/"+
						fecha.getFullYear()+" "+fecha.getHours()+":"+fecha.getMinutes());
	nuevoDes.appendChild(nuevoTexto);
	nuevoDiv.appendChild(nuevoDes);

	var nuevoBtn = document.createElement('button');
	nuevoBtn.id = 'btn'+num;
	nuevoBtn.innerHTML = 'Comentarios: '+Publicacion.comentarios.length;
	nuevoBtn.addEventListener ("click", function() {
  		mostrarComentarios(num);
	});
	nuevoDiv.appendChild(nuevoBtn);

	var nuevoComen = document.createElement('div');
	nuevoComen.id = 'comPub'+num;
	nuevoComen.style.display = 'none';
	var input = document.createElement('input');
	input.id = 'input'+num;
	nuevoBtn = document.createElement('button');
	nuevoBtn.innerHTML = 'Comentar';
	nuevoBtn.addEventListener ("click", function() {
  		guardarComentarios(num);
	});
	nuevoComen.appendChild(input);
	nuevoComen.appendChild(nuevoBtn);

	nuevoDiv.appendChild(nuevoComen);

	total.appendChild(nuevoDiv);
}

function mostrarComentarios(num){
	var t = document.getElementById('comPub'+num).style.display;

	if(t == 'none')
		document.getElementById('comPub'+num).style.display = 'inline';
	else
		document.getElementById('comPub'+num).style.display = 'none';
}
function guardarComentarios(num){
	var total = document.getElementById('comPub'+num);
	var txt = document.getElementById('input'+num).value;
	var nuevoP = document.createElement('p');
	var fecha = new Date();
	var comentario = "Comentario: "+txt+" Fecha: "+ fecha.getDate()+"/"+fecha.getMonth()+"/"+
						fecha.getFullYear()+" "+fecha.getHours()+":"+fecha.getMinutes();
	nuevoP.innerHTML = comentario;
	publicaciones[num].comentarios.push(comentario);
	total.appendChild(nuevoP);
	document.getElementById('btn'+num).innerHTML = "Comentarios: "+publicaciones[num].comentarios.length;

}

function Publicacion(usuario, descripcion, imagen){
	this.usuario = usuario;
	this.descripcion = descripcion;
	this.imagen = imagen;
	this.comentarios = [];
}