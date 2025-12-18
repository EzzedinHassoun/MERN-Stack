import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthorForm from "./AuthorForm";

const UpdateAuthor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/authore/${id}`
        );
        setInitialData(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchAuthor();
  }, [id]);

  const handelUpdate = async (formData, setErrors) => {
    try {
      const res = await axios.patch(
        `http://localhost:8000/api/authore/${id}`,
        formData
      );
      console.log("Product updated:", res.data);
      navigate(`/`);
    } catch (err) {
      if (err.response?.data?.errors) {
        const fieldErrors = {};
        for (let key in err.response.data.errors) {
          fieldErrors[key] =
            err.response.data.errors[key].message;
        }
        setErrors(fieldErrors);
      } else {
        console.error(" Update error:", err);
      }
    }
  };

  return (
    <>
      <h2>Edit this Authore</h2>
      {initialData ? (
        <AuthorForm
          initialData={initialData}
          onSubmitProps={handelUpdate}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default UpdateAuthor;
