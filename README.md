# Servicios web SOAP con Express y WSDL

Práctica de laboratorio: dos servicios web SOAP hechos con Node.js y Express, cada uno con su contrato WSDL. Las peticiones y las respuestas son sobres XML. El proyecto usa la librería [`soap`](https://github.com/vpulim/node-soap) (node-soap).

## Servicios

| Servicio | Endpoint | WSDL | Operaciones |
| --- | --- | --- | --- |
| ConversionesService | `/soap/conversiones` | `/soap/conversiones?wsdl` | `CelsiusAFahrenheit`, `KilometrosAMillas` |
| GeometriaService | `/soap/geometria` | `/soap/geometria?wsdl` | `AreaRectangulo`, `PerimetroRectangulo` |

## Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada) y npm
- [Postman](https://www.postman.com/) (u otra herramienta que envíe peticiones HTTP con XML)
- Git

## Instalación

```bash
git clone URL_DEL_REPOSITORIO
cd soap-express
npm install
```

## Ejecución

```bash
npm start
```

Debe aparecer el mensaje `Servidor SOAP en http://localhost:3000`. El servidor usa el puerto 3000 por defecto. Para cambiarlo, define la variable de entorno `PORT`.

## Direcciones de los contratos WSDL

- Conversiones: http://localhost:3000/soap/conversiones?wsdl
- Geometría: http://localhost:3000/soap/geometria?wsdl

Ábrelas en el navegador con el servidor en ejecución. Cada contrato debe mostrar sus dos operaciones.

## Estructura del proyecto

```
soap-express/
├── src/
│   ├── server.js                 # Arranque del servidor
│   ├── app.js                    # Configuración de Express (middleware y Router)
│   ├── routes/soap.routes.js     # Router que registra los dos servicios SOAP
│   ├── middleware/logger.js      # Registro de peticiones
│   ├── services/
│   │   ├── conversiones.service.js
│   │   └── geometria.service.js
│   └── wsdl/
│       ├── conversiones.wsdl
│       └── geometria.wsdl
├── pruebas/                      # Peticiones XML de prueba
├── evidencias/                   # Capturas de las pruebas
├── EVIDENCIAS.md                 # Documento con las capturas
├── CONCLUSIONES.md
└── README.md
```

## Middleware de registro

El middleware `src/middleware/logger.js` se ejecuta antes de las rutas SOAP. Por cada petición imprime en la terminal el método HTTP, la URL, el código de estado de la respuesta y el tiempo de procesamiento. No modifica el contenido XML.

Ejemplo:

```
[2026-10-28T18:30:12.000Z] GET /soap/conversiones?wsdl -> 200 (4.2 ms)
[2026-10-28T18:30:40.000Z] POST /soap/conversiones -> 200 (6.8 ms)
```

## Cómo reproducir las pruebas

Con el servidor en ejecución (`npm start`), abre Postman y sigue estos pasos para cada prueba:

1. Crea una petición nueva con el método **POST** y la URL del endpoint.
2. En **Headers** agrega `Content-Type: text/xml; charset=utf-8` y `SOAPAction` con el nombre de la operación.
3. En **Body** elige **raw**, selecciona **XML** y pega el contenido del archivo de la carpeta `pruebas/`.
4. Pulsa **Send** y revisa que la respuesta sea un sobre SOAP en XML con el resultado esperado.

| Operación | Endpoint | `SOAPAction` | Archivo en `pruebas/` | Entrada | Resultado esperado |
| --- | --- | --- | --- | --- | --- |
| CelsiusAFahrenheit | `/soap/conversiones` | `CelsiusAFahrenheit` | `celsius-a-fahrenheit.xml` | 25 °C | 77 °F |
| KilometrosAMillas | `/soap/conversiones` | `KilometrosAMillas` | `kilometros-a-millas.xml` | 10 km | 6.21371 millas |
| AreaRectangulo | `/soap/geometria` | `AreaRectangulo` | `area-rectangulo.xml` | base 8, altura 5 | 40 |
| PerimetroRectangulo | `/soap/geometria` | `PerimetroRectangulo` | `perimetro-rectangulo.xml` | base 8, altura 5 | 26 |

Las capturas de todas las pruebas están en la carpeta `evidencias/` y se muestran en [EVIDENCIAS.md](EVIDENCIAS.md).

## Entrega

- Repositorio: URL_DEL_REPOSITORIO
- Conclusiones: [CONCLUSIONES.md](CONCLUSIONES.md)