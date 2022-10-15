
function Register() {
          let  name= document.getElementById('name').value;
          let email= document.getElementById('email').value;
          let  password= document.getElementById('password').value;
      
        console.log(name, email, password);   
        var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;                     
 
                if (name == "" ) {
                    alert("enter name!");
                }
                if (email == "" || email) {
                    alert("enter valid email address!");
                }
 
                if(password.length < 6 || password == ""){
                    alert("Password should be atleast 6 character long");
                    return false;
 
                }
 
                return true;
}