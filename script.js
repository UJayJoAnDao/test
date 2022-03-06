var n = document.getElementById("name");
var content = document.getElementById("content");
var submit = document.getElementById("submitBtn");
var list = document.getElementById("list");

submit.addEventListener("click",function(){
    list.innerHTML = list.innerHTML + `
    <div class="comment">
        <h3 id="user">${n.value}說:${content.value}</h3>
        <hr>
    </div>
    `;
    content.value = "";
    n.value = "";
})