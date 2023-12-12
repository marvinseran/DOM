document.querySelectorAll('.important').forEach(element => element.title = "This is an important item");
document.querySelectorAll('img:not(.important)').forEach(img => img.style.display = 'none');

const paragraph = document.querySelectorAll('p');

paragraph.forEach(function(paragraph) {
    console.log(paragraph.className);
    console.log(paragraph.innerText);
});

document.querySelectorAll('p').forEach(function(paragraphs){
    if (!paragraphs.classList.length) {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    paragraphs.style.color = randomColor;
    }
});

