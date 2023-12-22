let ul = document.querySelector('ul');
let i = 0;

while (i < ul.children.length) {
    let child = ul.children[i];

    if (child.nodeType === 1) {
        if (child.textContent === 'Fast and Furious') {
            child.addEventListener('click', () => {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
            });
            ul.insertBefore(child, ul.firstChild);
            child.classList.add("important");
        } else {
            child.addEventListener('click', () => {
                alert(child.textContent);
            });
        }

        let j = i + 1;
        while (j < ul.children.length) {
            let nextChild = ul.children[j];
            if (areNodesEqual(child, nextChild)) {
                ul.removeChild(nextChild);
                j--;
            }
            j++;
        }
    }
    i++;
}

function areNodesEqual(node1, node2) {
    return node1.isEqualNode(node2);
}

document.body.addEventListener('keyup', function(event) {
    if (event.key === 'r') {
        sortListRandomly();
    }
    if (event.key === 'd') {
        cloneFastAndFurious();
    }
});

function sortListRandomly() {
    let childrenArray = Array.from(ul.children);
    let fastAndFurious = childrenArray.find(child => child.textContent === 'Fast and Furious');
    childrenArray = childrenArray.filter(child => child !== fastAndFurious);
    childrenArray.sort(() => Math.random() - 0.5);
    childrenArray.unshift(fastAndFurious);
    childrenArray.forEach(child => ul.appendChild(child));
}
function cloneFastAndFurious(){
    let fastAndFurious = ul.querySelector('.important');
    if (fastAndFurious) {
        let clone = fastAndFurious.cloneNode(true);
        ul.insertBefore(clone, ul.firstChild);
    }
}

let div = document.createElement('div');
div.textContent = 'Test';

document.body.insertBefore(div, ul);

let selectElement = document.createElement('select');


let option1 = document.createElement('option');
option1.value = 'important';
option1.textContent = 'Important franchises';

let option2 = document.createElement('option');
option2.value = 'normal';
option2.textContent = 'Normal franchises';

selectElement.appendChild(option1);
selectElement.appendChild(option2);


div.appendChild(selectElement);


document.body.insertBefore(div, ul);


selectElement.addEventListener('change', function () {
    let selectedValue = selectElement.value;
    

    for (let i = 0; i < ul.children.length; i++) {
        let child = ul.children[i];
        
        if (child.nodeType === 1) {
            if (selectedValue === 'important' && !child.classList.contains('important')) {
                child.style.visibility = 'hidden';
            } else {
                child.style.visibility = 'visible';
            }
        }
    }
});
