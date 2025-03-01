var mapa = L.map('mapa').setView([-23.55052, -46.633308], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(mapa);

L.marker([-23.55052, -46.633308]).addTo(mapa)
    .openPopup();

L.marker([-23.56164, -46.653308]).addTo(mapa)
.openPopup();

L.marker([-23.57276, -46.643308]).addTo(mapa)
.openPopup();

L.marker([-23.58388, -46.673308]).addTo(mapa)
.openPopup();

L.marker([-23.59490, -46.663308]).addTo(mapa)
.openPopup();

