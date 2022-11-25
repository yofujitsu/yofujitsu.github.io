
//сортировка элементов (задание 3)

document.querySelector("#sort-asc").onclick = ascSort;
document.querySelector("#sort-desc").onclick = descSort;

function ascSort() {
    let elems = document.querySelector(".members-list");
    console.log(elems.children);
    for(let i = 0; i < elems.children.length; ++i) {
        console.log(elems.children[i].getAttribute('name'));
        for(let j = i; j < elems.children.length; ++j) {
            if (elems.children[i].getAttribute('name').toLowerCase() > elems.children[j].getAttribute('name').toLowerCase()) {
                replacedNode = elems.replaceChild(elems.children[j], elems.children[i]);
                console.log(replacedNode);
                insertAfter(replacedNode, elems.children[i]);
            }
        }
    }
}

function descSort() {
    let elems = document.querySelector(".members-list");
    console.log(elems.children);
    for(let i = 0; i < elems.children.length; ++i) {
        console.log(elems.children[i].getAttribute('name'));
        for(let j = i; j < elems.children.length; ++j) {
            if (elems.children[i].getAttribute('name').toLowerCase() < elems.children[j].getAttribute('name').toLowerCase()) {
                replacedNode = elems.replaceChild(elems.children[j], elems.children[i]);
                console.log(replacedNode);
                insertAfter(replacedNode, elems.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
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

function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let elems = document.querySelector(".members-list");
    for (i = 0; i < elems.children.length; i++) { 
        if (!elems.children[i].getAttribute('name').toLowerCase().includes(input)) {
            elems.children[i].style.display="none";
        }
        else {
            elems.children[i].style.display="block";                 
        }
    }
}