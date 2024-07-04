const testimonals = [
    {
        name: "Ali",
        photoUrl:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: " This is simply insane! I would be lost in it. The verybest thing is should explain you further. Not able to tell you how happy I am with Grapes."
    },
    {
        name: "Ahmad",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: " This is simply wonderfull! I would be lost in this banana. The verybest thing is should explain you further. Not able to tell you how happy I am with banana."
    },
    {
        name: "Azam",
        photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text: " This is simply insane! I would be lost in it. The verybest thing is should explain you further. Not able to tell you how happy I am with Grapes."
    }
]

const imgEl = document.querySelector("img");
const userName = document.querySelector(".username");
const textEl = document.querySelector(".text");

let i = 0;

updateTestimonals();

function updateTestimonals() {
    const {name, photoUrl, text} = testimonals[i];
    imgEl.src = photoUrl;
    userName.innerHTML = name;
    textEl.innerHTML = text;
    i++;
    if(i > testimonals.length) {
        i = 0;
    }
    setTimeout(() => {
        updateTestimonals();
    }, 5000)
}