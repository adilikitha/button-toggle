document.getElementById('toggleButton').addEventListener('click', function() {
    var button = this;
    var container = document.getElementById('container');
    var text = document.getElementById('text');
    
    button.classList.toggle('toggled');
    container.classList.toggle('toggled');
    
    if (button.classList.contains('toggled')) {
        button.textContent = "Reset";
        text.textContent = "Text and Color Changed!";
    } else {
        button.textContent = "Click Me";
        text.textContent = "This is some text.";
    }
});
