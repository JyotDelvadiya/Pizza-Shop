const navLinks = document.querySelectorAll('.c-side');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');

            const normalIcon = navLink.querySelector('.normal-icon');
            const activeIcon = navLink.querySelector('.active-icon');

            if (normalIcon && activeIcon) {
                normalIcon.style.display = 'inline-block';
                activeIcon.style.display = 'none';
            }
        });

        this.classList.add('active');

        const normalIcon = this.querySelector('.normal-icon');
        const activeIcon = this.querySelector('.active-icon');

        if (normalIcon && activeIcon) {
            normalIcon.style.display = 'none';
            activeIcon.style.display = 'inline-block';
        }
    });
});

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const offcanvas = document.querySelector('.offcanvas');
    
    if (window.innerWidth < 991) {
        // sidebar.classList.toggle('d-block');
        offcanvas.classList.toggle('show');
        // sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    }
}

function toggleMenuForBigScreen(){
    const offcanvas = document.querySelector('.offcanvas');

    if (window.innerWidth > 991) {
        offcanvas.classList.add('show');
    }
}


window.addEventListener('resize', function(event){
    const offcanvas = document.querySelector('.offcanvas');

    if (window.innerWidth > 991) {
        offcanvas.classList.add('show');
    }
    else{
        offcanvas.classList.remove('show');
    }
  });