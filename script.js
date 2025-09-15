//your JS code here. If required.
const line = document.getElementById("line");
let count = 0;
setInterval(()=> {
	count += 20;
	line.style.transform = `rotate(${count}deg)`;
}, 20)