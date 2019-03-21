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
	nuevoDiv.classList.add("public");
	//AGREGAMOS LA IMAGEN CON EL URL
	var nuevoImg = document.createElement('img');
	nuevoImg.src=Publicacion.imagen;
	nuevoImg.alt="error";
	nuevoDiv.appendChild(nuevoImg);

	//Agregamos USUARIO, DESCRIP Y FECHA
	nuevoElement(nuevoDiv,'h3',"Usuario: "+Publicacion.usuario);
	nuevoElement(nuevoDiv,'h3',"Descripcion: "+Publicacion.descripcion);
	var fecha = new Date();
	nuevoElement(nuevoDiv,'h3',"Fecha: "+fecha.getDate()+"/"+fecha.getMonth()+"/"+
						fecha.getFullYear()+" "+fecha.getHours()+":"+fecha.getMinutes());

	//BOTON PARA LOS COMENTARIOS
	var nuevoBtn = document.createElement('button');
	nuevoBtn.id = 'btn'+num;
	nuevoBtn.innerHTML = 'Comentarios: '+Publicacion.comentarios.length;
	nuevoBtn.addEventListener ("click", function() {
  		mostrarComentarios(num);
	});
	nuevoDiv.appendChild(nuevoBtn);
	//SECTION DE COMENTARIOS
	var nuevoComen = document.createElement('div');
	nuevoComen.id = 'comPub'+num;
	nuevoComen.classList.add("coment");
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
	//nuevoDiv.appendChild(document.createElement('hr'));
	total.appendChild(nuevoDiv);//agregamos todo al div principal
}

function nuevoElement(padre,etiqueta,texto){
	var nuevoUsu = document.createElement(etiqueta);
	var nuevoTexto = document.createTextNode(texto);
	nuevoUsu.appendChild(nuevoTexto);
	padre.appendChild(nuevoUsu);
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