import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PlayerForm from "./PlayerForm";

const UpdatePlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    fetchPlayer();
  }, [id]);

  const fetchPlayer = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/player/${id}`
      );
      setInitialData(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const handelUpdate = async (formData, setErrors) => {
    try {
      const res = await axios.patch(
        `http://localhost:8000/api/player/${id}`,
        formData
      );

      console.log("Player updated:", res.data);
      navigate(`/`);
    } catch (err) {
      if (err.response?.data?.errors) {
        const fieldErrors = {};

        for (let key in err.response.data.errors) {
          fieldErrors[key] = err.response.data.errors[key].message;
        }

        setErrors(fieldErrors);
      } else {
        console.error("Update error:", err);
      }
    }
  };

  return (
    <>
      {initialData ? (
        <PlayerForm
          initialData={initialData}
          onSubmitProps={handelUpdate}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UpdatePlayer;
