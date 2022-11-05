/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Umesh Paneru",
        designation1 : "Deputy Director (IT), Citizen Investment Trust",
        image1: "https://nlk.org.np/assets/uploads/images/teammembers/UmeshPaneru_PP.jpg",
        message1 : "John is a conscientious individual whom I mentored during JWOC'2021. His problem-solving skills and a keen interest in learning new skillsets are remarkable. His hardworking nature and team-building abilities make him different from others.",
        

        sl2:2,
        name2 : "Maheswor Lal Shrestha",
        designation2 : "CEO, Nagarik Stock Dealer Company Limited", 
        image2: "http://nagariksd.com.np/Areas/Company/Uploads/Team/ThumbNail/Small/3c633f65-6fc9-42c8-8355-d2b66c9ceba2.JPG",
        message2 : "John has the best grasping skills I have seen in a new developer. I got to know him through GSSOC'2021 when I mentored him, and he made an exceptional growth during the competition. He made some incredible contributions and has good experience with Open Source.",
        
        
    },

    {
        sl1:3,
        name1 : "Sachindra Dhungana",
        designation1 : "Deputy General Manager, NIBL Capital Markets Limited",
        image1 : "https://www.niblcapital.com/wp-content/uploads/2020/12/Sachindra-Dhunagana.jpg?x93368",
        message1 : "John and I have worked on several projects. Apart from technical skills, he also has good soft skills. He has good experience with debugging and has excellent leadership qualities.",
        

        sl2:4,
        name2 : "Krishna Prasad Paudel",
        designation2 : "IT Director, Supreme Court of Nepal",
        image2 : "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/117386613_1697409930435187_3639605524317510003_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GQRzoJJ1ttQAX_VIcsm&_nc_ht=scontent.fktm3-1.fna&oh=00_AT9s-b1UwzELAhH57JCjFhN4Xvs7Un9xL3XC9MS_eSwOvA&oe=63779603",
        message2 : "John and I worked together during a hackathon and the thing that surprised me the most about him was his knowledge of fundamentals. He offered sincere help to the team throughout the competition. He is an impressive problem solver who is able to address complex issues strategically and confidently.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
