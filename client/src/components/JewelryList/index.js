import React from 'react';
import { useQuery } from '@apollo/client';
import auth from '../../utils/auth';
import { QUERY_USER } from "../../utils/queries";

const JewelryList = () => {
  
  const { loading, data } = useQuery(QUERY_USER);
console.log(data)
  const userData = data?.me || {};

  const userDataLength = Object.keys(userData).length;

  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }


  return (
    <>
    
      <div fluid className='text-light bg-dark'>
      </div>
      <div>
        <h2>
          {userData.jewelryList.length
            ? `Viewing saved jewelry`
            : 'You have no saved jewelry!'}
        </h2>
        <div>
        <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
        {userData.jewelryList.map((jewelry) => {
            return (
             
            <tr key={jewelry.jewelryName}>
                <td>
                {jewelry.jewelryName}
                </td>
                <td>
                {jewelry.description}
                </td>
                <td>{jewelry.price}</td>
            </tr>


            );
          })}
    </table>
     
    
        </div>
      </div>
    </>
  );
};

export default JewelryList;
