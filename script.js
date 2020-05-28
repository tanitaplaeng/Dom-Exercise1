function main() {
    let grow = document.getElementById('grow-me');
    grow.classList.add("big");

    let shrink = document.getElementById('shrink-me');
    shrink.classList.remove("big");

    let list = document.querySelectorAll("li");
    for (let node of list){ 
        console.log(node.textContent);
    } 
    console.log(list);

    let link = document.getElementsByClassName("link");
    link[0].setAttribute("href", "https://www.example.com"); 
    link[0].innerHTML = "something";

    let hide = document.getElementById("hide-me");
    hide.style.display = "none";

    let show = document.getElementById("show-me");
    show.style.display = "block";

    let name = document.getElementById("name").value;
    document.querySelector("h1").innerText = "Hello " + name;
}