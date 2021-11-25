const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()
const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
            const p = document.createElement('p');
                p.innerText = `Id: ${buddy.id.value}
                Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
                Email: ${buddy.email}
                Cell: ${buddy.cell}
                UserName: ${buddy.login.username}`
             buddiesDiv.appendChild(p)  
             console.log(buddy); 
    }
}