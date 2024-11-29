function getFormvalue(event) {

	 event.preventDefault();
     
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;


	alert(firstName + " " + lastName);
	
}
document.getElementById('form1').addEventListener('submit', getFormvalue);
