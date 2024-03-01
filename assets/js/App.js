//==========================================navbar====================================
function opennav() {
  document.getElementById("navbar").classList.toggle("end-0");
  document.body.classList.toggle('overflow_hidden');
  document.getElementById("menubtn-icon").classList.toggle("cross");
}
// <!-- ==================Buy trending furniture Products============================== -->
$('.buyslider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 800,
  autoplaySpeed: 600,
  autoplay: true,
  prevArrow: ".prev_btn",
  nextArrow: ".next_btn",
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.01,
        slidesToScroll: 1
      }
    }
  ]
});
// <!-- ===========================Latest Deal============================== -->
$('.latestdeals').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  prevArrow: ".deal_prev_btn",
  nextArrow: ".deal_next_btn",
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//  =====================================Testimonial=======================================
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.testimonaial'
});
$('.testimonaial').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: 0,
  focusOnSelect: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
  ]
});
// =====================================our products cards======================================
const cardData = [
  { Image: "./assets/images/png/Sofa1.png" },
  { Image: "./assets/images/png/Sofa2.png" },
  { Image: "./assets/images/png/Sofa3.png" },
  { Image: "./assets/images/png/Sofa4.png" },
  { Image: "./assets/images/png/Sofa5.png" },
  { Image: "./assets/images/png/Sofa6.png" },
];
const generateCards = (data) => {
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = data.map(item => `
      <div class="col-xl-4 col-md-6 col-12 mb-xl-5 mb-md-4 mb-3" data-aos="zoom-in">
      <div class="our_product_card overflow-hidden duration cursor_pointer">
      <img src=${item.Image} alt="Sofa" class="w-100 duration">
      <div class="d-flex justify-content-between align-items-center my-3 pt-1 ">
          <h4 class="ff_poppins fw-medium fs_md lh_150 text-black mb-0">Single Sofa</h4>
          <img src="./assets/images/png/star_img.png" alt="star_img" class="max_w_98 w-100">
      </div>
      <p class="ff_poppins fw-normal fs_8sm text_darkgray mb-3 pb-1">Lorem ipsum dolor </p>
      <div class="d-flex align-items-center justify-content-between">
          <p class="ff_poppins fw-semibold fs_8md lh_150 mb-0"><span>₹ </span>1200.00</p>
          <a href="#" class="card_btn ff_poppins fw-semibold fs_md text-white d-inline-block duration">ADD TO
              CART</a>
      </div>

  </div>
      </div>
    `).join('');
};
generateCards(cardData);
// =======================================Festival-Offers===================================
const dealData = [
  { Image: "./assets/images/webp/Festival1.webp" },
  { Image: "./assets/images/webp/Festival2.webp" }
];
const createCards = (data) => {
  const cards = document.getElementById('cards');
  cards.innerHTML = data.map(item => `
  <div class="col-lg-6" data-aos="zoom-in">
  <div class="pb-lg-5 py-4 bg_img" style="background-image: url(${item.Image}">
  <div class="mt-sm-2 mb-xxl-4 d-flex">
  <div class="heading_line my-3 ms-1"></div>
  <div>
  <h2
  class="text-black ff_poppins fw-normal fs_md lh_150 mb-xl-3 pb-1 mb-sm-2 mb-0">
  Festival Offer
</h2>
<h3 class="text_primary ff_poppins fw-bold fs_5lg lh_150 max_w_436 mb-md-3 mb-0">Upto 40% Off</h3>
<p class="ff_poppins fw-normal fs_8sm text_darkgray mb-md-4 mb-3 pb-sm-3 max_w_266">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
<a href="#" class="card_btn ff_poppins fw-semibold fs_md text-white d-inline-block duration">ADD
  TO
  CART</a></div></div>
    

  </div>
</div>
    `).join('');
};
createCards(dealData);
// ===================================DEFINE-SCRIPT-YEAR ================================ */
const d = new Date();
document.getElementById("year_change").innerHTML = d.getFullYear();
// ===============================DEFINE AOS LINK=========================================== */
AOS.init({
  duration: 1000,
  once: true,
});
// ===================================BACK TO TOP=============================================
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
});
// =========================================preloader==========================================
setTimeout(() => {
  document.getElementById("preloader").classList.add("opacity_0")
  document.getElementById("preloader").classList.add("pointer_event_none")
  document.body.classList.remove("overflow-hidden")
  window.scrollTo(0, 0);
}, 4000);
