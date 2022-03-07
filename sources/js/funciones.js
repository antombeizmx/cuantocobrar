

function costo_servicio()
{
    let input_precios = document.getElementById("input_precio");
let input_duracion = document.getElementById("input_duracion");
let input_impuestos = document.getElementById("input_impuestos");
let input_mes = document.getElementById("input_mes");
let input_jornada = document.getElementById("input_jornada");
let input_operativos = document.getElementById("input_operativos");

// obtener valores de los inputs
let precios = input_precios.value;
let duracion = input_duracion.value;
let impuestos = input_impuestos.value;
let mes = input_mes.value;
let jornada = input_jornada.value;
let operativos = input_operativos.value;
    // comprobar que las variables no esten vacias  
    if (precios == "" || duracion == "" || impuestos == "" || mes == "" || jornada == "" || operativos == "")
    {
        alert("Faltan datos por ingresar");
    }
    else
    {
        // convertir los valores de los inputs a numeros

        // precios = parseInt(precios);
        // duracion = parseInt(duracion);
        // impuestos = parseInt(impuestos);
        // mes = parseInt(mes);
        // jornada = parseInt(jornada);
        // operativos = parseInt(operativos);

        //  hacer split a operativos y sumar los valores
        let operativos_array = operativos.split(",");
        let operativos_sum = 0;
        for (let i = 0; i < operativos_array.length; i++)
        {
            operativos_sum += parseInt(operativos_array[i]);
        }
        // ver por consolar todas la variables
        console.log(precios);
        console.log(duracion);
        console.log(impuestos);
        console.log(mes);
        console.log(jornada);
        console.log(operativos_sum);
        // calcular el costo del servicio
        let op1 = precios * duracion;
        let op2 = op1 * (impuestos/100);
        let op3 = operativos_sum/mes;
        let op4 = op3/jornada;
        let op5 = op4 * duracion;
        // mostrar por consola las variables
        console.log(op1);
        console.log(op2);
        console.log(op5);
        let costo_final = op1+op2+op5;
        console.log(costo_final);

        // // mostrar el resultado en el div
        document.getElementById("parrafo_resultado").innerHTML = " ";
        document.getElementById("parrafo_resultado").innerHTML = formato(Math.ceil(costo_final));
    }
}

// funcion para copiar al portapapeles
function copiar_portapapeles()
{
    let resultado = document.getElementById("parrafo_resultado").innerHTML;
    resultado.select();
    Document.execCommand('copy');
    alert("Se copio el resultado al portapapeles");
}

// funcion para dar formato de moneda a los inputs
function formato(number){
    return new Intl.NumberFormat('es-MX', {style: 'currency',currency: 'MXN', minimumFractionDigits: 2}).format(number);
};