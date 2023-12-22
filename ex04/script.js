const ol = document.querySelector('ol')
const olChildren = ol.children
console.log(olChildren);

const a = ol.children[0]
const b = ol.children[1]
const c = ol.children[2]
const d = ol.children[3]
const e = ol.children[4]

e.appendChild(a)
e.appendChild(b)
e.appendChild(c)
e.appendChild(d)


var h2SecondSection = document.querySelector('section:nth-child(2) h2');
var h2ThirdSection = document.querySelector('section:nth-child(3) h2');

var parentSecondSection = h2SecondSection.parentNode;
var parentThirdSection = h2ThirdSection.parentNode;

parentSecondSection.replaceChild(h2ThirdSection.cloneNode(true), h2SecondSection);
parentThirdSection.replaceChild(h2SecondSection.cloneNode(true), h2ThirdSection);

parentThirdSection.remove();
