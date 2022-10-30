function changeBG(color) {
    document.body.style.backgroundColor = color;
    let text = document.getElementsByClassName("text");

    if (color == "#000000") {
        for (let key of text) {
            key.style.color = "white";
        }
    } else {
        for (let key of text) {
            key.style.color = "black";
        }
    }

}

