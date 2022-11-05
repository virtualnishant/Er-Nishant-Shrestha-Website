AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Insurance Surveyor (NIB-1418/078/079)",
    cardImage: "assets/images/education-page/nib.gif",
    moocLink: "https://nib.gov.np/wp-content/uploads/2022/08/%E0%A4%98-%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%97%E0%A4%95%E0%A5%8B-%E0%A4%B8%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A5%87%E0%A4%AF%E0%A4%B0-%E0%A4%A8%E0%A4%B5%E0%A5%80%E0%A4%95%E0%A4%B0%E0%A4%A3-%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%B0%E0%A4%A3.pdf",
  },
  {
    title: "Skill Test Assesor (NSTB-6305)",
    cardImage: "assets/images/education-page/nstb.jpg",
    moocLink: "assets/images/education-page/nstb-skill-test-assesor-card.jpg",
  },
  {
    title: "Registered Engineer ('6904 A' Elex & Comm)",
    cardImage: "assets/images/education-page/nec.png",
    moocLink: "https://nec.gov.np/applicant/detailview/107728",
  },
  {
    title: "MTA (Networking Fundamentals 98-366)",
    cardImage: "assets/images/education-page/mta.jpg",
    moocLink: "assets/images/education-page/mta.png",
  },
  {
    title: "Cyber Security",
    cardImage: "assets/images/education-page/eway.png",
    moocLink: "assets/images/education-page/cybersecurity.png",
  },
  {
    title: "Cyber Security and Cyber Space",
    cardImage: "assets/images/education-page/oxford.jpg",
    moocLink: "assets/images/education-page/webminaroncybersecurity.jpg",
  },
  {
    title: "CCNA",
    cardImage: "assets/images/education-page/cp.jpg",
    moocLink: "assets/images/education-page/CCNA.png",
  },
  {
    title: "Occupational Safety and Health Enhancement Training",
    cardImage: "assets/images/education-page/oshp.png",
    moocLink: "assets/images/education-page/OSHP_Page_1.png",
  },
  {
    title: "VMware vSphere 7 (Install, Configure, Manage)",
    cardImage: "assets/images/education-page/vsphere-7.png",
    moocLink:
      "https://www.labanepal.com/",
  },
  {
    title: "English Language Proficiency 'B'",
    cardImage: "assets/images/education-page/english.jpg",
    moocLink: "https://www.bishwobhasa.edu.np/",
  },
  {
    title: "XML-AJAX",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink:
      "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
