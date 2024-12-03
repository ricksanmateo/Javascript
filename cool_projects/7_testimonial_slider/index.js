const testimonials = [
  {
    name: "John Doe",
    photoUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "This is simply unbelievable! I would be lost without apple. The very best. Not able to tell you how happy I am with Apple",
  },
  {
    name: "Jane Doe",
    photoUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "This is simply unbelievable! I would be lost without apple. The very best. Not able to tell you how happy I am with Apple",
  },
  {
    name: "Josh Doe",
    photoUrl:
      "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2363&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    review:
      "This is simply unbelievable! I would be lost without apple. The very best. Not able to tell you how happy I am with Apple",
  },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;
updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, review } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = review;
  usernameEl.innerText = name;
  idx = (idx + 1) % testimonials.length;
  setTimeout(updateTestimonial, 2000);
}
