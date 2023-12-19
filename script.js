

// value es el valor por defecto que tiene el input, en este caso es cero porque no esta declarado
//document.getElementById lee todo el html en busca del id
function agregar(valor){
    document.getElementById("pantalla").value += valor
}

function borrar() {
    document.getElementById("pantalla").value = ""
}

// la funcion eval de JavaScrip toma una string y ejecuta como una funcion matematica
function calcular(){
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado

    // document.getElementById("pantalla").value = eval(document.getElementById("pantalla").value)
    // forma abreviada    
}
