const learner = ['Marvin', 'Thomas', 'Nicolas', 'Joshua'];
const articleElement = document.querySelector('article');

learner.sort(() => Math.random() -0.5);

learner.forEach(learnerName => {
    const section = document.createElement('section');
    const paragraph = document.createElement('p');
    const randColor = getRandomColor();

    section.style.backgroundColor = randColor;
    paragraph.textContent = learnerName;
    const luminance = getLuminance(randColor);
    section.style.color = luminance > 0.5 ? 'black' : 'white';

    section.appendChild(paragraph);
    articleElement.appendChild(section);
});

function getLuminance(color) {
    const rgb = parseInt(color.substring(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
