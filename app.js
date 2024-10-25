function submit(){
  console.log('click')
  var email = document.getElementById('gmail').value
  var pass = document.getElementById('pas').value 
  console.log(email,pass)
  
  if(!email || !pass  ){
      alert('both fields are required')
  }
  var isValid = email.indexOf('@gmail.com')
  console.log(isValid)
  
  if(isValid == -1){
      alert('Wrong Email')
    
}
if(email === 'abuzar981@gmail.com' && pass === 'asdf4321'){
           alert('Login Successfully')
           window.location.href = './index.html'
       }else{
           alert('invalid email and password')
       }
  
}