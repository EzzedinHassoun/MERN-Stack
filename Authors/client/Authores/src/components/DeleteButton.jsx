import axios from "axios";

const DeleteButton = ({ authorId, onSuccess }) => {
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this author?")) return;

    try {
      await axios.delete(
        `http://localhost:8000/api/authore/${authorId}`
      );

      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(" Delete error:", err);
    }
  };

  return (
    <button className="btn btn-danger btn-sm" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
