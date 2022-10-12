
    inicio();
    function inicio(){
        let nombre_pacientes= prompt("ingrese el nombre del paciente");
        let peso = parseInt(prompt("Ingrese el peso del paciente"));
        let altura = parseInt(prompt("Ingrese la altura del paciente"));

    if (!isNaN(peso) && !isNaN(altura)) {       
        function imc(peso, altura) {
            return (peso/(altura*altura)*10000)
        };
        resultado = imc(peso, altura);
    }
    else{
        alert("Ingresa un numero valido en peso y altura")
        nombre_pacientes="";
        peso = "";
        altura = "";
        inicio();
        
    }

    console.log(resultado)
    //Si su IMC es menos de 18.5, se encuentra dentro del rango de peso insuficiente. Si su IMC es entre 18.5 y 24.9, se encuentra dentro del rango de peso normal o saludable. Si su IMC es entre 25.0 y 29.9, se encuentra dentro del rango de sobrepeso. Si su IMC es 30.0 o superior, se encuentra dentro del rango de obesidad.

    if (resultado>=18.5 && resultado<25 ) {
        document.write(`<b>${nombre_pacientes}</b> tienes un indice de masa corporal en normal, actualmente esta <b> ${resultado.toFixed(2)}%</b> Continua con ejercicio y buena alimentación <br><br>`)
    }
    else if(resultado>=25 && resultado<30){
        document.write(`<b>${nombre_pacientes}</b> tienes un  indice de masa corporal en sobrepeso, actualmente esta <b> ${resultado.toFixed(2)}%</b>. Debes tener cita con nutrición <br><br>`)
    }
    else if(resultado>30){
        document.write(`<b>${nombre_pacientes}</b> tienes un  indice de masa corporal en obesidad, actualmente esta <b> ${resultado.toFixed(2)}%</b>. Debes tener cita con nutrición de manera inmediata, corres riesgo por tu salud <br><br>`)
    }
    else if(resultado<18.5){
        document.write(`<b>${nombre_pacientes}</b> tienes un indice de masa corporal en desnutrición, actualmente esta <b> ${resultado.toFixed(2)}% </b> Debes tener cita con nutrición de manera inmediata, corres riesgo por tu salud <br><br>`)
    }
    decision();
}

    

    function decision() {
        escoge = prompt("Deseas ingresar otro dato escoge escribe si o no")

        if(escoge == "si"|| escoge == "no"){
            if (escoge == "si") {
                inicio();
            }
            else if (escoge == "no"){
                alert("Gracias por la información")
            };
            }
            else{
                alert("No escribiste una eleccion valida")
                decision()
            }
    
}




//console.log(resultado +"%")


// function mostrarEnConsola(numero1,numero2){
//     console.log('Suma;'+(numero1+numero2))
//     console.log('Resta;'+(numero1-numero2))
//     console.log('Multipliacacion;'+(numero1*numero2))
//     console.log('Division;'+(numero1/numero2))
//     console.log('****************************************')
// }


// function mostrarEnPantalla(numero1,numero2){
//     document.write('Suma;'+(numero1+numero2)+'<br>')
//     document.write('Resta;'+(numero1-numero2)+'<br>')
//     document.write('Multipliacacion;'+(numero1*numero2)+'<br>')
//     document.write('Division;'+(numero1/numero2)+'<br>')
//     document.write('****************************************') 
// }


// function calculadora(numero1,numero2,mostra){
//     if(mostra == false){
//         mostrarEnConsola(numero1,numero2)
//     }else{
//         mostrarEnPantalla(numero1,numero2)
//     }
// }


// calculadora(2,5,false)

// var salida = calculadora(10,20)
