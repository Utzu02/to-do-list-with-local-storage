const foaia1 = document.getElementById("f1")
const foaia2 = document.getElementById('f2')

let listcontainer1 = document.getElementById('list-container1')
let listcontainer2 = document.getElementById('list-container2')

listcontainer1.style.width = .7 * foaia1.offsetWidth + "px"
listcontainer1.style.marginLeft = foaia1.offsetWidth / 10 + "px"
listcontainer2.style.width = .7 * foaia1.offsetWidth + "px"
listcontainer2.style.marginLeft = 2*foaia1.offsetWidth / 10 + "px"
document.getElementById("foaia-1").style.width = foaia1.offsetWidth + "px"
document.getElementById("foaia-2").style.width = foaia1.offsetWidth + "px"
document.onresize = () => {

    listcontainer1.style.width = .7 * foaia1.offsetWidth + "px"
    listcontainer1.style.marginLeft = foaia1.offsetWidth / 10 + "px"
    listcontainer2.style.width = .7 * foaia1.offsetWidth + "px"
    listcontainer2.style.marginLeft = 2*foaia1.offsetWidth / 10 + "px"
document.getElementById("foaia-1").style.width = foaia1.offsetWidth + "px"
document.getElementById("foaia-2").style.width = foaia1.offsetWidth + "px"

}