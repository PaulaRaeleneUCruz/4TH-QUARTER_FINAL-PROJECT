document.addEventListener("DOMContentLoaded", () => {
    const profileContainer = document.getElementById("profile-container");
    const logoutBtn = document.getElementById("logout-btn");
  
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user) {
      // Enhanced profile display with last login information
      let lastLoginInfo = '';
      if (user.lastLogin) {
        const loginDate = new Date(user.lastLogin);
        lastLoginInfo = `<p><strong>Last Login:</strong> ${loginDate.toLocaleString()}</p>`;
      }
      
      profileContainer.innerHTML = `
        <h2>Welcome, ${user.username}!</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        ${lastLoginInfo}
        <p><em>Member since: ${new Date().toLocaleDateString()}</em></p>
      `;
    } else {
      profileContainer.innerHTML = `
        <p>No user data found. Please <a href="signup.html">sign up</a> or <a href="login.html">log in</a> first.</p>
      `;
    }
  
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      alert("You have been logged out.");
      window.location.href = "login.html"; // Redirect to login instead of signup
    });
  });
