// Menambahkan respon ketika tombol diklik
const tombol = document.getElementById('btnSapa');

tombol.addEventListener('click', () => {
    alert('Halo! Terima kasih sudah mengunjungi website sekolah kami.');
});
// Fitur Buku Tamu
const formBukuTamu = document.getElementById('formBukuTamu');
const daftarPesan = document.getElementById('daftarPesan');

// Fungsi untuk menampilkan pesan
function tampilkanPesan() {
    daftarPesan.innerHTML = '';
    const dataPesan = JSON.parse(localStorage.getItem('bukuTamu')) || [];

    dataPesan.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('pesan-item');
        div.innerHTML = `<strong>${item.nama}</strong><p>${item.pesan}</p>`;
        daftarPesan.appendChild(div);
    });
}

// Jalankan saat formulir dikirim
if (formBukuTamu) {
    formBukuTamu.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const pesan = document.getElementById('pesan').value;

        const dataPesan = JSON.parse(localStorage.getItem('bukuTamu')) || [];
        dataPesan.push({ nama, pesan });

        localStorage.setItem('bukuTamu', JSON.stringify(dataPesan));

        formBukuTamu.reset();
        tampilkanPesan();
    });

    tampilkanPesan();
}