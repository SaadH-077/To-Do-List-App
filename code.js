const form = document.forms["myForm"]
const input = form["task"]
const ul = document.getElementById("taskList")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const val = input.value

    const newli = document.createElement("li")
    newli.innerHTML = val + "<i onclick=\"deletetask(this)\" class=\"fas fa-times\" style=\"float:right;\"></i>"

    ul.appendChild(newli)
})

function deletetask(x) {
    console.log("Hello")
    x.parentElement.remove()
    
}
