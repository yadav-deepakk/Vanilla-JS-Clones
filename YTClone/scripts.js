// alert("Scripts invoked!!");
window.onload = () =>  {
	let hamburgerMenu = document.querySelector(".nav-left .fa-bars");
	hamburgerMenu.addEventListener("click", toggleSideBar);
};

let toggleSideBar = () => {
	console.log("hamburger menu clicked!")
	let sideBarMini = document.querySelector(".sidebar-mini"); 
	let sideDrawer = document.querySelector(".side-drawer");
	console.log("side-bar classList: " + sideBarMini.classList); 
	console.log("side-drawer classList: " + sideDrawer.classList); 
	sideBarMini.classList.toggle("d-none");
	sideDrawer.classList.toggle("d-none");
};

let selectOption = (e) => {
	console.log("e: " + e);
	if(e.classList.contains("active-option")) return; 
	let opts = e.parentNode.children; 
	console.log("opts: " + opts);
	for (var i=0; i<opts.length; i++) {
		if(opts[i].classList.contains("active-option")){
			opts[i].classList.remove("active-option"); 
		}
	}
	e.classList.toggle("active-option");
};