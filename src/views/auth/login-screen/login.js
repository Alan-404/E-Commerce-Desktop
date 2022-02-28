const AccountModel = require('../../../models/user')

const submitLogin = async() => {
    email = document.getElementById('inputEmail').value
    password = document.getElementById('inputPassword').value

    //account = new AccountModel(email, password)

    await fetch('http://localhost:8000/user/auth_user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success){
                window.location.replace('../../home/dashboard-screen/dashboard.html')
            }
        })
        .catch(error => {console.log (error); return false})
    
}