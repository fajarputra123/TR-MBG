// =========================
// Fade Animation
// =========================

const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(
(entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });
},
{
    threshold: 0.15
});

faders.forEach(element => {
    observer.observe(element);
});

// =========================
// Navbar Shadow On Scroll
// =========================

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

});

// =========================
// Wishlist Button
// =========================

const wishBtn = document.querySelector('.wish-btn');

if (wishBtn) {

    wishBtn.addEventListener('click', () => {

        wishBtn.classList.toggle('active');

        const icon = wishBtn.querySelector('i');

        if (wishBtn.classList.contains('active')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }

    });

}

// =========================
// Add To Cart Toast
// =========================

const cartBtn = document.querySelector('.cart-btn');

if (cartBtn) {

    cartBtn.addEventListener('click', () => {

        const toast = document.createElement('div');

        toast.className = 'toast';

        toast.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            Buku berhasil ditambahkan ke keranjang
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show-toast');
        }, 100);

        setTimeout(() => {

            toast.classList.remove('show-toast');

            setTimeout(() => {
                toast.remove();
            }, 300);

        }, 2500);

    });

}

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});

// =========================
// Buy Button Animation
// =========================

const buyBtn = document.querySelector('.buy-btn');

if (buyBtn) {

    buyBtn.addEventListener('click', () => {

        buyBtn.innerHTML = `
            <i class="fa-solid fa-check"></i>
            Berhasil
        `;

        buyBtn.disabled = true;

        setTimeout(() => {

            buyBtn.innerHTML = `
                Beli Sekarang
            `;

            buyBtn.disabled = false;

        }, 2500);

    });

}