
random1 ();
setInterval(random1, 1000);



function random1(){
    const [width, height] = [100, 100];
    const x = parseInt(Math.random() * window.innerWidth-`${width}`);
    const y = parseInt(Math.random() * window.innerHeight-`${height}`);


const d = document.createElement('div');
d.onclick =() => d.remove() ;
d.style.cssText = `position: absolute; left: ${x}px; top: ${y}px; width: ${width}; height: ${height}; background: yellow`;

document.body.appendChild(d);
}