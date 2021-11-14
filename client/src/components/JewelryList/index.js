import React from "react";
import { useQuery } from "@apollo/client";
import JewelryItem from "../JewelryItem";
import { QUERY_JEWELRY_ITEM } from "../../utils/queries";
import spinner from "../../assets/spinner.gif";

function JewelryList() {
  //   console.log("trying to run JewelryList function from JewelryList/index.js");
  const { loading, data } = useQuery(QUERY_JEWELRY_ITEM);

  const jewelryList = data?.jewelryList || [];

  function filterJewelryList() {
    if (jewelryList.length) {
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
            <h3>You haven't added any jewelry yet!</h3>
          )}

          {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
      );
    }
  }
}

export default JewelryList;
