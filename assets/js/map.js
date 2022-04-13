function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(28.453783, 34.904616),
        // center: { lat: 28.739279, lng: 35.25263 },
        zoom: 16,
        disableDefaultUI: true,
        styles: [
            //   bg color 
            { elementType: "geometry", stylers: [{ color: "#13100d" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#13100d" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: 'f0f' }],
            },
            {
                featureType: "poi",
                elementType: "labels",
                //   places names color
                stylers: [{ color: '#000' }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#100e0b" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                //   road color 
                // stylers: [{ color: "#2E2C2C" }],
                stylers: [{ color: "#1a1919" }],
                // stylers: [{ color: "#201E1C" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                //   road stroke color
                stylers: [{ color: "#13100d" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                //   text color
                stylers: [{ color: "#32302f" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
            // road arrows 
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    { "visibility": "off" }
                ]
            },

            // hide pointer
            {
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
            },
        ],
    };

    var icon = {
        url: "./assets/pulse.gif", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
};
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(28.4548992, 34.9132841),
        map: map,
             icon: icon,
    });


}
