
function restaNum(num){
    return num - 1;
}
function codigoCorrecto(){
    alert("El codigo es correcto, puede navegar en esta web");
}


let ubicacion = prompt("Hola! este sitio es unicamente para ventas dentro de la ciudad de Bahia Blanca.\n \n" +
"¿Usted es de la ciudad de Bahia Blanca? \n 1.Si / 2.No");


let intentos = 3;

if(ubicacion == 1){
    let codPostal = parseInt(prompt("Ingrese el codigo postal de Bahia Blanca"));
  
         if(codPostal == 8000){
            
           
          codigoCorrecto();
        }else{
            
            while (codPostal != 8000 && intentos!=0 ){
                
               
               intentos = restaNum(intentos);
               if(intentos>0){
               alert(`El codigo es incorrecto, le quedan ${intentos} intentos`);
                codPostal = parseInt(prompt("Ingrese el codigo postal de Bahia Blanca"));
                if(codPostal == 8000){
            
                   
                    codigoCorrecto();
                }
            }else{
                alert("El codigo es incorrecto, se quedo sin intentos. NO PUEDE NAVEGAR EN ESTA PAGINA");
                window.close();
                
            }
            } 
           
        }
}else{
    alert("Lo siento, solo vendemos a personas de Bahia Blanca");
    window.close();
}
