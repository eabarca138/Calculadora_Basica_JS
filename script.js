	//variables
	let Contenedor;
	let operacion;
	let resultado = document.getElementById('resultado');
	const reset = document.getElementById('reset');
	const suma = document.getElementById('suma');
	const resta = document.getElementById('resta');
	const multiplicacion = document.getElementById('multiplicacion');
	const division = document.getElementById('division');
	const igual = document.getElementById('igual');
	const uno = document.getElementById('uno');
	const dos = document.getElementById('dos');
	const tres = document.getElementById('tres');
	const cuatro = document.getElementById('cuatro');
	const cinco = document.getElementById('cinco');
	const seis = document.getElementById('seis');
	const siete = document.getElementById('siete');
	const ocho = document.getElementById('ocho');
	const nueve = document.getElementById('nueve');
	const cero = document.getElementById('cero');

	//eventos de click
	uno.addEventListener("click", function(){
  		resultado.textContent += uno.textContent;
	});
	dos.addEventListener("click", function(){
		resultado.textContent += dos.textContent;
	});
	tres.addEventListener("click", function(){
		resultado.textContent += tres.textContent;
	});
	cuatro.addEventListener("click", function(){
		resultado.textContent += cuatro.textContent;
	});
	cinco.addEventListener("click", function(){
		resultado.textContent += cinco.textContent;
	});
	seis.addEventListener("click", function(){
		resultado.textContent += seis.textContent;
	});
	siete.addEventListener("click", function(){
		resultado.textContent += siete.textContent;
	});
	ocho.addEventListener("click", function(){
		resultado.textContent += ocho.textContent;
	});
	nueve.addEventListener("click", function(){
		resultado.textContent += nueve.textContent;
	});
	cero.addEventListener("click", function(){
		resultado.textContent += cero.textContent;
	});
	reset.addEventListener("click", function(){
		resultado.textContent = "";
	})


	suma.addEventListener("click", function(){
		Contenedor = resultado.textContent;
  		operacion = "+";
  		limpiar();
	})
	resta.addEventListener("click", function(){
		Contenedor = resultado.textContent;
		operacion = "-";
		limpiar();
	})
	multiplicacion.addEventListener("click", function(){
		Contenedor = resultado.textContent;
		operacion = "*";
		limpiar();
	})
	division.addEventListener("click", function(){
		Contenedor = resultado.textContent;
		operacion = "/";
		limpiar();
	})
	igual.addEventListener("click", function(){
  		resolver();
	})

function limpiar(){
	resultado.textContent = "";
}

function resetear(){
	resultado.textContent = "";
	Contenedor = 0;
	operacion = "";
}

function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
			res = +Contenedor + +resultado.textContent;
			break;

		case "-":
		    res = +Contenedor - +resultado.textContent;
		    break;

		case "*":
			res = +Contenedor * +resultado.textContent;
			break;

		case "/":
			res = +Contenedor / +resultado.textContent;
			break;
	}
	resetear();
	resultado.textContent = res;
}