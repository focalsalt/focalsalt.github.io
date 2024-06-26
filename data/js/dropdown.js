/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
	document.getElementById('Dropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
	if (!e.target.matches('.dropdown-button')) {
		var myDropdown = document.getElementById('Dropdown');
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
};
