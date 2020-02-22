var colors = ["red", "green", "blue"];

function changeBG(id, color){
    var node = document.getElementById(id);
    node.style.background = color;
}

let ms = 1000;

for (let i = 0; i < colors.length; i++) {
    setTimeout(
        function(){
            // changeBG("box", colors[i]);
            console.log(`i = ${i}`);
        },
        ms+=1000
    )
}







