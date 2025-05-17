document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = signupForm.username.value.trim();
    const email = signupForm.email.value.trim();
    const password = signupForm.password.value;

    if (!username || !email || !password) {
      alert("Please fill out all fields!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email!");
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    console.log("Stored User:", localStorage.getItem("user"));

    alert("Signup successful! You can now visit your profile.");
    signupForm.reset();
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

