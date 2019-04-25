<template>
  <div class="form-container sign-in-container">
    <form action="#">
      <h1>Login</h1>
      <span>Use your account</span>
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <button>Sign In</button>
      <br>
      <router-link to="/registration">Register</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "signin"
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
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>

