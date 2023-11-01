window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0) {
        navbar.style.backgroundColor = '#fff'; // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

var menuItems = document.querySelectorAll('#navbar a');

menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.style.fontWeight = 'bold'; // Change font weight when hovered
    });

    item.addEventListener('mouseout', function() {
        this.style.fontWeight = 'normal';
    });
});