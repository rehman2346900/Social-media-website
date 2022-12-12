const clickBut = document.querySelector(".submit");
const username = document.getElementById("username");
const password = document.getElementById("password");

async function ckeckBut(e) {
  e.preventDefault();
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: `${username.value}`,
      password: `${password.value}`,
      // expiresInMins: 60, // optional
    }),
  });
  const facts = await response.json();

  console.log(username.value, password.value);

  if (response.ok) {
    localStorage.setItem("token", facts.token);
    localStorage.setItem("username", facts.username);
    localStorage.setItem("password", facts.password);
    window.location.href = "/main-index.html";
  }
}

clickBut.addEventListener("click", ckeckBut);

function userData() {
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())

    .then(console.log);
}
userData();
