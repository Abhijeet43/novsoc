import { toast } from "react-toastify";

const saveImageToCloudindary = async (
  image,
  saveData,
  inputData,
  type,
  from = "profile"
) => {
  try {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "oxvrurru");

    const requestOptions = {
      method: "POST",
      body: data,
    };

    await fetch(
      `https://api.cloudinary.com/v1_1/abhijeetscloud/${type}/upload`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let updatedData;
        if (from === "post") {
          updatedData = { ...inputData, img: data.url };
        } else {
          updatedData = { ...inputData, avatarUrl: data.secure_url };
        }
        saveData(updatedData);
      })
      .catch((error) => {
        toast.error(error);
      });
  } catch (error) {
    toast.error(error);
  }
};

export { saveImageToCloudindary };
