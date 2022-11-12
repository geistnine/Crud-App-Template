// vanilla dom manipulation

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.login.username.value;
    const password = document.login.password.value;
    // console.log(username, password);
    fetch('/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data)); // end of fetch
  });
  const p = document.querySelector('p');
  p.innerText = 'Hello!';
});
