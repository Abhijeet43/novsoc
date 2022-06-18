import { toast } from "react-toastify";

const validatePassword = (password) => {
  const regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (regularExpression.test(password)) {
    return true;
  } else {
    toast.warning(
      "Password must include a number, a uppercase letter, a lowercase letter and a special character"
    );
    return false;
  }
};

export { validatePassword };
