import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [paymentHistory, setPaymentHistory] = useState([]);
  
    useEffect(() => {
      // Fetch the payment history for the student
      const fetchPaymentHistory = async () => {
        try {
          const response = await axiosSecure.get(`/payments?email=${user.email}`);
          setPaymentHistory(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchPaymentHistory();
    }, [axiosSecure, user.email]);
  
    const sortedPaymentHistory = paymentHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    return (
      <div>
        <h2>Payment History</h2>
        {sortedPaymentHistory.length === 0 ? (
          <p>No payment history available.</p>
        ) : (
          <ul>
            {sortedPaymentHistory.map((payment) => (
              <li key={payment._id}>
                Payment Amount: ${payment.price} | Date: {new Date(payment.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default PaymentHistory;
  