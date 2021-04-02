

//var btn = document.getElementsByTagName("button")[0];
var btn = document.getElementById("enter");
var input = document.getElementById("input")
var ul = document.querySelector("ul")

btn.addEventListener("click", function(){
    //check if input is empty
    if(input.value.length > 0){

    // creat an element
    var li = document.createElement("li")

    // append textNode
    li.appendChild(document.createTextNode(input.value))

    //apped to the ul
    ul.appendChild(li)
    input.value = "";
    }

})

//keypress

input.addEventListener("keypress", function(event){
     console.log(event.value)
    if(input.value > 0 && event.key ==="undefined"){
        var li = document.createElement("li")
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            input.value = "";
    }
})