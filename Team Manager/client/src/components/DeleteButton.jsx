import axios from "axios";

const DeleteButton = ({ playerId, onDeleteSuccess }) => {
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this player?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/player/${playerId}`);
      onDeleteSuccess(playerId);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <button className="btn btn-danger btn-sm" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
