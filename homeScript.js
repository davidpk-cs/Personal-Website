function leftMarginShrinker(element){
    console.log("fish");
    console.log(element.parentElement.style.marginLeft);
    element.style.marginLeft = "18%";
    console.log(element.parentElement.style.marginLeft);

}

function leftMarginRestorer(element){
    console.log("dog");
    console.log(element.parentElement.style.marginLeft);
    element.style.marginLeft = "20%";
    console.log(element.parentElement.style.marginLeft);

}

function rightMarginShrinker(element){

}