document.addEventListener('DOMContentLoaded', () => {
    const dropdownSelected = document.querySelector('.dropdown-selected');
    const dropdownOptions = document.querySelector('.dropdown-options');
    const selectedText = dropdownSelected.querySelector('span');
    const options = dropdownOptions.querySelectorAll('li');

    // Toggle menu saat div dropdown diklik
    dropdownSelected.addEventListener('click', () => {
        dropdownOptions.classList.toggle('show');
    });

    // Ubah teks saat opsi diklik
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Ubah teks di dalam span sesuai dengan li yang diklik
            selectedText.textContent = this.textContent;
            
            // Hapus class active dari semua li
            options.forEach(opt => opt.classList.remove('active'));
            // Tambahkan class active ke li yang baru dipilih
            this.classList.add('active');

            // Tutup dropdown
            dropdownOptions.classList.remove('show');
        });
    });

    // Tutup dropdown jika user klik di luar area dropdown
    document.addEventListener('click', (e) => {
        if (!dropdownSelected.contains(e.target) && !dropdownOptions.contains(e.target)) {
            dropdownOptions.classList.remove('show');
        }
    });
});