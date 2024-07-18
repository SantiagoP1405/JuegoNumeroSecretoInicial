alert('Hola mundo'); //Se muestra el mensaje de Hola mundo
console.log('--------- Valores de las variables ---------'); //Título que le puse para que en la consola aparezcan los valores de las variables

//Variables
alert('Elije hasta qué número quieres adivinar.');
let choice = parseInt(prompt('Quiero adivinar desde el 1 hasta el...'));
let numeroSecreto = Math.floor(Math.random()*choice) + 1;//Se le asigna el valor del número que hay que adivinar. Math.random sirve para generar un número aleatorio entre 0 y 0.9999999999999999. Se multiplica por 10 para que sea un número entre 0 y 9.99999999999999999, se le aplica el método Math.floor para eliminar todo lo que haya después del punto decimal, al redondearlo a su entero más bajo, y se le suma 1 para que sea un número entre 1 y 10 en lugar de entre 0 y 9. 
let maxIntentos = parseInt(prompt('¿En cuántos intentos quieres adivinarlo?'));
alert(`Tendrás ${maxIntentos} intentos para adivinar`);
console.log('numeroSecreto: ',numeroSecreto);
let numeroDeUsuario = 0;
let intentos = 1;


while (numeroDeUsuario != numeroSecreto){ //Ciclo while para indicar que va a repetir todo mientras esa condición se cumpla
    numeroDeUsuario = parseInt(prompt(`Indícame un número entre 1 y ${choice}: `)); //actúa como un input y se almacena a una variable parseInt se usa para que lo que se ingrese en ese input (prompt) e convierta a un entero

    console.log('numeroDeUsuario: ',typeof(numeroDeUsuario)); //Se manda a mostrar en la consola de chrome los valores de la variable dada
    
    //Comparaciones
    if (numeroDeUsuario == numeroSecreto){  //condición de cuando acierta el número secreto
        alert(`Hola. Acertaste, el número es: ${numeroSecreto}, lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`); /* Esto es la interpolación. Se tiene que escribir todo lo que se quiere mostrar en 
        comillas invertidas ( ` ) y la variable se escribe entre llaves {} con un signo de dólar al inicio
        
        El operador ternario se utilzia para evaluar una variable y actuar como una abreviación de las condiciones
        El ? se convierte en el if, y el : en el else
        */
        
        
    }
    
    else{ //condición de cuando no acierta el número secreto
        if (numeroDeUsuario > numeroSecreto){
            alert('No acertaste. El número secreto es menor.');
        }
    
        else{
            alert('No acertaste. El número secreto es mayor.');
        }
        intentos ++; //Se incrementa el contador cuando no acierta.
        if (intentos > maxIntentos){
            alert(`Llegaste al número máximo de ${maxIntentos} intentos. El número secreto era ${numeroSecreto}`)
            break; //Se rompe el ciclo while al llegar a esa condición
        }
    }

}





