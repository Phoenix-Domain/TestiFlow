const clientName = document.querySelector('#clientName');
const clientFeedback = document.querySelector('#clientFeedback');
const clientRole = document.querySelector('#clientRole');
const getTestimonialBtn = document.querySelector('#getTestimonialBtn');
const card = document.querySelector('.card');

const testimonials = [
  {
    name: "Sarah Okafor",
    role: "CEO, Luxe Interiors",
    feedback: "Working with Phoenix Domain was the best business decision we've made."
  },
  {
    name: "Daniel M.",
    role: "Head of Marketing, DigitalGrow",
    feedback: "They turned our old site into a conversion machine. Sales are up 40%!"
  },
  {
    name: "Boma T.",
    role: "Founder, ArtisanHaven",
    feedback: "I was skeptical about redesigning, but Phoenix Domain blew me away."
  },
  {
    name: "Chinedu A.",
    role: "CTO, FinEdge",
    feedback: "Their technical expertise and support are unmatched. Highly recommended."
  },
  {
    name: "Linda E.",
    role: "Operations Manager, QuickServe",
    feedback: "Phoenix Domain delivered on time and exceeded our expectations."
  },
  {
    name: "Tolu F.",
    role: "Product Lead, EduSpark",
    feedback: "Our platform is faster and more user-friendly thanks to their team."
  },
  {
    name: "Grace I.",
    role: "Marketing Director, FreshFoods",
    feedback: "Professional, creative, and reliable. We love our new website!"
  }
];

getTestimonialBtn.addEventListener('click', e => {
  e.preventDefault();
  
  getTestimonial();

  addFadeInUpAnimation();

})

let lastIndex = -1; //To be used in the getTestimonial function

const getTestimonial = () => {
  let randomIndex;
  do{
     randomIndex = Math.floor(Math.random() * (testimonials.length));
  } while (randomIndex === lastIndex)
 
lastIndex = randomIndex;

  const clientObject = testimonials[randomIndex];

  
    clientName.textContent = clientObject.name;

    clientFeedback.textContent = clientObject.feedback;

    clientRole.textContent = clientObject.role;
}

const addFadeInUpAnimation = () => {
  card.classList.remove('fadeInUp');
  void card.offsetWidth;
  card.classList.add('fadeInUp');
}
