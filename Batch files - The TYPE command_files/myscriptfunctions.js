// Function to toggle hide/expose of DIVs in LI elements.
// list-style-image must be set (inline) to "expand.jpg" for this function to work.
// First argument is "self", second argument is ID of hidden DIV block inside LI block.
function toggleExpandCollapse( obj, cid ) {
	var listStyleImage = obj.style.listStyleImage;
	var child = document.getElementById(cid);
	if ( listStyleImage.indexOf( "pictures/expand.jpg" ) > -1 ) {
		obj.style.listStyleImage = "url(./pictures/collapse.jpg)";
		child.style.display = "block";
	} else {
		obj.style.listStyleImage = "url(./pictures/expand.jpg)";
		child.style.display = "none";
	}
	return false;
}
