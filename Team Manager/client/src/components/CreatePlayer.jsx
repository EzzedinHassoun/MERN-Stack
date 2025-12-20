import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import PlayerForm from "./PlayerForm";

const CreatePlayer = () => {
  const navigate = useNavigate();

  const handelCreate = async (formData, setErrors, resetForm) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/player",
        formData
      );

      console.log("player created:", res.data);

      resetForm({ playername: "", preferredposition: "" });
      navigate("/");
    } catch (err) {
      if (err.response?.data?.errors) {
        const fieldErrors = {};

        for (let key in err.response.data.errors) {
          fieldErrors[key] = err.response.data.errors[key].message;
        }

        setErrors(fieldErrors);
      } else {
        console.error("Server error:", err);
      }
    }
  };

  return (
    <>
      <Link to={`/`} className="btn btn-warning btn-sm me-2">
        Home
      </Link>

      <PlayerForm
        initialData={{ playername: "", preferredposition: "" }}
        onSubmitProps={handelCreate}
      />
    </>
  );
};

export default CreatePlayer;
