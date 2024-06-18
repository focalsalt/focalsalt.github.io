/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown1() {
	document.getElementById('Dropdown1').classList.toggle('show');
}

function dropdown2() {
	document.getElementById('Dropdown2').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
	if (!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById('Dropdown1');
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}

		var myDropdown = document.getElementById('Dropdown2');
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
};
