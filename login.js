document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    if (!email || !password) {
      alert("Please fill out all fields!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email!");
      return;
    }

    // Check if user exists in localStorage
    console.log("Stored User:", localStorage.getItem("user"));
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    // Verify credentials
    if (storedUser.email === email && storedUser.password === password) {
      // Update last login time
      storedUser.lastLogin = new Date().toISOString();
      localStorage.setItem("user", JSON.stringify(storedUser));

      alert("Login successful!");
      // Redirect to profile page
      window.location.href = "profile.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Check if remember me was previously set
  const rememberedUser = localStorage.getItem("rememberedUser");
  if (rememberedUser) {
    const userData = JSON.parse(rememberedUser);
    loginForm.email.value = userData.email;
    loginForm.remember.checked = true;
  }

  // Handle remember me functionality
  loginForm.addEventListener("change", (e) => {
    if (e.target.id === "remember") {
      const rememberCheckbox = e.target;
      const email = loginForm.email.value.trim();

      if (rememberCheckbox.checked && email) {
        localStorage.setItem("rememberedUser", JSON.stringify({ email }));
      } else if (!rememberCheckbox.checked) {
        localStorage.removeItem("rememberedUser");
      }
    }
  });
});
