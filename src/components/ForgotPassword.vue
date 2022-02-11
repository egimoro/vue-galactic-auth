<template>
  <div class="vue-template">
    <form @submit.prevent="forgetPassword">
      <h3>Forgot Password</h3>
      <div class="form-group">
        <label for="">Email</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="user.email"
        />
      </div>
      <button type="submit" class="btn btn-dark btn-lh btn-block">
        Reset password
      </button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      user: {
        email: "",
      },
    };
  },

  methods: {
    forgetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert("Check your registered email to reset the password!");
          this.user = {
            email: "",
          };
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
