



// الحصول على الزر
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// إضافة حدث للتمرير
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block"; // إظهار الزر عند التمرير للأسفل
  } else {
    scrollToTopBtn.style.display = "none"; // إخفاء الزر عندما تكون في أعلى الصفحة
  }
};

// إضافة حدث للضغط على الزر
scrollToTopBtn.onclick = function() {
  // العودة إلى أعلى الصفحة عند الضغط على الزر
  document.body.scrollTop = 0; // لمتصفح Safari
  document.documentElement.scrollTop = 0; // لبقية المتصفحات
}



// إضافة حدث التمرير للكشف عن العناصر عند التمرير
window.addEventListener('scroll', function() {
    // نبحث عن جميع العناصر التي تحتوي على الكلاس 'card'
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(function(card) {
      // إذا كان العنصر ضمن نطاق الرؤية
      if (card.getBoundingClientRect().top < window.innerHeight) {
        card.classList.add('visible');
      }
    });
  });
  