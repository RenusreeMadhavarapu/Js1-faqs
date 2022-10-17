const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];



 //let accordianBody;
 //const faqs = [];


 faqData.forEach((item) => {

 const faqHeading = document.querySelector(".accordian_body");
 const questionSec = document.createElement("div")
 questionSec.className= "faq";
  const heading = document.createElement("div");
  heading.className ="faq_header"
  const question = document.createElement("h3");
 question.innerText=item.question;
  const btns = document.createElement("button");
  btns.className="show_btn";
 btns.innerText="+";
  const answer = document.createElement("p");
  answer.innerText=item.answer;
answer.style.display="none"
  heading.appendChild(question);
  heading.appendChild(btns);
  questionSec.appendChild(heading);
  faqHeading.appendChild(questionSec);
  questionSec.appendChild(answer);
 let hidden = true
   btns.addEventListener("click", () => {
      if(hidden){
        answer.style.display = "block"
       hidden = false        
     } else {
        answer.style.display = "none"
       hidden = true
     }
  })


})