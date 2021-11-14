import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";

function JewelryItem(item) {
  const {
    jewelryName,
    description,
    jewelryPrice,
    assessedValue,
    jewelryAssessor,
    purchasedDate,
    jewelryWarranty,
    serviceDate,
    jewelryPhoto,
    receiptPhoto,
    createdAt,
  } = item;

  return (
    <div className="card px-1 py-1">
      <Link to={`/jewelryItem/${_id}`}>
        <img alt={jewelryName} src={`/images/${JewelryItem.jewelryPhoto}`} />
        <p>{name}</p>
      </Link>
      <div>
        <span>purchase price: ${purchasedPrice}</span>
        <span>description: {description}</span>
        <span>item price: {jewelryPrice}</span>
        <span>assessed value: {assessedValue}</span>
        <span>assessor: {jewelryAssessor}</span>
        <span>purchase date: {purchasedDate}</span>
        <span>warranty: {jewelryWarranty}</span>
        <span>service date: {serviceDate}</span>
        <span>jewelry photo: {jewelryPhoto}</span>
        <span>receipt photo: {receiptPhoto}</span>
        <span>date added: {createdAt}</span>
      </div>
      <button>Remove from list</button>
    </div>
  );
}

export default JewelryItem;
