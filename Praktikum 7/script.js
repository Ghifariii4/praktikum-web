function updateClock() {
    let now = new Date();
    let days = now.getDate().toString().padStart(2, '0');
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Perbarui jam setiap detik
setInterval(updateClock, 1000);

// Tampilkan waktu saat halaman pertama kali dimuat
updateClock();