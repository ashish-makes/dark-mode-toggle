const drk = document.querySelector("#light-dark-mode")

// const themeToggle = () => {
//     drk.classList.toggle("bi-brightness-high");

//     if (drk.classList.contains("bi-brightness-high")) {
//         document.body.classList.add(".dark");
//     } else {
//         document.body.classList.remove(".dark");
//     }
// };

const themeToggle = () => {
    drk.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
};

drk.addEventListener("click", themeToggle);
