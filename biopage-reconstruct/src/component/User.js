import React from 'react';
import {
  useParams,
} from 'react-router-dom';

const Topic = function Tp() {
  const { userId } = useParams();
  return <h3>Requested topic ID: {userId}</h3>;
};
export default Topic;
