var map;
var marker;
var stations = new Array();

$(document).ready(function() {

    // Cargar listado de estaciones
    listStations();

    // Evento al seleccionar una estación del listado
    $('#stations').on('change', function() {
        
        // Obtener el ID de la estación seleccionada
        var selectedId = $('#stations').val();

        // Eliminar marcadores actuales
        marker.setMap(null);

        // Colocar marcador en el mapa
        var selectedStation = stations[selectedId];
        var markerLocation = {lat: selectedStation[0], lng: selectedStation[1]};

        marker = new google.maps.Marker({
            position: markerLocation,
            map: map
        });

        map.setCenter(markerLocation);
        map.setZoom(18);

        // TODO: Mostrar número de bicicletas disponibles

    });

});


// Inicializar el mapa
function initMap() {
    var gdl = {lat: 20.6739383, lng: -103.405625};

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: gdl
    });
    marker = new google.maps.Marker({
        position: gdl,
        map: map
    });
}


// Obtener el listado completo de estaciones
function listStations() {
    $.ajax({
        url: 'https://guad.publicbikesystem.net/ube/gbfs/v1/en/station_information',
        method: 'GET',
        success: function(result) {

            var stationsJson = result['data']['stations'];

            for (var i=0; i<stationsJson.length; i++) {
                station = stationsJson[i];

                // Anexar al arreglo de estaciones
                stations[station['station_id']] = [
                    station['lat'],
                    station['lon']
                ];

                // Anexar al listado de selección
                $('#stations').append(
                    '<option value="' + station['station_id'] + '">' + station['name'] + '</option>'
                );
            }
        }
    });
}