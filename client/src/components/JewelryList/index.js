
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import auth from '../../utils/auth';

import { REMOVE_JEWELRY } from "../../utils/mutations";

import { QUERY_USER } from "../../utils/queries";

const JewelryList = () => {
  const { loading, data } = useQuery(QUERY_USER);

  
  const [removeJewelry, { error }] = useMutation(REMOVE_JEWELRY);

  const userData = data?.me || {};

  const userDataLength = Object.keys(userData).length;

  if (!userDataLength) {
    return <h2>LOADING...</h2>;

  }

  const handleDeleteJewelry = async (jewelryId) => {
    const token = auth.loggedIn() ? auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeJewelry({
        variables: { jewelryId },
      });

    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
    
      <div className='text-light bg-dark'>
      </div>
      <div>
        <h2>
          {userData.jewelryList.length
            ? `Viewing saved jewelry`
            : 'You have no saved jewelry!'}
        </h2>
        </div>
        <div>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Assessed Value</th>

                <th>Assessor</th>
                <th>Purchase Date</th>
                <th>Warranty Expiration Date</th>
                <th>Last Service Date</th>
                <th>Jewelry Photo</th>
                <th>Receipt Photo</th>
                <th>Created Date</th>

<th>Delete</th>
<th>Update</th>
</tr>
        </thead>
        <tbody>
        {userData.jewelryList.map((jewelry) => {
            return (
             
            <tr key={jewelry._id}>
                <td>
                {jewelry.jewelryName}
                </td>
                <td>
                {jewelry.description}
                </td>
                <td>{jewelry.jewelryPrice}</td>
                <td>{jewelry.assessedValue}</td>
                <td>{jewelry.jewelryAssessor}</td>
                <td>{jewelry.purchasedDate}</td>
                <td>{jewelry.jewelryWarranty}</td>
                <td>{jewelry.serviceDate}</td>
                <td>{jewelry.jewelryPhoto}</td>
                <td>{jewelry.receiptPhoto}</td>
                <td>{jewelry.createdAt}</td>
                <td>  <button style={{backgroundColor: "red"}} onClick={() => handleDeleteJewelry(jewelry._id)}>
                    Delete this Item!
                  </button></td>
                  <td>  <button style={{backgroundColor: "blue"}} onClick={() => handleDeleteJewelry(jewelry._id)}>
                    Update this Item!
                  </button></td>
            </tr>


            );
          })}
          </tbody>
    </table>
     
    

        </div>
      </div>
    );
  }


export default JewelryList;
