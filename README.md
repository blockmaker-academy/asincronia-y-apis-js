# Ejercicios de JavaScript - Promises, async/await y llamadas a APIs

![logo_blockmaker_academy](https://avatars.githubusercontent.com/u/128522898?s=400&u=cd50389191929c252ea222200dc3038a9d7d6276&v=4)

¡Bienvenido al repositorio de ejercicios de JavaScript sobre Promises, async/await y llamadas a APIs! Aquí encontrarás una serie de ejercicios diseñados para ayudarte a practicar y comprender los conceptos clave relacionados con Promises, async/await, y cómo realizar llamadas a APIs en JavaScript.

## Introducción a Promises, async/await y llamadas a API's

Las Promises y async/await son características esenciales en JavaScript para trabajar con código asincrónico de manera más legible y mantenible. Estos ejercicios te permitirán adquirir habilidades en la gestión de Promises, el uso de async/await y llamadas a API's.

## Objetivo del Repositorio

El objetivo de este repositorio es proporcionarte ejercicios prácticos que te ayudarán a fortalecer tus habilidades en el manejo de Promises, async/await, y cómo interactuar con APIs en JavaScript. Cada ejercicio se enfoca en un concepto específico y te guiará a través de los pasos necesarios para completarlo con éxito.

## Estructura del Repositorio

El repositorio está organizado de la siguiente manera:

- Cada ejercicio tiene su propia sección en el repositorio, con una descripción detallada y ejemplos para completarlo.
- Dentro de cada sección de ejercicio, encontrarás código de ejemplo y explicaciones para comprender mejor el concepto.
- Además de los ejercicios, se proporcionan soluciones para cada uno de ellos. Puedes consultar estas soluciones como referencia después de intentar resolver los ejercicios por ti mismo.

## Primeros Pasos

Antes de comenzar a trabajar en los ejercicios de este repositorio, es importante asegurarse de tener todas las dependencias necesarias instaladas. Una de las bibliotecas que utilizaremos en varios ejercicios es Axios, que es una biblioteca de JavaScript utilizada para realizar llamadas HTTP. Para utilizar Axios, sigue estos pasos:

1. **Clona el repositorio:** Si aún no has clonado el repositorio en tu máquina, puedes hacerlo siguiendo los pasos mencionados en la sección anterior.

2. **Navega al directorio del repositorio:** Utiliza el comando `cd` para ingresar al directorio del repositorio:

   ```shell
   cd tu-repositorio
   ```

   Reemplaza `tu-repositorio` con el nombre de tu repositorio (ej: cd asincronia-y-apis-js).

3. **Instala las dependencias:** Para instalar las dependencias, incluyendo Axios, ejecuta el siguiente comando:

   ```shell
   npm install
   ```

   Este comando leerá el archivo `package.json` del repositorio y descargará todas las bibliotecas y dependencias necesarias, incluyendo Axios.

4. **Verifica la instalación de Axios:** Una vez que la instalación se complete con éxito, puedes verificar si Axios está correctamente instalado ejecutando el siguiente comando en tu terminal:

   ```shell
   npm list axios
   ```

   Si Axios está instalado correctamente, verás una lista que muestra la versión de Axios junto con otras dependencias.

Con estos pasos, habrás configurado tu entorno para utilizar Axios y podrás comenzar a trabajar en los ejercicios que requieran hacer llamadas HTTP a APIs utilizando esta biblioteca. ¡Ahora estás listo para explorar y practicar los conceptos de Promises, async/await y llamadas a APIs en JavaScript!

## Ejercicios Incluidos

A continuación, se presentan los ejercicios incluidos en este repositorio:

### Promises y Callbacks

1. **Ejercicio 1: Callbacks**: Escribe una función que utilice un callback para imprimir "Hola, mundo" después de 2 segundos de ejecución.

### Promises Básicas

2. **Ejercicio 2: Promises**: Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise resuelta" cuando se cumpla.

3. **Ejercicio 3: async/await**: Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que diga "Operación completada". Utiliza async/await.

### Manejo de Errores con Promises

4. **Ejercicio 4: Manejo de errores con Promises**: Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir "Error: Promise rechazada".

### Encadenamiento de Promises

5. **Ejercicio 5: Encadenamiento de Promises**: Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados y mostrar el resultado final.

### Llamadas a APIs

6. **Ejercicio 6: Llamada a una API con fetch()**: Utiliza el método fetch() para obtener datos de una API de tu elección. Imprime los datos resultantes en la consola.

7. **Ejercicio 7: Llamada a una API con Axios**: Realiza una llamada a una API utilizando Axios. Muestra los datos obtenidos en la consola.

8. **Ejercicio 8: Manipulación de datos de una API**: Después de realizar una llamada a una API con fetch(), utiliza el método .then() para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo, mostrar solo los nombres que comiencen con "A").

### async/await con APIs

9. **Ejercicio 9: Async/await con llamadas a APIs**: Crea una función asincrónica que realice una llamada a una API utilizando Axios y luego manipule los datos recibidos para mostrar información específica.

### Promise.all() y Promise.allSettled()

10. **Ejercicio 10: Promise.all()**: Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego utiliza Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

11. **Ejercicio 11: Promise.allSettled()**: Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza Promise.allSettled() para obtener información sobre el estado de todas las Promises.

### async/await en un bucle

12. **Ejercicio 12: async/await en un bucle**: Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una lista de elementos uno por uno.

### Manejo de Errores en llamadas a APIs

13. **Ejercicio 13: Manejo de errores en llamadas a APIs**: Realiza una llamada a una API con Axios y maneja posibles errores utilizando try/catch para mostrar un mensaje de error en caso de fallo.

### Encadenamiento de Promises con manipulación de datos

14. **Ejercicio 14: Encadenamiento de Promises con manipulación de datos**: Realiza una llamada a una API con fetch() y, después de recibir los datos, encadena Promises para realizar varias operaciones de manipulación de datos, como filtrar, mapear o reducir los resultados.

Estos ejercicios te ayudarán a practicar y reforzar los conceptos clave de Promises, async/await y llamadas a APIs en JavaScript. ¡Diviértete explorando y mejorando tus habilidades en JavaScript!
