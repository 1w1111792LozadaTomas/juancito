let txtNombre = document.getElementById('InputNombre');
let txtApellido = document.getElementById('InputApellido');
let txtEmail = document.getElementById('InputEmail');
let txtContrasenia = document.getElementById('InputContraseña');
let txtRContrasenia = document.getElementById('InputRContraseña');
let chkTOS = document.getElementById('chkTOS');
let btnCrearCuenta = document.getElementById('btnCrearCuenta');
let ArrayDeTxt = [
	txtNombre,
	txtApellido,
	txtEmail,
	txtContrasenia,
	txtRContrasenia,
];
let ArrayDeTxtVacios = [];
let ArrayDeTxtLlenos = [];

let form = document.getElementById('form');
let juancito;

function validarForm() {
	// Comprobar si los input están llenos
	ArrayDeTxtLlenos = [];
	ArrayDeTxtVacios = [];

	// for (let i = 0; i < ArrayDeTxt.length; i++) {
	// 	if (!ArrayDeTxt[i].value) {
	// 		ArrayDeTxtVacios.push(ArrayDeTxt[i]);
	// 	}
	// 	if (ArrayDeTxt[i].value) {
	// 		ArrayDeTxtLlenos.push(ArrayDeTxt[i]);
	// 	}
	// }

	ArrayDeTxt.forEach((element) => {
		element.value
			? ArrayDeTxtLlenos.push(element)
			: ArrayDeTxtVacios.push(element);
	});

	if (ArrayDeTxtVacios.length !== 0) {
		let stringDeInputsVacios = '';
		// for (let i = 0; i < ArrayDeTxtVacios.length; i++) {
		// 	stringDeInputsVacios =
		// 		stringDeInputsVacios + '\n' + String(ArrayDeTxtVacios[i].id);
		// }
		ArrayDeTxtVacios.forEach((element) => {
			stringDeInputsVacios += `\n ${String(element.id)}`;
		});

		// for (let i = 0; i < ArrayDeTxt.length; i++) {
		// 	ArrayDeTxt[i].classList.remove('inputVacio');
		// }
		ArrayDeTxt.forEach((element) => {
			element.classList.remove('inputVacio');
		});

		for (let i = 0; i < ArrayDeTxtVacios.length; i++) {
			ArrayDeTxtVacios[i].classList.add('inputVacio');
		}

		swal(
			'¡Hay campos obligatorios sin rellenar!',
			'Los campos son: ' + stringDeInputsVacios
		);
		if ((ArrayDeTxtVacios.length = 0)) {
			ArrayDeTxt.forEach((x) => {
				x.classList.remove('inputVacio');
			});
		}
		return false;
	}

	if (ArrayDeTxtVacios.length === 0) {
		ArrayDeTxt.forEach((element) => {
			element.classList.remove('inputVacio');
		});
	}

	// ----------------------------------------------------------------------------------------------------------------------
	// Verificar contraseñas iguales
	if (
		document.getElementById('InputContraseña').value !=
		document.getElementById('InputRContraseña').value
	) {
		swal(
			'Las contraseñas no coinciden',
			'Verifica las mayúsculas y espacios'
		);
		return false;
	}

	if (
		document.getElementById('InputContraseña').value.replace(/[^A-Z]/g, '')
			.length < 1
	) {
		swal('La contraseña debe contener al menos una mayúscula');
	}

	let arrayLetras = [];
	arrayLetras = document.getElementById('InputContraseña').value.split('');
	let cantDeNoNumeros = 0;
	for (let i = 0; i < arrayLetras.length; i++) {
		if (isNaN(arrayLetras[i])) {
			cantDeNoNumeros++;
		}
	}
	console.log(cantDeNoNumeros);

	if (arrayLetras.length - cantDeNoNumeros < 3) {
		swal('La contraseña debe contener al menos tres números');
		return false;
	}

	if (document.getElementById('chkTOS').checked == false) {
		swal('Debe aceptar los términos y condiciones antes de proceder');
		return false;
	}
	// ----------------------------------------------------------------------------------------------------------------------
	swal('Dirección registrada con éxito', 'success');
	return true;
}

function mostrarContraseña() {
	if (document.getElementById('InputContraseña').type === 'password') {
		document.getElementById('InputContraseña').type = 'text';
		document.getElementById('InputRContraseña').type = 'text';
	} else {
		document.getElementById('InputContraseña').type = 'password';
		document.getElementById('InputRContraseña').type = 'password';
	}
}
