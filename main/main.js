let elBtn = document.querySelectorAll(".btn")
let elText = document.querySelector(".text")
let text = 0;

setInterval(function add(){
    elText.textContent = text
},5)

for (let i = 0; i<elBtn.length; i++){
    elBtn[i].addEventListener('click',(evt) => {
        if(evt.target.dataset.uuid =="close") {
            text +=1
            evt.target.dataset.uuid ="open"
        } else if(evt.target.dataset.uuid =="open") {
            text -=1
            evt.target.dataset.uuid ="close"
        }
    })
}