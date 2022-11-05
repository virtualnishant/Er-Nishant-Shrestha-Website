AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior Computer Operator",
    cardImage: "assets/images/experience-page/ecn.jpg",
    place: "Election Commission Nepal, Kathmandu",
    time: "(Aug, 22 - present)",
    desp: "<li>Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  },
  {
    title: "Senior Computer Operator",
    cardImage: "assets/images/experience-page/cit.png",
    place: "Citizen Investment Trust",
    time: "(Jul, 18 - Oct, 22)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Senior Assistant",
    cardImage: "assets/images/experience-page/nsdc.png",
    place: "Nagarik Stock Dealer Company Limited",
    time: "(Jun, 20 - Apr, 21)",
    desp: "<li>Overall operation and account management</li><li>Installing TMS and SDSS</li>",
  },
{
    title: "Associate Information Technology",
    cardImage: "assets/images/experience-page/nabil.png",
    place: "Nabil Investment Banking Limited",
    time: "(Nov, 17 - Jul, 18)",
    desp: "<li>Maintain inventory of ICT equipment, hardware, and software and ensure adequate supply and functionality, in collaboration with relevant staff, provide input to budget for ICT related expenses.</li><li>Supervision and management IT including user management, system security and enhancement, new services, data backup, software supports.</li><li>Regularly conduct training and briefing regarding the operating the equipment and software.</li>",
  },
{
    title: "Network/System Support Person ",
    cardImage: "assets/images/experience-page/sc.png",
    place: "SUPREME COURT OF NEPAL",
    time: "(Feb, 16 - Nov, 17)",
    desp: "<li>Overall IT administration and management of System and Network Infrastructure of Court</li><li>Computer, Printer and Ehajiri, Court Application, (CMS,Melmilap,Online Myad/Tarekh) support to Court administration and staffs as and when required.</li><li>Monitor and ensure smooth running of all IT equipment including CCTV, Video conferencing Camera, TV Display, Scanner, Photocopy Machine, FAX etc.</li><li>Planning for purchase of computers and parts, quotation collection, supplier selection and advising to management for fixing economical purchase terms.</li>",
  },
{
    title: "Support Engineer ",
    cardImage: "assets/images/experience-page/subisu.jpg",
    place: "Subisu Cable Net, Baluwatar",
    time: "(Nov, 14 - Sep, 15 )",
    desp: "<li>Provide Phone Support to the client and solve the technical issue</li><li>Make sure the internet is working smoothly</li><li>Configure the router and install the modem</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  ];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "TFN Walkathon",
    subtitle: "Fund Raiser",
    image: "assets/images/experience-page/tfn.jpg",
    desp: "TFN Walkathon was a charity event organized to raise awareness of education inequity in Nepal and resources required to support the work of Teach For Nepal. TFN Walkathon was a 5 kilometre walk organised to express solidarity with thousands of public school students who walk hours just to attend a school.I participated the event and raised fund to support the work of Teach for Nepal.",
  },
  {
    title: "Blood Donation",
    subtitle: "Organiser and Blood Donator",
    image: "assets/images/experience-page/Blood-donation.jpg",
    desp: "Blood Donation program was organised successfully in the premises of Advanced College of Engineering and Management on 2068/04/03 and also donated the blood.",
  },
  {
    title: "Local Level Election 2074",
    subtitle: "Assistant Polling Officer",
    image: "assets/images/experience-page/polling.png",
    desp: "Conducted Nepal local elections, 2017 at Makwanpur, Thaha Nagarpalika, Sunulo Mavi Matdan Kendra Kha(सुनोला मा वि मतदान केन्द्र क)",
  },
  {
    title: "Public Service Commission",
    subtitle: "Inviligator",
    image: "assets/images/experience-page/psc.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "Acme College of Engineering",
    subtitle: "External Examiner",
    image: "assets/images/experience-page/acme.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "30th CIT Anniversary Table Tennis Organiser",
    subtitle: "Judge/Umpire",
    image: "assets/images/experience-page/table-tennis-table1.jpeg",
    desp: "नागरिक लगानी कोषको ३०‌औं वार्षिकोत्सवको अवसरमा आयोजित टेवल टेनिस प्रतियोगितामा निर्णायक।एम्पायर भई कार्यक्रमलाई सफल पार्न भुमिका खेलेको।",
  },
{
    title: "30th CIT Anniversary Table Tennis Event",
    subtitle: "Third Position",
    image: "assets/images/experience-page/table-tennis-table.jpeg",
    desp: "नागरिक लगानी कोषको ३०‌औं वार्षिकोत्सवको अवसरमा आयोजित टेवल टेनिस प्रतियोगितामा तृतीय भएको।",
  },
  {
    title: "31st CIT Anniversary ",
    subtitle: "Second Position",
    image: "assets/images/experience-page/hajir.jpeg",
    desp: "नागरिक लगानी कोषको ३१‌औं वार्षिकोत्सवको अवसरमा आयोजित हाजिरी जवाफ प्रतियोगितामा द्वितीय भएको।",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
