
/* Fungsi */
function formatRupiah(angka, prefix) {
    let number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

let inputPenawaran = document.getElementById('inputPenawaran');
inputPenawaran.addEventListener('keyup', function (e) {
    inputPenawaran.value = formatRupiah(this.value);
});



// Function untuk bid
function ubahPenawaran() {
    let inputPenawaran = document.getElementById('inputPenawaran').value;
    let penawaranTerakhir = document.getElementById('penawaranTerakhir');

    let harga = parseFloat(inputPenawaran.replace(/\./g, ''));
    let hasil;

    console.log(harga);
    console.log(typeof harga);

    if (harga % 50000 !== 0) {
        alert('Masukkan hanya angka dengan kelipatan 50.000');
        return;
    } else {
        hasil = harga.toLocaleString('id-ID');
        penawaranTerakhir.value = hasil;
    }
}