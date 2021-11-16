import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import mutations from "../utils/mutations";
import jewelryItem from "../components/JewelryItem";
import jewelryList from "../components/JewelryList";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { ADD_JEWELRY } from "../utils/mutations";
import Auth from "../utils/auth";

function AddJewelry(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addJewelry] = useMutation(ADD_JEWELRY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addJewelry({
      variables: {
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
        createdAt: formState.createdAt,
      },
    });
    const token = mutationResponse.data.addJewelry.token;
    Auth.login(token);
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

      <h2>Signup</h2>
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
          <label htmlFor="jewelryPhoto">Jewelry Photo:</label>
          <input
            placeholder="upload"
            name="jewelryPhoto"
            type="file"
            id="jewelryPhoto"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="receiptPhoto">Receipt Photo:</label>
          <input
            placeholder="upload"
            name="receiptPhoto"
            type="file"
            id="receiptPhoto"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddJewelry;
