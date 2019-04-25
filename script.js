function query (tag){
    return document.querySelector(tag);
}

const img = query("img");
const toggle = () => {
    if(img.src == "http://i.stack.imgur.com/b983w.jpg"){
        img.src = "http://i.stack.imgur.com/ybxlO.jpg"
    }else{
        img.src = "http://i.stack.imgur.com/b983w.jpg"
    }
}
img.addEventListener("click", toggle);