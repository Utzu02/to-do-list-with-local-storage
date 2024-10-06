const foaia1 = document.getElementById("f1")
const foaia2 = document.getElementById('f2')

let listcontainer1 = document.getElementById('list-container1')
let listcontainer2 = document.getElementById('list-container2')

listcontainer1.style.width = .7 * foaia1.offsetWidth + "px"
listcontainer1.style.marginLeft = foaia1.offsetWidth / 10 + "px"
listcontainer2.style.width = .7 * foaia1.offsetWidth + "px"
listcontainer2.style.marginLeft = 2 * foaia1.offsetWidth / 10 + "px"
document.getElementById("foaia-1").style.width = foaia1.offsetWidth + "px"
document.getElementById("foaia-2").style.width = foaia1.offsetWidth + "px"
document.getElementById('list-items1').style.gap = foaia1.offsetHeight / 43 + 'px'
document.getElementById('pen').style.height = foaia1.offsetHeight / 14 + "px"
document.getElementById('list-items1').style.marginTop = foaia1.offsetHeight / 340 + 'px'
document.getElementById('text-box').style.marginTop = foaia1.offsetHeight / 50 + 'px'

document.getElementById('text-box').style.width = foaia1.offsetWidth*.6 + 'px'
document.onresize = () => {

    document.getElementById('pen').style.height = foaia1.offsetHeight / 14 + "px"
    listcontainer1.style.width = .7 * foaia1.offsetWidth + "px"
    listcontainer1.style.marginLeft = foaia1.offsetWidth / 10 + "px"
    listcontainer2.style.width = .7 * foaia1.offsetWidth + "px"
    listcontainer2.style.marginLeft = 2 * foaia1.offsetWidth / 10 + "px"
    document.getElementById("foaia-1").style.width = foaia1.offsetWidth + "px"
    document.getElementById("foaia-2").style.width = foaia1.offsetWidth + "px"
    document.getElementById('list-items1').style.gap = foaia1.offsetHeight / 43 + 'px'
    document.getElementById('list-items1').style.marginTop = foaia1.offsetHeight / 340 + 'px'
    document.getElementById('text-box').style.marginTop = foaia1.offsetHeight / 50 + 'px'

}

function addTask() {

}
function save() {

}
function load() {

}
function deleteTask() {

}

let listItems = document.getElementById('list-items1')
console.log(listItems)
listItems.addEventListener('click', (e) => {
    if (e.target.tagName === "INPUT") {
        e.target.parentNode.parentNode.classList.toggle("checked")
    }
    else if (e.target.tagName === "H2") {

        e.target.parentNode.classList.toggle("checked")

        e.target.parentNode.children[0].children[0].checked = !e.target.parentNode.children[0].children[0].checked
    }
    else if (e.target.tagName === "SPAN") {
        deleteTask();
    }
})


load();