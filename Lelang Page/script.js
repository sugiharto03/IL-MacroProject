
// HAPUS SEMUA FILTER
document.getElementById('removeFilter').addEventListener('click', function () {
    // Mengambil semua elemen checkbox
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let inputFirstPrice = document.getElementById('firstPrice');
    let inputSecondPrice = document.getElementById('secondPrice');

    // Menonaktifkan semua checkbox
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    inputFirstPrice.value = "";
    inputSecondPrice.value = "";
});


// Hapus Isi Search Bar
function resetSearch(event) {
    if (event.keyCode == 13) {
        let searchBar = document.getElementById('searchBar');

        searchBar.value = "";
    }
}


// Ganti Dropdown Filter
function changeHighlight(clickedElement) {
    let text = clickedElement.innerText;

    document.getElementById('highlight-text').innerText = text;
}