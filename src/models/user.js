

class UserModel{
    constructor (id, email, password, firstName, lastName, gender, bDate, telephone, country, avatar, roleId, createdAt, modifiedAt){
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.bDate = bDate;
        this.telephone = telephone;
        this.country = country;
        this.avatar = avatar;
        this.roleId = roleId;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }

}

class AccountModel{
    constructor (email, password){
        this.email = email;
        this.password = password;
    }

    async loginAccount(account){
        await fetch('http://localhost:8000/user/auth_user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        })
        .then(response => response.json())
        .then(data => {return data.success})
        .catch(error => {console.log (error); return false})
    }
}

module.exports = {AccountModel, UserModel}