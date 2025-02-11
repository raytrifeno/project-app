 // Kode JavaScript untuk menyembunyikan/menampilkan navbar saat scroll
 let prevScrollpos = window.pageYOffset;
 const navbar = document.querySelector(".navbar");

 window.onscroll = function () {
   let currentScrollPos = window.pageYOffset;

   if (prevScrollpos > currentScrollPos) {
     navbar.style.top = "0";
   } else {
     navbar.style.top = "-70px";
   }
   prevScrollpos = currentScrollPos;
 };

 // Kode JavaScript lainnya (scrollToTop)
 function scrollToTop() {
   window.scrollTo({ top: 0, behavior: "smooth" });
 }

 const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenContent = document.getElementById('hiddenContent');

loadMoreBtn.addEventListener('click', () => {
if (hiddenContent.style.display === 'none') {
hiddenContent.style.display = 'block';
} else {
hiddenContent.style.display = 'none';
}
});