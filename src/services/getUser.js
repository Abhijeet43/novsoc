import axios from "axios";
import { toast } from "react-toastify";

const getUser = async (setUserProfile, username, setLoader) => {
  setLoader(true);
  try {
    const response = await axios.get(`/api/users/${username}`);
    setUserProfile(response.data.user);
  } catch (error) {
    toast.error(error);
  } finally {
    setLoader(false);
  }
};

export { getUser };
