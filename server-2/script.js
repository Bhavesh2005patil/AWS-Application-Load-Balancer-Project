// ===== Server Configuration =====
<<<<<<< HEAD
const SERVER_NAME = "CloudCafe Server 2";
=======
const SERVER_NAME = "CloudCafe Server 1";   // Change to Server 2 on second EC2
>>>>>>> 472c9ea004d4740cb6f887604513041090f7116e
const REGION = "ap-south-1";
const LOAD_BALANCER = "CloudCafe-ALB2";

// ===== Display Server Name =====
function showServer() {
    const response = document.getElementById("responseServer");

    response.innerHTML =
        `Request served by <strong>${SERVER_NAME}</strong>`;

    response.style.opacity = "0";

    setTimeout(() => {
        response.style.opacity = "1";
    }, 100);
}

// ===== Live Clock =====
function updateClock() {
    const clock = document.getElementById("clock");

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// ===== Footer Year =====
document.getElementById("footerYear").innerHTML =
    `© ${new Date().getFullYear()} CloudCafe AWS Dashboard`;

// ===== Animated Metrics =====
const metricCards = document.querySelectorAll(".metric-card");

metricCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {
        card.style.transition = "0.8s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 150);
});

// ===== Service Card Animation =====
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card, index) => {
    card.style.opacity = "0";

    setTimeout(() => {
        card.style.transition = "0.7s";
        card.style.opacity = "1";
    }, index * 120);
});

// ===== Fake Request Counter =====
let requests = 1000;

setInterval(() => {
    requests += Math.floor(Math.random() * 5);

    const counter = document.getElementById("requestCounter");

    if(counter){
        counter.innerHTML = requests;
    }
}, 3000);

// ===== Health Status Animation =====
setInterval(() => {
    const dot = document.querySelector(".status-dot");

    if(dot){
        dot.classList.toggle("active");
    }
}, 1000);

// ===== Welcome Message =====
window.onload = () => {
    console.log(`Dashboard Loaded Successfully on ${SERVER_NAME}`);
};

// ===== Keyboard Shortcut =====
document.addEventListener("keydown", function(event){

    if(event.key === "l"){
        showServer();
    }

});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });

    });

});