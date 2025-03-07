             // Kode JavaScript untuk menyembunyikan/menampilkan navbar saat scroll
             let prevScrollpos = window.pageYOffset;
             const navbar = document.querySelector(".navbar");
            
             window.onscroll = function() {
               let currentScrollPos = window.pageYOffset;
            
               if (prevScrollpos > currentScrollPos) {
                 navbar.style.top = "0";
               } else {
                 navbar.style.top = "-70px"; 
               }
               prevScrollpos = currentScrollPos;
             }
            
             // Kode JavaScript lainnya (scrollToTop)
             function scrollToTop() {
               window.scrollTo({ top: 0, behavior: "smooth" });
             }
             $('#summernote').summernote({
              placeholder: 'tulis karya anda disini...',
              tabsize: 2,
              height: 200,
              toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
              ]
            });