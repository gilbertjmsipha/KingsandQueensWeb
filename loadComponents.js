document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('https://github.com/gilbertjmsipha/KingsandQueensWeb/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });

    // Load footer
    fetch('./footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        });
});
