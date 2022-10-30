let textbox = document.getElementById("textbox");

textbox.addEventListener("input", function () {
    let text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    let cleanlist = words.filter(function (elm) {
        return elm != "";
    })
    let singleword = cleanlist.length;
    document.getElementById("word").innerHTML = singleword;


    // <............Other way of Changing Words.........>

    // text = text.trim();
    // let words = text.split(" ");
    // let cleanlist = words.filter(function (elm) {
    //     return elm != "";
    // })
    // document.getElementById("word").innerHTML = cleanlist.length;







});

