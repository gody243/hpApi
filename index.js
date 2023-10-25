const userSelect=document.getElementById("userSelect")

fetch("https://hp-api.onrender.com/api/characters")
.then(response => response.json())
.then(users => {
    const ps = users.map((user) => {
      const p = document.createElement('p');
      p.value = user.id;
      p.textContent = user.name;
      return p;
    });
    ps.forEach(p => userSelect.appendChild(p));
})