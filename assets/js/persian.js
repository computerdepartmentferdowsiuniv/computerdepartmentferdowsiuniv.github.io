document.addEventListener('DOMContentLoaded', function() {
    // اضافه کردن فونت
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/earlyaccess/bnazanin.css';
    document.head.appendChild(fontLink);
    
    // اعمال تغییرات
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'fa');
    document.body.classList.add('rtl-layout');
    
    // اعمال فونت به عناوین
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        heading.style.fontFamily = 'B Nazanin, Vazir, Tahoma, sans-serif';
        heading.style.direction = 'rtl';
        heading.style.textAlign = 'right';
        heading.style.fontWeight = 'bold';
    });
});