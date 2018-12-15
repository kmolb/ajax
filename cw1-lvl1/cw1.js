
random1 ();
setInterval(random1, 1000);



function random1(){
    const x = parseInt(Math.random() * window.innerWidth-100);
    const y = parseInt(Math.random() * window.innerHeight-100);


const d = document.createElement('div');
d.onclick =() => d.remove() ;
d.style.cssText = `position: absolute; left: ${x}px; top: ${y}px; width: 100px; height: 100px; background: yellow`;

document.body.appendChild(d);
}