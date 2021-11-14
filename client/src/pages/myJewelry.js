import React from "react";
import { Link } from "react-router-dom";
import jewelryItem from "../components/JewelryItem";
import jewelryList from "../components/JewelryList";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

function MyJewelry() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        {user ? (
          <>
            <h2>
              My Jewelry for {user.firstName} {user.lastName}
            </h2>
            {user.jewelryList.map((jewelryItem) => (
              <div key={jewelryItem._id} className="my-2">
                <h3>
                  {new Date(
                    parseInt(jewelryItem.dateAdded)
                  ).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {jewelryList.jewelryItem.map(
                    ({ _id, jewelryName }, index) => (
                      <div key={index} className="card px-1 py-1">
                        <Link to={`/jewelryList/${_id}`}>
                          <img
                            alt={jewelryName}
                            src={`/images/${jewelryItem.jewelryPhoto}`}
                          />
                          <p>{jewelryName}</p>
                        </Link>
                        <div>
                          <span>${jewelryItem.jewelryPrice}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default MyJewelry;
