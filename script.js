document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');
    const pencilOption = document.getElementById('pencil-option');
    const eraserOption = document.getElementById('eraser-option');
    const penOption = document.getElementById('pen-option');
    const seventwentyp = document.getElementById('seven-option');
    const thousandeighty = document.getElementById('eight-option');
    const imageDisplay = document.getElementById('image-display');
    const imageContainer = document.querySelector('.image-container');

    dropdownButton.addEventListener('click', function () {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (event.target !== dropdownButton && event.target !== dropdownContent) {
            dropdownContent.style.display = 'none';
        }
    });

    pencilOption.addEventListener('click', function (event) {
        event.preventDefault();
        displayImage('144p.png');
    });

    eraserOption.addEventListener('click', function (event) {
        event.preventDefault();
        displayImage('480p.png');
    });

    penOption.addEventListener('click', function (event) {
        event.preventDefault();
        displayImage('720p.png');
    });
    seventwentyp.addEventListener('click', function (event) {
        event.preventDefault();
        displayImage('1080p.png');
    });
    thousandeighty.addEventListener('click', function (event) {
        event.preventDefault();
        displayImage('New-file (4).gif');
    });

    function displayImage(imageSrc) {
        imageDisplay.src = imageSrc;
        imageContainer.style.display = 'block';
    }
});
