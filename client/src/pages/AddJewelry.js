import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SAVE_JEWELRY } from "../utils/mutations";
import Auth from "../utils/auth";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";


function AddJewelry(props) {
  const [formState, setFormState] = useState({
    jewelryName: "",
    description: "",
    jewelryPrice: "",
    assessedValue: "",
    jewelryAssessor: "",
    purchasedDate: "",
    jewelryWarranty: "",
    serviceDate: "",
    jewelryPhoto: "",
    receiptPhoto: "",
  });
  const [saveJewelry] = useMutation(SAVE_JEWELRY);

 const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  };

  function calculateSize(img, maxWidth, maxHeight) {
    let width = img.width;
    let height = img.height;
  
    // calculate the width and height, constraining the proportions
    if (width > height) {
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
    } else {
      if (height > maxHeight) {
        width = Math.round((width * maxHeight) / height);
        height = maxHeight;
      }
    }
    return [width, height];
  }
  
  // Utility functions for demo purpose
  
  function displayInfo(label, file) {
    const p = document.createElement('p');
    p.innerText = `${label} - ${readableBytes(file.size)}`;
    document.getElementById('root').append(p);
  }
  
  function readableBytes(bytes) {
    const i = Math.floor(Math.log(bytes) / Math.log(1024)),
      sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
  }

  const handleChangeJewelryImage = async(evt) => {
  
      const jfile = evt.target.files[0]
     // const base64 = await convertBase64(file)

      const MAX_WIDTH = 160;
const MAX_HEIGHT = 160;
const MIME_TYPE = "image/png";
const QUALITY = 0.7;

const jblobURL = URL.createObjectURL(jfile);
  const jimg = new Image();
  jimg.src = jblobURL;
  jimg.onerror = function () {
    URL.revokeObjectURL(this.src);
    // Handle the failure properly
    console.log("Cannot load image");
  };
  jimg.onload = function () {
    URL.revokeObjectURL(this.src);
    const [newWidth, newHeight] = calculateSize(jimg, MAX_WIDTH, MAX_HEIGHT);
    const jcanvas = document.createElement("canvas");
    jcanvas.width = newWidth;
    jcanvas.height = newHeight;
    const ctx = jcanvas.getContext("2d");
    ctx.drawImage(jimg, 0, 0, newWidth, newHeight);
    jcanvas.toBlob(
      (blob) => {
        // Handle the compressed image. es. upload or save in local state

      },
      MIME_TYPE,
      QUALITY
    );
    formState.jewelryPhoto = jcanvas.toDataURL();
    }

      
    }
  
    const handleChangeReceiptImage = async(evt) => {
  
      const file = evt.target.files[0]
      const base64 = await convertBase64(file)

      const MAX_WIDTH = 160;
const MAX_HEIGHT = 160;
const MIME_TYPE = "image/png";
const QUALITY = 0.7;

const blobURL = URL.createObjectURL(file);
  const img = new Image();
  img.src = blobURL;
  img.onerror = function () {
    URL.revokeObjectURL(this.src);
    // Handle the failure properly
    console.log("Cannot load image");
  };
  img.onload = function () {
    URL.revokeObjectURL(this.src);
    const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
    const canvas = document.createElement("canvas");
    canvas.width = newWidth;
    canvas.height = newHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
    canvas.toBlob(
      (blob) => {
        // Handle the compressed image. es. upload or save in local state

      },
      MIME_TYPE,
      QUALITY
    );
    formState.receiptPhoto = canvas.toDataURL();
    }

      
    }


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const jewelryData =  ({
      jewelryName: formState.jewelryName,
      description: formState.description,
      jewelryPrice: formState.jewelryPrice,
      assessedValue: formState.assessedValue,
      jewelryAssessor: formState.jewelryAssessor,
      purchasedDate: formState.purchasedDate,
      jewelryWarranty: formState.jewelryWarranty,
      serviceDate: formState.serviceDate,
      jewelryPhoto: formState.jewelryPhoto,
      receiptPhoto: formState.receiptPhoto,
    
    });

    const mutationResponse = await saveJewelry({
      variables: {
         input: jewelryData 
      },
    });
    window.location.reload();
   // const token = mutationResponse.data.saveJewelry.token;
   // Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Add Jewelry</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="jewelryName">Jewelry Name:</label>
          <input
            placeholder="jewelry"
            name="jewelryName"
            type="text"
            id="jewelryName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="description">Description:</label>
          <input
            placeholder="description"
            name="description"
            type="text"
            id="description"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="jewelryPrice">Price:</label>
          <input
            placeholder="price"
            name="jewelryPrice"
            type="text"
            id="jewelryPrice"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="assessedValue">Assessed Value:</label>
          <input
            placeholder="assessed value"
            name="assessedValue"
            type="text"
            id="assessedValue"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="jewelryAssessor">Assessor Name:</label>
          <input
            placeholder="Assessor"
            name="jewelryAssessor"
            type="text"
            id="jewelryAssessor"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="purchasedDate">Date Purchased:</label>
          <input
            placeholder="date"
            name="purchasedDate"
            type="text"
            id="purchasedDate"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="jewelryWarranty">Warranty Expiration Date:</label>
          <input
            placeholder="date"
            name="jewelryWarranty"
            type="text"
            id="jewelryWarranty"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="serviceDate">Last Service Date:</label>
          <input
            placeholder="date"
            name="serviceDate"
            type="text"
            id="serviceDate"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="jewelryPhoto">Jewelry Photo:</label>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            onChange={handleChangeJewelryImage}
            encType="multipart/form-data"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <h3> OR </h3>
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            style={{ display: "none" }}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
       
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddJewelry;
