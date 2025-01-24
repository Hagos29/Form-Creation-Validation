async function fetchUserData() {
    try {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML='';
        const userList ="<ul>";
        users.forEach(user => {
            const li = document.createElement("li");
            userList.appendChild(li);
        });
        dataContainer.appendChild(userList);
    } 
     catch (error) {
        dataContainer.innerHTML = 'Failed to load user data';
        console.error(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchUserData.then(value => {
        return value;
    })
});