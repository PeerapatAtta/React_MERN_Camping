import { checkOutStatus } from '@/api/booking'
import { createAlert } from '@/utils/createAlert'
import { useAuth } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'

const CheckoutComplete = () => {
  const { session } = useParams()
  const { getToken } = useAuth()
  console.log("session:", session)
  // console.log(getToken)
  const [status, setStatus] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    fetchPayment();
  }, []);

  const fetchPayment = async () => {
    const token = await getToken();
    try {
      const res = await checkOutStatus(token, session);
      console.log("Payment status:", res);
      setStatus(res.data.status);
      createAlert("success",res.data.message);
      navigate("/user/myorders");
    } catch (error) {
      console.error("Error fetching payment status:", error);
    }
  }

  if (status === "open") {
    return (
      <Navigate to="/" />
    );
  }

  return (
    <div>Loading...</div>
  )
}

export default CheckoutComplete