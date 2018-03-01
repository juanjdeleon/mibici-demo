# Datos Abiertos MiBici
En este sencillo script se demuestra el acceso a los datos abiertos del sistema de bici pública **Mi Bici** para obtener información de una estación en tiempo real.
El conjunto de datos utilizado se encuentra en la siguiente dirección: https://datos.jalisco.gob.mx/dataset/disponibilidad-de-bicicletas-en-estaciones-de-mi-bici

Los datos expuestos en este servicio siguen la especificación GBFS: https://github.com/NABSA/gbfs

## Indicaciones
Para hacer funcionar el mapa se requiere contar con una clave de Google Maps API. Esta clave debe ser reemplazada en el parámetro *key* de la siguiente línea del archivo `index.html`:

```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=TUCLAVEAPI&callback=initMap">
```
