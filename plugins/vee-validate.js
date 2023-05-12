import { defineRule } from "vee-validate";
export default defineNuxtPlugin(nuxtApp => {
  defineRule("required", value => {
    if (!value || !value.length) {
      return "This field is required";
    }
    return true;
  });
  defineRule("email", value => {
    if (!value || !value.length) {
      return true;
    }
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(value))) return "Email is not valid";

    return true;
  });
  defineRule("min", (value, [limit]) => {
    // The field is empty so it should pass
    if (!value || !value.length) {
      return true;
    }
    if (value.length < limit) {
      return `This field must be at least ${limit} characters`;
    }
    return true;
  });
});
