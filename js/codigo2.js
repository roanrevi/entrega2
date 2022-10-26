
let apuesta = 0;
//let jugar = document.getElementById('jugar');
let resultado = document.querySelector('#result');
    resultado.style.display='none'
//jugar.addEventListener('click', function (e){
    //let cant = document.querySelector('#cant').value;
        // if (cant % 2 !== 0){
        let jugada = document.querySelectorAll('#table .eleccion button');
        //     for (let i = 0; i <= cant-1; i++) {
            jugada.forEach((element)=>{
                element.addEventListener('click',(e)=>{
                    e.preventDefault();
                    let cpu = Math.floor(Math.random()*3);
                    
                    let escogencia = '';
                    if(e.target.id=='piedra'){
                        escogencia=0                        
                    }
                    else if (e.target.id=='papel'){
                        escogencia=1
                        
                    }
                    else if (e.target.id=='tijera'){
                        escogencia=2
                        
                    }
                    
                    console.log(cpu);
                    console.log(escogencia);

                    if (escogencia==cpu){
                        resultado.style.display='block';
                        resultado.style.backgroundColor="yellow";
                        resultado.innerHTML=`Es un empate ambos escogen <b> ${e.target.id} </b>`
                    }
                    else if (escogencia==0 && cpu==1){
                        resultado.style.display='block';
                        resultado.style.backgroundColor="red";
                        resultado.innerHTML=`Perdiste, porque escogiste <b> ${e.target.id} </b> por lo que gana el computador que escogio <b>papel</b>`
                    }
                    else if (escogencia==0 && cpu==2){
                        resultado.style.display='block';
                        resultado.style.backgroundColor="green";
                        resultado.innerHTML=`Ganaste, porque escogiste <b> ${e.target.id} </b> por lo que gana el computador que escogio <b> tijeras </b>`
                    }
                    else if (escogencia==1 && cpu==2){
                        resultado.style.display='block';
                        resultado.style.backgroundColor="red";
                        resultado.innerHTML=`Perdiste, porque escogiste <b> ${e.target.id} </b> por lo que gana el computador que escogio <b>tijeras</b>`
                    }
                    else if (escogencia==1 && cpu==0){
                        resultado.style.display='block';
                        resultado.style.backgroundColor="green";
                        resultado.innerHTML=`Ganaste, porque escogiste <b> ${e.target.id} </b> por lo que gana el computador que escogio <b> piedra </b>`
                    }
                    else if (escogencia==2 && cpu==0){
                        resultado.style.display='block';
                        resultado.style.backgroundColor="red";
                        resultado.innerHTML=`Perdiste, porque escogiste <b> ${e.target.id} </b> por lo que gana el computador que escogio <b>piedra</b>`
                    }
                    else if (escogencia==2 && cpu==1){
                        resultado.style.display='block';
                        resultado.style.backgroundColor="green";
                        resultado.innerHTML=`Ganaste, porque escogiste <b> ${e.target.id} </b> por lo que gana el computador que escogio <b>papel</b>`
                    }
                    
                

                })

            }

            )
        // }}
        //     else{
        //         Swal.fire(`Al escoger  ${cant} no se prodria tener un ganador siempre, por favor escoge un numero impar`);
    
        //     }
        //})




            // tablero.style.display='block';
            // for (let i = 0; i <= cant-1; i++) {
            //     //let piedra = document.getElementById('piedra');                                  
            //         let cpu = Math.floor(Math.random()*3);
            //         let escogePiedra= e.target.id;
            //         if(cpu===0){
            //             console.log = ("Es igual de cero")
            //             resultado.style.display='block';
            //             resultado.style.backgroundColor="yellow";
            //             apuesta=apuesta;
            //         }
            //         else if(cpu===1){
            //             resultado.style.display='block';
            //             resultado.style.backgroundColor="red";
            //             apuesta=apuesta-1;
            //         }
            //         else if(cpu===2){
            //             resultado.style.display='block';
            //             resultado.style.backgroundColor="green";
            //             apuesta=apuesta+1;
            //         }
                
                
        
            
        
        
      



