document.getElementById('removeFilter').addEventListener('click', function () {
    // Mengambil semua elemen checkbox
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Menonaktifkan semua checkbox
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
});
