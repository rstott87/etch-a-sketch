


for (i=0; i<256; i++)

{
const container = document.querySelector('#container')

var content = document.createElement('div');
content.style.border = '1px solid black'; 
content.style.width = '6.25%';
content.style.height = 'auto'; 
content.style.boxSizing = "border-box"
content.classList.add('content');
 
container.appendChild(content);


};

let divs = document.querySelectorAll('.content');

divs.forEach((content)  => { 

content.addEventListener ('mouseover', () => {
    content.style.backgroundColor = "red";
    });

content.addEventListener ('mouseout', () => {
    content.style.backgroundColor = "white";
    });    
    
});

/* content.style.backgroundColor = "yellow"; */ 

