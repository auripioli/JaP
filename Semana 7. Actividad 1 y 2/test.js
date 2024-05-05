function totalTecnicas(fundamentos, imperativa, objetos) {
    return (fundamentos * 0.35) + (imperativa * 0.45) + (objetos * 0.20)
    //Fundamentos pondera 35%, Imperativa 45% y Objetos 20%.
}

function apruebaTecnicas(totalTecnicas) {
    return totalTecnicas >= 60
}
//Para aprobar técnicas directamente, se precisa 60 o más puntos.
function apruebaIngles(calificacionIngles) {
    return calificacionIngles >= 50
}
//Para aprobar inglés se precisa 50 o más puntos.
function apruebaCT(totalCT) {
    return totalCT === 10
}

function textoCordial(nombre, apellido, fundamentos, imperativa, objetos, calificacionIngles, totalCT) {
    //Omití el parámetro departamento, que si bien lo pedía, no hallé el sentido en ponerlo porque en definitiva, utilizarlo o retornarlo no iba a dar ninguna información relevante, por lo menos así lo veo yo

    let totalTecnicas = ((fundamentos * 0.35) + (imperativa * 0.45) + (objetos * 0.20));
    let totalTecnicasRedondeado = totalTecnicas.toFixed(2);
    //totalTecnicas, al multiplicar con decimales, que corresponde a cuando pondera, daba numeros con varios decimales, por lo tanto busqué en internet una manera sencilla de redondear, para que no sea tan extenso. Como se había planteado que el repechaje era entre 50 y 59,99 puntos, decidi utilizar dos decimales despues del punto.
    let tecnicasRepechaje = (totalTecnicas >= 50 && totalTecnicas < 60)
    //En este caso cree una variable para representar los valores de repechaje, entre el 50 inclusive pero menor que 60.

    if (apruebaIngles(calificacionIngles) && apruebaCT(totalCT)) {
        if (apruebaTecnicas(totalTecnicas)) {
            return 'Hola' + ' ' + nombre + ' ' + apellido + '.\nRecuerda que para aprobar necesitas tener en Técnica más de 60 puntos, en Inglés más de 50 y en CT, las 10 tutorías hechas, que son 10.\nEl detalle de tu status final es el siguiente:\nEn ingles -' + ' ' + calificacionIngles + ' puntos ' + '- APROBADO\nEn CT -' + ' ' + totalCT + ' lecciones ' + '- APROBADO\nEn técnica -' + ' ' + totalTecnicasRedondeado + ' puntos ' + '- APROBADO\nEn conclusión, tu status final es' + ' ' + totalTecnicasRedondeado + '\nFelicitaciones, aprobaste el curso!'
        } else {
            (tecnicasRepechaje)
            return 'Hola' + ' ' + nombre + ' ' + apellido + '.\nRecuerda que para aprobar necesitas tener en Técnica más de 60 puntos, en Inglés más de 50 y en CT, las 10 tutorías hechas, que son 10.\nEl detalle de tu status final es el siguiente:\nEn ingles -' + ' ' + calificacionIngles + ' puntos ' + '- APROBADO\nEn CT -' + ' ' + totalCT + ' lecciones ' + '- APROBADO\nEn técnica -' + ' ' + totalTecnicasRedondeado + ' puntos ' + '- A REPECHAJE\nTu status final es' + ' ' + totalTecnicasRedondeado + '.\nDebes dar el examen de repechaje. Se aprueba a partir del %60.\nÉxitos!'
        }
        //Esta primera parte de la función lo que retorna son dos cuestiones específicas: Si aprueba totalmente, o si aprueba pero aún falta la prueba de repechaje, por lo tanto, la aprobación esta en suspenso hasta que la dicha prueba sea realziada.        

    } else {
        let mensaje = 'Hola ' + nombre + ' ' + apellido + '.\nRecuerda que para aprobar necesitas tener en Técnica más de 60 puntos, en Inglés más de 50 y en CT, las 10 tutorías hechas.\nEl detalle de tu status final es el siguiente:\n';
        if (!apruebaIngles(calificacionIngles)) {
            mensaje += 'En inglés - ' + calificacionIngles + ' puntos - NO APROBADO\n';
        } else {
            mensaje += 'En inglés - ' + calificacionIngles + ' puntos - APROBADO\n';
        }
        if (!apruebaCT(totalCT)) {
            mensaje += 'En CT - ' + totalCT + ' lecciones - NO APROBADO\n';
        } else {
            mensaje += 'En CT - ' + totalCT + ' lecciones - APROBADO\n';
        }
        if (apruebaTecnicas(totalTecnicas)) {
            mensaje += 'En técnica - ' + totalTecnicasRedondeado + ' puntos - APROBADO\n';
        } else if (tecnicasRepechaje) {
            mensaje += 'En técnica - ' + totalTecnicasRedondeado + ' puntos - A REPECHAJE\n';
        } else {
            mensaje += 'En técnica - ' + totalTecnicasRedondeado + ' puntos - NO APROBADO\n';
        }
        mensaje += 'Lamentablemente no cumples con los requisitos mínimos para aprobar el la fase 1.\nFracasar no es obtener resultados no esperados, fracasar es no intentarlo.\nIntenta nuevamente el próximo año!';
        return mensaje;
    }
}
//Por último, la segunda parte de la función lo que hace es retornar en pantalla, la especificación de cada puntaje y porque no se aprueba, ya que si solo una no aprueba, no se aprueba en general, debido a los requisitos que estan explícitos en la función y en la letra del ejercicio.


console.log(textoCordial('Aurora', 'Pioli', 78, 53, 99, 70, 10))
//En este caso, aprueba todo.
console.log(textoCordial('Aurora', 'Pioli', 81, 53, 30, 84, 10))
//En este caso, aprueba CT e Inglés, pero va a repechaje.
console.log(textoCordial('Aurora', 'Pioli', 81, 60, 90, 49, 10))
//En este caso, aprueba Técnica y CT, pero no llega al mínimo de Inglés, por lo tanto no pasa la fase 1.
console.log(textoCordial('Aurora', 'Pioli', 81, 60, 90, 100, 5))
//En este caso, aprueba Técnica e Inglés, pero no reúne el total de CT, por lo tanto no pasa la fase 1.
console.log(textoCordial('Aurora', 'Pioli', 40, 65, 59, 49, 10))
//En este caso, aprueba CT e iría a repechaje en Técnica, pero no aprobo Inglés.
console.log(textoCordial('Aurora', 'Pioli', 40, 65, 59, 70, 4))
//En este caso, aprueba Inglés e iría a repechaje en Técnica, pero no aprobo CT.
console.log(textoCordial('Aurora', 'Pioli', 40, 20, 40, 100, 9))
//Aprueba solo Inglés. No aprueba fase 1.
console.log(textoCordial('Aurora', 'Pioli', 40, 50, 23, 40, 10))
//Aprueba solo CT. No aprueba fase 1.
console.log(textoCordial('Aurora', 'Pioli', 100, 99, 76, 38, 8))
//Aprueba solo Técnicas. No aprueba fase 1.
console.log(textoCordial('Aurora', 'Pioli', 25, 43, 38, 46, 8))
//No aprueba ninguna. No aprueba fase 1.
