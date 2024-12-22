// 1. Notifikasi Jadwal Kegiatan
function requestNotificationPermission() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                alert("Notifikasi diaktifkan!");
            }
        });
    }
}

function showNotification(title, message) {
    if (Notification.permission === "granted") {
        new Notification(title, { body: message });
    } else {
        alert("Izinkan notifikasi agar kami bisa mengirimkan pembaruan.");
    }
}

// 2. Fitur Donasi Digital
function donate() {
    alert("Terima kasih atas niat baik Anda! Segera lakukan donasi melalui platform pembayaran pilihan.");
    // Anda dapat menambahkan tombol atau redirect ke platform donasi di sini
}

// 3. Sistem Rating dan Ulasan Lokal
let reviews = [];

function submitReview() {
    const review = document.getElementById('reviewText').value.trim();
    if (review) {
        reviews.push(review);
        alert('Ulasan Anda berhasil disubmit!');
        displayReviews();
    } else {
        alert('Tulis ulasan terlebih dahulu!');
    }
}

function displayReviews() {
    const reviewList = document.createElement('ul');
    reviews.forEach((review, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Review ${index + 1}: ${review}`;
        reviewList.appendChild(listItem);
    });
    const savedLocations = document.getElementById('savedLocations');
    savedLocations.innerHTML = ""; // Reset existing reviews
    savedLocations.appendChild(reviewList);
}

// 4. Navigasi dan Rekomendasi Rute Ibadah
function getDirections() {
    const currentLocation = [-6.6736, 111.0416]; // Contoh: Lokasi pengguna, ganti dengan koordinat pengguna
    const destination = [
        parseFloat(document.getElementById('detailLatitude').textContent),
        parseFloat(document.getElementById('detailLongitude').textContent)
    ];

    // Pastikan map sudah terinisialisasi
    if (typeof L !== "undefined" && L.Routing) {
        const map = L.map('map').setView(currentLocation, 13); // Ganti dengan ID elemen peta yang sesuai
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        // Menambahkan rute dari lokasi saat ini ke tujuan
        L.Routing.control({
            waypoints: [
                L.latLng(currentLocation),
                L.latLng(destination)
            ]
        }).addTo(map);
    } else {
        alert("Peta tidak tersedia.");
    }
}

// 5. Informasi Keunikan Tempat Ibadah
function showUniqueInfo() {
    alert("Tempat Ibadah ini memiliki desain arsitektur unik dengan atap berbentuk kubah emas.");
}

// 6. Peta Offline
function downloadOfflineMap() {
    alert("Peta offline berhasil diunduh! Anda bisa mengaksesnya kapan saja tanpa koneksi internet.");
    // Logika pengunduhan peta offline bisa ditambahkan di sini
}

// 7. Kolaborasi Komunitas Lokal
function submitCollaboration() {
    const suggestion = document.getElementById('communityCollaboration').value.trim();
    if (suggestion) {
        alert('Terima kasih atas kolaborasi Anda!');
        // Anda bisa menambahkan kode untuk menyimpan saran atau menampilkannya dalam daftar
    } else {
        alert('Masukkan kegiatan atau saran terlebih dahulu!');
    }
}

// Event listeners untuk setiap fitur
document.getElementById('notifJadwalKegiatan').addEventListener('click', function () {
    showNotification("Jadwal Kegiatan Baru", "Ada kegiatan baru di Masjid Al-Ikhlas besok pukul 08:00!");
});

document.getElementById('donasiDigital').addEventListener('click', donate);
document.getElementById('submitReview').addEventListener('click', submitReview);
document.getElementById('getDirections').addEventListener('click', getDirections);
document.getElementById('uniqueInfo').addEventListener('click', showUniqueInfo);
document.getElementById('downloadOfflineMap').addEventListener('click', downloadOfflineMap);
document.getElementById('submitCollaboration').addEventListener('click', submitCollaboration);

// Request permission for notifications when page loads
window.onload = function() {
    requestNotificationPermission();
};
