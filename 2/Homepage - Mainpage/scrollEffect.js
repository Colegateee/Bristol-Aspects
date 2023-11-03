var x = document.querySelector(".nestgrid1 .wrapNestedGrid1");
var height = document.body.offsetHeight;

window.onscroll = function(){
    if (window.scrollY >= window.innerHeight){
        x.classList.add("visible");
        alert("Accessed");
    }
};
