# Conclusiones

SOAP sirve para intercambiar información entre aplicaciones mediante mensajes XML con una estructura fija: un sobre (Envelope) que contiene un cuerpo (Body) con la operación y sus datos. El sobre XML aporta un formato estándar que cualquier lenguaje o plataforma puede leer, aunque los mensajes son más largos que en otros formatos.

WSDL es el contrato del servicio. Al abrir la dirección con `?wsdl` pude ver las operaciones, los datos de entrada y salida, sus tipos y el endpoint. Con eso otra persona o aplicación sabe cómo consumir el servicio sin revisar el código. También aprendí que los nombres del WSDL deben coincidir exactamente con la implementación, porque si no, el servicio no encuentra la operación.

Consultar un WSDL es una petición GET que solo describe el servicio. Invocar una operación es una petición POST con un sobre XML que ejecuta un cálculo y devuelve una respuesta SOAP, como los 77 °F o el área de 40 que obtuve en las pruebas.

Conviene separar las rutas en un Router porque, cuando la aplicación crece, el archivo principal se mantiene limpio y cada servicio se registra en un solo lugar. En mi proyecto, `app.js` solo configura la aplicación y monta el Router, lo que facilita encontrar y modificar cada parte.

El middleware de registro se justifica porque todas las peticiones necesitan la misma tarea: mostrar método, URL, estado y tiempo, tanto al consultar un WSDL como al invocar una operación. Al escribirlo una sola vez y ejecutarlo antes de las rutas evito repetir código en cada operación y reduzco errores.

SOAP con WSDL conviene en sistemas empresariales o bancarios, donde dos organizaciones necesitan un contrato estricto y verificable. Una API REST con JSON es más sencilla para una aplicación móvil que solo consulta datos, porque los mensajes son más ligeros y no requiere un contrato tan formal.