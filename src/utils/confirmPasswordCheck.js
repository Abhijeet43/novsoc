import { toast } from "react-toastify";

const confirmPasswordCheck = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    toast.error("Your password and confirm password do not match");
    return false;
  } else {
    return true;
  }
};

export { confirmPasswordCheck };
