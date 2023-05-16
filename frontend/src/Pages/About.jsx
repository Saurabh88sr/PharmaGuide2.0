import React, { useState } from "react";

const News = ({ title, description, Imgurl, newsurl }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    // Perform the update operation using updatedTitle and updatedDescription
    // For example, you can make an API call to update the news item
    // After the update is successful, you can set isEditing back to false
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the updatedTitle and updatedDescription back to their original values
    setUpdatedTitle(title);
    setUpdatedDescription(description);
  };

  const handleRemove = () => {
    // Perform the remove operation
    // For example, you can make an API call to delete the news item
    // After the removal is successful, you can handle any necessary cleanup
    console.log("Remove operation");
  };

  return (
    <div className="news-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <img src={Imgurl} alt="News" />
          <a href={newsurl} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default News;
