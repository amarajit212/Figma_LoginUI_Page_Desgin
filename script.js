document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailOrPhone = document.querySelector(".input-box input[type='text']");
  const password = document.querySelector(".input-box input[type='password']");

  form.addEventListener("submit", function (event) {
      let isValid = true;
      
      // Email/Phone Validation
      if (!validateEmailOrPhone(emailOrPhone.value)) {
          alert("Please enter a valid email or phone number.");
          isValid = false;
      }

      // Password Validation
      if (password.value.trim().length < 6) {
          alert("Password must be at least 6 characters long.");
          isValid = false;
      }
      
      if (!isValid) {
          event.preventDefault(); // Prevent form submission if validation fails
      }
  });

  function validateEmailOrPhone(input) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9]{10}$/;
      return emailPattern.test(input) || phonePattern.test(input);
  }
});
