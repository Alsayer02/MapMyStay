const errorEl = document.getElementById('error');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    errorEl.innerText = "Geolocation is not supported by your browser.";
}

function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const map = L.map('map').setView([lat, lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    L.marker([lat, lng])
        .addTo(map)
        .bindPopup("You are here")
        .openPopup();

    const hotels = [
        { name: "Hotel Blue", lat: lat + 0.01, lng: lng + 0.01 },
        { name: "Hotel Star", lat: lat - 0.01, lng: lng - 0.01 },
        { name: "Hotel Moon", lat: lat + 0.015, lng: lng - 0.01 }
    ];

    hotels.forEach(hotel => {
        L.marker([hotel.lat, hotel.lng])
            .addTo(map)
            .bindPopup(hotel.name);
    });
}

function error() {
    errorEl.innerText = "Location access denied. Cannot show map.";
}
