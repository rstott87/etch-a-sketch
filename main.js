
for (i=0; i<16; i++)

{
const container = document.querySelector('#container')

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "I'm in a div";
 
container.appendChild(content);
};