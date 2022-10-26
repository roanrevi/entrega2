//operacaion Sumar, vamos a identificar el boton suma, escuchamos que le haga un click cuando lo hace se genera 
//funcion que toma las dos variables de numero uno y numero dos con los valores que tengan y luego otra variable para sumarlas.


let sumar = document.getElementById('suma');
let errores = document.querySelector('#errores');
errores.style.display='none'
sumar.addEventListener('click', function (e){
let numero_uno = document.querySelector('#num_uno').value;
let numero_dos = document.querySelector('#num_dos').value;
    if(numero_uno && numero_dos ){
        errores.style.display='none'
        let resultado = parseInt( numero_uno) + parseInt( numero_dos)
        Swal.fire(`La suma de los numeros es: ${resultado}`);
        console.log(numero_uno.innerHTML)
        
        }
    else{

        if(numero_uno==""){
            //Swal.fire(`Favor ingresar el Numero 1`);
            errores.style.display='block';
            errores.innerHTML='Favor ingresar el Numero 1';
            
            
        }
        else if(numero_dos==""){
        
            //Swal.fire(`Favor ingresar el Numero 2`);
            errores.style.display='block';
            errores.innerHTML='Favor ingresar el Numero 2';
        }    
    
    }
})
let restar = document.getElementById('resta');
restar.addEventListener('click', function (e){
let numero_uno = document.querySelector('#num_uno').value;
let numero_dos = document.querySelector('#num_dos').value;
    if(numero_uno && numero_dos ){
        errores.style.display='none'
        let resultado = parseInt( numero_uno) - parseInt( numero_dos)
        Swal.fire(`La suma de los numeros es: ${resultado}`);
        }
    else{

        if(numero_uno==""){
            //Swal.fire(`Favor ingresar el Numero 1`);
            errores.style.display='block';
            errores.innerHTML='Favor ingresar el Numero 1';
            
            
        }
        else if(numero_dos==""){
        
            //Swal.fire(`Favor ingresar el Numero 2`);
            errores.style.display='block';
            errores.innerHTML='Favor ingresar el Numero 2';
        }    
    
    }
})
let multimplicar = document.getElementById('multiplica');
multimplicar.addEventListener('click', function (e){
let numero_uno = document.querySelector('#num_uno').value;
let numero_dos = document.querySelector('#num_dos').value;
    if(numero_uno && numero_dos ){
        errores.style.display='none'
        let resultado = parseInt( numero_uno) * parseInt( numero_dos)
        Swal.fire(`La suma de los numeros es: ${resultado}`);
        }
    else{

        if(numero_uno==""){
            //Swal.fire(`Favor ingresar el Numero 1`);
            errores.style.display='block';
            errores.innerHTML='Favor ingresar el Numero 1';
            
            
        }
        else if(numero_dos==""){
        
            //Swal.fire(`Favor ingresar el Numero 2`);
            errores.style.display='block';
            errores.innerHTML='Favor ingresar el Numero 2';
        }    
    
    }
})
let dividir = document.getElementById('divide');
dividir.addEventListener('click', function (e){
let numero_uno = document.querySelector('#num_uno').value;
let numero_dos = document.querySelector('#num_dos').value;
    if(numero_uno && numero_dos ){
        errores.style.display='none'
        let resultado = parseInt( numero_uno) / parseInt( numero_dos)
        Swal.fire(`La suma de los numeros es: ${resultado}`);
        }
    else{

        if(numero_uno==""){
            //Swal.fire(`Favor ingresar el Numero 1`);
            errores.style.display='block';
            errores.innerHTML='Favor ingresar el Numero 1';
            
            
        }
        else if(numero_dos==""){
        
            //Swal.fire(`Favor ingresar el Numero 2`);
            errores.style.display='block';
            errores.innerHTML='Favor ingresar el Numero 2';
        }    
    
    }
})