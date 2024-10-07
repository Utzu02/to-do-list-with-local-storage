const foaia1 = document.getElementById("f1")
const foaia2 = document.getElementById('f2')

let listcontainer1 = document.getElementById('list-container1')
let listcontainer2 = document.getElementById('list-container2')

let input = document.getElementById('text-box')

let listItems = document.getElementById('list-items1')
let listItems2 = document.getElementById('list-items2')
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
document.getElementById('list-items2').style.marginTop = foaia1.offsetHeight/12.5 + 'px'

document.getElementById('text-box').style.width = foaia1.offsetWidth*.6 + 'px'
document.onresize = () => {

document.getElementById('list-items2').style.marginTop = foaia1.offsetHeight/12.5 + 'px'
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
    const li = document.createElement('li')
    const span = document.createElement('span')

    span.classList.add('delete')
    span.innerHTML = '&#x2716;'

    const h2 = document.createElement('h2')
    h2.innerText = input.value

    const label = document.createElement('label')
    label.classList.add('checkcontainer')

    const inputmark = document.createElement('input')
    inputmark.type = 'checkbox'
    const nav = document.createElement('nav')
    nav.classList.add('checkmark')
    
    label.appendChild(inputmark)
    label.appendChild(nav)
    li.appendChild(label)
    li.appendChild(h2)
    li.appendChild(span)
    
    if(listItems.childElementCount<9)
        listItems.appendChild(li)
    else listItems2.appendChild(li)

}
function save() {
    localStorage.setItem("data", listItems.innerHTML)
    localStorage.setItem("data2", listItems2.innerHTML)
}
function load() {
    listItems.innerHTML = localStorage.getItem('data')
    listItems2.innerHTML = localStorage.getItem('data2')
}

listItems.addEventListener('click', (e) => {
    if (e.target.tagName === "INPUT") {
        e.target.parentNode.parentNode.classList.toggle("checked")
    }
    else if (e.target.tagName === "H2") {

        e.target.parentNode.classList.toggle("checked")

        e.target.parentNode.children[0].children[0].checked = !e.target.parentNode.children[0].children[0].checked
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentNode.remove()
    }
    save();
})
listItems2.addEventListener('click', (e) => {
    if (e.target.tagName === "INPUT") {
        e.target.parentNode.parentNode.classList.toggle("checked")
    }
    else if (e.target.tagName === "H2") {

        e.target.parentNode.classList.toggle("checked")

        e.target.parentNode.children[0].children[0].checked = !e.target.parentNode.children[0].children[0].checked
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentNode.remove()
    }
    save();
})
document.getElementById('pen'),addEventListener('click', () => {
    if(input.value ==='')
    {
        console.log("NU")
    }
    else {
        addTask()
    }
    input.value = ''
    save();
})
document.onkeydown = (e)=>{
    if(e.keyCode == 13) {
        if(input.value ==='')
            {
                console.log("NU")
            }
            else {
                addTask()
            }
            input.value = ''
            save();
    }
}

load();