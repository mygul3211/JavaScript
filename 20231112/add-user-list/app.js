function addUser() {
    let firstNameIput = document.getElementById('firstName-id');
    let lastNameIput = document.getElementById('lastName-id');
    let ageInput = document.getElementById('age-id');
    let hobbyInput = document.getElementById('hobby-id');
    let userListContainer = document.getElementById('userList-id');
    let userList = document.getElementById('userList-id');
   
    userList.innerHTML = `
    <div class="user">
                <div class="user-name">
                    <label for="">Name</label>
                    <input type="text" value="${firstNameIput.value} ${lastNameIput.value}" disabled>
                </div>
                <div class="user-age">
                    <label for="">Age</label>
                    <input type="text" value="${ageInput.value}" disabled>
                </div>

                <div class="user-hobby">
                    <label for="">Hobby</label>
                    <input type="text" value="${hobbyInput.value}" disabled>
                </div>
            </div>
    ` + userList.innerHTML
}