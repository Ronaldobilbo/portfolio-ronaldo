var app = document.getElementById('typewriter');
  
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });
  
    typewriter
      .typeString('Informatics Engineering Student')
      .pauseFor(3500)
      .deleteAll()
      .typeString('WEB DEVELOPER')
      .pauseFor(3500)
      .start();
      

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

document.addEventListener('keydown', function(event) {
    if(event.key === "Escape" && !navMenu.classList.contains('hidden')) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section"); 
  
    function updateActiveLink() {
      const currentPath = window.location.hash || '#home';
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  
    // Fungsi untuk memperbarui link aktif berdasarkan scroll
    function updateActiveLinkOnScroll() {
      let currentSection = ''; // Menyimpan id dari section yang terlihat
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        // Cek apakah bagian tersebut sedang dalam viewport
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });
  
      // Perbarui kelas active pada nav-link
      navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  
    // Panggil fungsi saat halaman dimuat
    updateActiveLink();
  
    // Panggil fungsi ketika pengguna mengganti URL dengan hash baru
    window.addEventListener("hashchange", updateActiveLink);
  
    // Panggil fungsi saat pengguna scroll halaman
    window.addEventListener("scroll", updateActiveLinkOnScroll);
  });

  const galleryContainer = document.getElementById('galleryContainer');
  const leftArrow = document.getElementById('leftarrow');
  const rightArrow = document.getElementById('rightArrow');
  
  leftArrow.addEventListener('click', () =>  {
      galleryContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
  });

  rightArrow.addEventListener('click', () => {
    galleryContainer.scrollBy({
        left: 300, 
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function() {
  let currentContent = 1;
  const totalContents = 4;

  // Ambil elemen konten
  const contents = [
      document.getElementById('content1'),
      document.getElementById('content2'),
      document.getElementById('content3'),
      document.getElementById('content4')
  ];

  // Ambil tombol navigasi
  const nextBtn = document.getElementById('nextBtn');
  const backBtn = document.getElementById('backBtn');

  function updateContent() {
      // Loop melalui konten dan atur tampilannya
      contents.forEach((content, index) => {
          if (index === currentContent - 1) {
              content.classList.add('active');
              content.classList.remove('hidden');
          } else {
              content.classList.remove('active');
              content.classList.add('hidden');
          }
      });

      // Atur status tombol
      backBtn.disabled = currentContent === 1;
      nextBtn.disabled = currentContent === totalContents;
  }

  // Event listener untuk tombol 'Next'
  nextBtn.addEventListener('click', function() {
      if (currentContent < totalContents) {
          currentContent++;
          updateContent();
      }
  });

  // Event listener untuk tombol 'Back'
  backBtn.addEventListener('click', function() {
      if (currentContent > 1) {
          currentContent--;
          updateContent();
      }
  });

    // Inisialisasi tampilan awal
    updateContent();
  });

  var modalTriggers = document.querySelectorAll('.content-modal');

// Loop melalui semua modal trigger
modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        var modalId = this.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

// Tutup modal saat klik 'X' atau di luar modal
var modals = document.querySelectorAll('.modal');
modals.forEach(function(modal) {
    var span = modal.querySelector('.close');
    
    // Tutup modal saat klik tombol 'X'
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Tutup modal saat klik di luar modal
    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    };

    // Tutup modal saat tekan tombol "Esc"
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});

  const darkToggle = document.querySelector('#dark-toggle');
  const html = document.querySelector('html');

  darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
      html.classList.add('dark');
    }
    else {
      html.classList.remove('dark');
    }
  });

/*
document.getElementById('reelDownloadForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const url = document.getElementById('reelUrl').value;
  const resultDiv = document.getElementById('downloadResult');
  resultDiv.innerHTML = 'Processing...';

  try {
      const response = await axios.post("https://api.cobalt.tools", {
          filenameStyle: "nerdy",
          url: url,
          videoQuality: "max"
      }, {
          headers: {
              origin: "https://cobalt.tools",
              referer: "https://cobalt.tools/"
          }
      });

      if (response.data && response.data.url) {
          resultDiv.innerHTML = `<a href="${response.data.url}" target="_blank" class="text-primary hover:underline">Download Reel</a>`;
      } else {
          resultDiv.innerHTML = 'Unable to process the reel. Please try again.';
      }
  } catch (error) {
      console.error('Error:', error);
      resultDiv.innerHTML = 'An error occurred. Please try again later.';
  }
});
*/