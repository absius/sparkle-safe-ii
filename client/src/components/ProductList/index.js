import React from "react";
import { useQuery } from "@apollo/client";

import JewelryItem from "../JewelryItem";
import { QUERY_JEWELRY } from "../../utils/queries";
import spinner from "../../assets/spinner.gif";

function JewelryList({ currentCategory }) {
  const { loading, data } = useQuery(QUERY_JEWELRY);

  const jewelryList = data?.jewelryList || [];

  function filterJewelryList() {
    if (jewelryList.length) {
      return jewelryList;
    } else {
      return "You have not added any jewelry yet.";
    }
  }

  return (
    <div className="my-2">
      <h2>My Jewelry</h2>
      {jewelryList.length ? (
        <div className="flex-row">
          {filterJewelryList().map((jewelryItem) => (
            <JewelryItem
              key={jewelryItem._id}
              _id={jewelryItem._id}
              jewelryName={jewelryItem.jewelryName}
              description={jewelryItem.description}
              jewelryPrice={jewelryItem.jewelryPrice}
              assessedValue={jewelryItem.assessedValue}
              jewelryAssessor={jewelryItem.jewelryAssessor}
              purchasedDate={jewelryItem.purchasedDate}
              jewelryWarranty={jewelryItem.jewelryWarranty}
              servicedDate={jewelryItem.servicedDate}
              jewelryPhoto={jewelryItem.jewelryPhoto}
              receiptPhoto={jewelryItem.receiptPhoto}
              createdAt={jewelryItem.createdAt}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
