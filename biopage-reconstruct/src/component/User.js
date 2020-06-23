import React from 'react';
import {
  useParams,
} from 'react-router-dom';

const User = function Ur() {
  const { userId } = useParams();
  return <h3>Requested topic ID: {userId}</h3>;
};
export default User;
