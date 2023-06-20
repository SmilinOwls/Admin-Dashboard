import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function OrderDetail() {
  const { state } = useLocation();
  const { order } = state || {};
  return (
    <div>OrderDetail</div>
  )
}

export default OrderDetail