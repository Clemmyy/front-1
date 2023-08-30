hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

const animate1 = (word) => {
    word.classList.add("animate")
    console.log(word)
}

const animateAll = (animate) => {
    let word = document.querySelectorAll(".word")

    setTimeout( () => {
        animate(word[0])
        setTimeout( () => {
            animate(word[1])
        }, 1000)
    }, 1000)
}

animateAll(animate1)