document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Create a new paragraph to display the data
    var displayData = document.createElement("p");
    displayData.innerHTML = "Name: " + name + "<br>Email: " + email + "<br>Password: " + password;
  
    // Clear the form fields
    document.getElementById("myForm").reset();
  
    // Append the data to the display area
    document.getElementById("display-data").appendChild(displayData);
  });