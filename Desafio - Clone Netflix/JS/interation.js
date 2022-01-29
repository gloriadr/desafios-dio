/* Buttons assistir e info*/
function start () {
  let button = document.getElementById("button-watch");
       button.style.backgroundColor = "black";
       button.style.color = "#fff";
}
function bStart() {
  let  button = document.getElementById("button-watch");
    button.style.backgroundColor = "rgba(0,0,0,.50)";
}

function more() {
  let  button = document.getElementById("button-more");
    button.style.backgroundColor = "black";
    button.style.color = "#fff";
}
function bMore() {
  let  button = document.getElementById("button-more");
    button.style.backgroundColor = "rgba(0,0,0,.50)";
}
function initialWatch() {
    let buttonWatch = document.getElementById("button-watch");
    buttonWatch.style.backgroundColor = "#fff";
    buttonWatch.style.color = "black";
   
}
function initialMore() {
    let buttonMore = document.getElementById("button-more");
    buttonMore.style.backgroundColor = "#fff";
    buttonMore.style.color = "black";
}
function leaveWatch () {
    let button = document.getElementById("button-watch");
    button.style.backgroundColor = "rgba(0,0,0,.50)";
    button.style.color = "#fff";
}
function leaveMore () {
    let button = document.getElementById("button-more");
    button.style.backgroundColor = "rgba(0,0,0,.50)";
    button.style.color = "#fff";
}
/*hover p*/
function hover () {
    let title = document.getElementsByClassName("title-hover")[0];
    title.style.display = "inline-block";
}
function leaveHover() {
    let title = document.getElementsByClassName("title-hover")[0];
    title.style.display = "none";
}
function keep() {
    let subtitle = document.getElementsByClassName("title-hover")[0];
    subtitle.style.display = "inline-block";
}
function go() {
    let subtitle = document.getElementsByClassName("title-hover")[0];
    subtitle.style.display = "none";
}
