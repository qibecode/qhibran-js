const tombol = document.querySelector('.btn');
const judul = document.querySelector('h1');

tombol.addEventListener('click', () => {
    judul.textContent = "Teks Berhasil Diubah dengan JS!";
});