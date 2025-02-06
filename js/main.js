const topButtons = document.querySelectorAll('.main-link');
const bottomMenus = {
    'products-btn': document.getElementById('products-menu'),
    'services-btn': document.getElementById('services-menu'),
    'company-btn': document.getElementById('company-menu')
};

// Функция для управления меню
topButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        
        const menuId = this.id;
        const menuToToggle = bottomMenus[menuId];

        // Если кликнули на активную кнопку, скрываем меню
        if (this.classList.contains('hover-enabled')) {
            this.classList.remove('hover-enabled');
            menuToToggle.classList.remove('active');
        } else {
            // Сначала закрываем все меню и сбрасываем `hover`
            topButtons.forEach(btn => btn.classList.remove('hover-enabled'));
            Object.values(bottomMenus).forEach(menu => menu.classList.remove('active'));

            // Активируем нужное меню
            this.classList.add('hover-enabled');
            menuToToggle.classList.add('active');
        }
    });
});



// ФОРМА
document.addEventListener("DOMContentLoaded", function () {
    const openFormBtn = document.querySelector(".contact-button");
    const closeFormBtn = document.getElementById("closeForm");
    const contactForm = document.getElementById("contactForm");

    openFormBtn.addEventListener("click", function () {
        contactForm.style.display = "flex";
    });

    closeFormBtn.addEventListener("click", function () {
        contactForm.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === contactForm) {
            contactForm.style.display = "none";
        }
    });
});




// МОБИЛЬНАЯ НАВИГАЦИЯ 
 document.querySelector(".menu-button-mobile").addEventListener("click", function() {
        document.getElementById("mobileNav").style.display = "flex";
    });

    document.getElementById("closeNav").addEventListener("click", function() {
        document.getElementById("mobileNav").style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === document.getElementById("mobileNav")) {
            document.getElementById("mobileNav").style.display = "none";
        }
    });