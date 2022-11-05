$(document).ready(function () {
  AOS.init();
  const eventswiper = document.querySelector(".swiper-wrapper");
  const event = [
    // eslint-disable-next-line linebreak-style
    {
      title: "Training WBS Software",
      image: "assets/images/event/hv1.jpg",
    },
    {
      title: "Training WBS Software",
      image: "assets/images/event/hv2.jpg",
    },
    { title: "Bank Interaction", 
      image: "assets/images/event/yp1.jpg" },
    {
      title: "31st CIT Anniversary प्रभातफेरी",
      image: "assets/images/event/prabhat31.jpg",
    },
    {
      title: "Leadership and Cyber Security Training",
      image: "assets/images/event/cs.jpg",
    },
    {
      title: "NSDCL 1st Anniversary",
      image: "assets/images/event/nsdcl1.jpg",
    },
    {
      title: "Constitutional Day 2076",
      image: "assets/images/event/sd.jpg",
    },
    {
      title: "CIT Family",
      image: "assets/images/event/CIT.png",
    },
{
      title: "Welcome and Farewell",
      image: "assets/images/event/welcome.jpg",
    },
{
      title: "Engineer Day 2079",
      image: "assets/images/event/engineerday2079.jpg",
    },
{
      title: "Engineer Day 2076",
      image: "assets/images/event/57enginneerday.jpg",
    },

{
      title: "Kantipur Half Marathon 2022",
      image: "assets/images/event/halfmarathon2022.jpg",
    },
{
      title: "Kantipur Half Marathon 2069",
      image: "assets/images/event/kantipurmarathon2069.jpg",
    },
{
      title: "AI Expo2019",
      image: "assets/images/event/AIexpo2019.jpg",
    },
{
      title: "Global Award Thailand",
      image: "assets/images/event/Awardthailand.jpg",
    },
{
      title: "Ride For a Cause",
      image: "assets/images/event/cancer.jpg",
    },
{
      title: "CIT Building Innaguration",
      image: "assets/images/event/citinnaguration.jpg",
    },
{
      title: "Clean Bagmati Campingn",
      image: "assets/images/event/cleanbagmati.jpg",
    },
{
      title: "Election 2074 team",
      image: "assets/images/event/election2072.jpg",
    },
{
      title: "Farewell Bhojpur",
      image: "assets/images/event/farewellbhojpur.jpg",
    },
{
      title: "PPL Pokhara",
      image: "assets/images/event/paraspkrppl.jpg",
    },
{
      title: "Pepsi Co Visit",
      image: "assets/images/event/pepsivisit.jpg",
    },
  ];
  // Filling the details from the object array event
  function fillData() {
    let output = "";
    for (let x = 0; x < event.length; x++) {
      output += `
    <div class="swiper-slide">
    <div class="img-container">
      <img src=${event[x].image} alt="" class="img-fluid" />
    </div>
    <div class="container arrow_contain">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="wrapper">
            <div class="content">
              <div class="title">
                <div class="text-wrapper">
                  <div class="text-inner">
                  ${event[x].title}
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div> 
          <!-- wraper freee -->
      </div>
    </div>
  </div>`;
    }
    eventswiper.innerHTML = output;
  }
  document.addEventListener("DOMContentLoaded", fillData());
  const parallaxSliderOptions = {
    speed: 1000,
    effect: "coverflow",
    autoplay: false,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      depth: 20,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    // parallax effect
    on: {
      init: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".img-container")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
              "data-swiper-paralalx-opacity": 0.5,
            });
        }
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      transitionEnd: function () {
        const swiper = this;
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      resize: function () {
        this.update();
      },
    },
    navigation: {
      nextEl: ".image-slider .next-ctrl",
      prevEl: ".image-slider .prev-ctrl",
    },
  };
  // initializing swiper
  const slider = new Swiper(".image-slider", parallaxSliderOptions);
});
