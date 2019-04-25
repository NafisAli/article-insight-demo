<template>
  <div class="form-container sign-up-container">
    <form action="#">
      <h1>Register</h1>
      <span>Use your email for registration</span>
      <input type="text" placeholder="First Name">
      <input type="text" placeholder="Last Name">
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <button>Sign Up</button>
      <br>
      <router-link to="/login">Login</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "signup"
};
</script>

<style>
.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 100%;
  z-index: 1;
}

.sign-up-container {
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>


