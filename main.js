
function Register() {
          let  name= document.getElementById('name').value;
          let email= document.getElementById('email').value;
          let  password= document.getElementById('password').value;
      
        console.log(name, email, password);   
        var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;                     
 
                if (name == "" ) {
                    alert("enter name!");
                    return false;
                }
                if (email == "" || !email.match(valid)) {
                    alert("enter valid email address!");
                    return false;
                }
 
                if (/@gmail.com\s*$/.test(email)) {
                    console.log("it ends in @gmail.com");
                    return false;
                 } 

                 if(password == ""){
                    alert("Enter password!");
                    return false;
                }

                if(password.length < 6){
                    alert("Password should be atleast 6 character long");
                    return false;
                }
                return true;
}