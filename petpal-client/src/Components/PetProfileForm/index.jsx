import React, { useState } from "react";
import { useAuth } from "../../context";
import Alert from "../Alert";
import "./style.css";

export default function PetProfileForm() {
  const { user_id } = useAuth();
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petSpecies, setPetSpecies] = useState("");
  const [petInst, setPetInst] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("Error!!");
      setErrMsg("something went wrong!");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("http://localhost:5000/pets/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: {
          "Content-type": "application/json",
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Headers":
          //   "Origin, X-Requested-With, Content-Type, Accept",
        },
        // mode: "cors",
      });
      setFileInputState("");
      setPreviewSource("");
      setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };

  const handleSubmitPet = async () => {
    console.log(user_id)
    const response = await fetch(
      `http://localhost:5000/users/${user_id}/pets`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: petName,
          animal_type: petSpecies,
          animal_age: petAge,
          comment: petInst,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.log(error);
    } else {
      const data = await response.json();
      console.log(data);
      // Do something with the newly created pet ID
      window.location.href = "/pet";
    }
  };
  return (
    <div>
      <h1 className="pet-title">Create A Pet Profile</h1>
      <Alert msg={errMsg} type="danger" />
      <Alert msg={successMsg} type="success" />
      {/* <form onSubmit={handleSubmitFile} className="form">
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form> */}
      <form
        action="http://localhost:5000/pets/upload"
        method="post"
        encType="multipart/form-data"
        htmlFor="fileInput"
      >
        <label>
          <div htmlFor="fileInput" className="img-wrap img-upload">
            {previewSource && (
              <img
                src={previewSource}
                alt="chosen"
                style={{ height: "100%", width: "100%" }}
                className="file-upload"
              />
            )}
            <img
              className="file-upload"
              src="/Pet-icon.png"
              alt="An image of multiple different pets morphed within each other."
            />
          </div>

          <input
            id="fileInput"
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
        </label>
        <label className="name-1" htmlFor="pet-name">
          Pet Name
          <input
            type="text"
            name="pet-name"
            id="pet-name"
            placeholder="Enter Pet Name"
            className="form-input"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="pet-age">
          Pet Age
          <input
            type="text"
            name="pet-age"
            id="pet-age"
            placeholder="Enter Pet Name"
            className="form-input"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
          />
        </label>
        <label htmlFor="pet-species">
          Pet Species
          <input
            type="text"
            name="pet-species"
            id="pet-species"
            placeholder="Enter Pet Species"
            className="form-input"
            value={petSpecies}
            onChange={(e) => setPetSpecies(e.target.value)}
          />
        </label>
        {/* <label htmlFor="pet-species">
          Pet Species
          <select name="species" id="pet-specie">
            <option value="">Select Pet Species</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="rabbit">Rabbit</option>
            <option value="reptile">Reptile</option>
          </select>
        </label> */}
        <label className="special-inst" htmlFor="pet-instructions">
          Pet Instructions
          <textarea
            type="text"
            name="pet-instructions"
            id="pet-instructions"
            placeholder="Enter Instructions"
            cols="20"
            rows="2"
            className="form-input"
            value={petInst}
            onChange={(e) => setPetInst(e.target.value)}
          ></textarea>
        </label>

        <button className="btn" type="button" onClick={() => handleSubmitPet()}>
          Submit
        </button>
      </form>
    </div>
  );
}
