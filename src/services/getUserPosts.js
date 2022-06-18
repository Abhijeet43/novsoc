import axios from "axios";
import { toast } from "react-toastify";

const getUserPosts = async (setUserPosts, username, setLoader) => {
  // setLoader(true);
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    setUserPosts(response.data.posts);
  } catch (error) {
    toast.error(error);
  } finally {
    // setLoader(false);
  }
};

export { getUserPosts };
