

const testimonials = document.querySelectorAll(".testimonial");

let index = 0;

function showSlider() {

    testimonials.forEach((testimonial) => {

        testimonial.classList.remove("active");

    });

    testimonials[index].classList.add("active");

    index++;

    if(index >= testimonials.length) {

        index = 0;
    }
}

showSlider();

setInterval(showSlider, 2000);