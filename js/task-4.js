const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = form.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
});

// 👇 ДОДАЙ ПОЗА обробником submit
const button = document.getElementById("action-button");

button.addEventListener("click", () => {
  if (button.classList.contains("login")) {
    button.classList.remove("login");
    button.classList.add("destroy");
    button.textContent = "Destroy";
  } else {
    button.classList.remove("destroy");
    button.classList.add("login");
    button.textContent = "Log in";
  }
});
