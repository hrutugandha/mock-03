
function Register() {
          const  name= document.getElementById('name').value;
          const email= document.getElementById('email').value;
          const  password= document.getElementById('password').value;
      
        console.log(name, email, password.length);   
        var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;                     
 
                if (name == "" ) {
                    alert("enter name!");
                    return false;
                }
                 if (email == "" || !email.match(valid) || /@gmail.com\s*$/.test(!email)) {
                    alert("enter valid email address!");
                    return false;
                }

                  if(password.length < 6 || password.length=== 0){
                    alert("Enter your password");
                    return false;
                }
                return true;
}