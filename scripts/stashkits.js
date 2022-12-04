'use strict'
var header = document.querySelector("header");
var btn = document.querySelector(".back-to-top");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.onscroll = () => {
  if(window.scrollY > 100) {
    btn.classList.add('active');
  } else btn.classList.remove('active');
}

btn.onclick = () => {
  window.scrollTo(0, 0);
}

document.querySelector("#free-kits").onclick = searchByFree;
document.querySelector("#nonfree-kits").onclick = searchByNonFree;
document.querySelector("#drum-kits").onclick = searchByDrum;
document.querySelector("#loop-kits").onclick = searchByLoop;
document.querySelector("#stash-kits").onclick = searchByStash;
document.querySelector("#all-kits").onclick = showAll;

function dropDown() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function searchByFree() {
    let elems = document.querySelector(".stash-list");
    for (let i = 0; i < elems.children.length; i++) { 
        if (!elems.children[i].getAttribute('free').toLowerCase().includes("true")){
            elems.children[i].style.display="none";
        }
        else {
            elems.children[i].style.display="block";                 
        }
    }
}

function showAll() {
    let elems = document.querySelector(".stash-list");
    for (let i = 0; i < elems.children.length; i++) { 
        elems.children[i].style.display="block";
    }
}

function searchByNonFree() {
    let elems = document.querySelector(".stash-list");
    for (let i = 0; i < elems.children.length; i++) { 
        if (!elems.children[i].getAttribute('free').toLowerCase().includes("false")){
            elems.children[i].style.display="none";
        }
        else {
            elems.children[i].style.display="block";                 
        }
    }
}

function searchByOwner() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let elems = document.querySelector(".stash-list");
    for (let i = 0; i < elems.children.length; i++) { 
        if (!elems.children[i].getAttribute('own').toLowerCase().includes(input)) {
            elems.children[i].style.display="none";
        }
        else {
            elems.children[i].style.display="block";                 
        }
    }
}

function searchByDrum() {
    let elems = document.querySelector(".stash-list");
    for (let i = 0; i < elems.children.length; i++) { 
        if (!elems.children[i].getAttribute('type').toLowerCase().includes("drum")) {
            elems.children[i].style.display="none";
        }
        else {
            elems.children[i].style.display="block";                 
        }
    }
}

function searchByLoop() {
    let elems = document.querySelector(".stash-list");
    for (let i = 0; i < elems.children.length; i++) { 
        if (!elems.children[i].getAttribute('type').toLowerCase().includes("loop")) {
            elems.children[i].style.display="none";
        }
        else {
            elems.children[i].style.display="block";                 
        }
    }
}

function searchByStash() {
    let elems = document.querySelector(".stash-list");
    for (let i = 0; i < elems.children.length; i++) { 
        if (!elems.children[i].getAttribute('type').toLowerCase().includes("stash")) {
            elems.children[i].style.display="none";
        }
        else {
            elems.children[i].style.display="block";                 
        }
    }
}