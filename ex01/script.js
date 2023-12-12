document.title = "Changing the DOM"; 
console.log(document.title);

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    
document.body.style.backgroundColor = getRandomColor();

const secondChild = document.body.children[1];

for (const child of secondChild.children) {
console.log(child);
}
