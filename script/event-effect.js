const imageContainer = document.querySelector(".img-container")
const socialContainer = document.querySelector(".social-container")
const hoverArea = document.querySelector(".img-info-container")
imageContainer.style.transition = ".5s all cubic-bezier(0,1.19,1,.98)"
socialContainer.style.transition = ".5s all cubic-bezier(0,1.19,1,.98)"
imageContainer.style.padding = "-100px"
imageContainer.style.background = "var(--bg-color)"
socialContainer.style.background = "var(--bg-color)"

let onHover = false



function hoverEffect() {
    imageContainer.style.padding = "0px 0px 0px 25px"
    socialContainer.style.paddingLeft = "200px"
    socialContainer.style.paddingRight = "30px"
    socialContainer.style.background = "rgb(64, 68, 105)"
    imageContainer.style.background = "rgb(64, 68, 105)"
}

function unHoverEffect() {
    imageContainer.style.padding = "0"
    socialContainer.style.paddingLeft = "0"
    socialContainer.style.background = "var(--bg-color)"
    imageContainer.style.background = "var(--bg-color)"
}

window.addEventListener("load", () => {
    
setTimeout(() => {
    
    hoverArea.addEventListener('mouseover', ()=>{
        hoverEffect()
        onHover = true
    })
    hoverArea.addEventListener('mouseout', ()=>{
        onHover = false
        setTimeout(() => {
            if(socialContainer.style.paddingLeft === "200px" && !onHover){
                setTimeout(() => {
                    unHoverEffect()
                }, 500);
            }
        }, 100);
        
    
    
    })

}, 1000);

  });

