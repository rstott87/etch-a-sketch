


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


/* Goes throuh each div and adds and event listener for a mouse hover,
when a mouse hover is heard background turns red. on mouse out the class is
turned to "fader" whose CSS rules can be found in styles sheet. */

divs.forEach((content)  => { 

content.addEventListener ('mouseover', () => {
    content.style.backgroundColor = "red";
    content.classList.remove('fader');
    content.classList.add('content');
    });

content.addEventListener ('mouseout', () => {
    content.style.backgroundColor = "white";
    content.classList.remove('content');
    content.classList.add('fader');
    });    
    
});

/* content.style.backgroundColor = "yellow"; */ 

