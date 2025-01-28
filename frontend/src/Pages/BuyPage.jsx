import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const BuyPage = () => {
  const location = useLocation();
  const product = location.state?.product; // Access product data from state

  if (!product) {
    return <div>Product not found!</div>; // Handle case if product is not found
  }

  // Remove ₹ and convert price to a number
  const productPrice = parseFloat(product.price.replace('₹', '').replace(',', ''));

  // Example charges
  const deliveryCharge = 100; // Delivery charge
  const platformFee = 50; // Platform fee
  const gst = productPrice * 0.18; // GST (18%)

  // Calculate the total amount
  const totalAmount = productPrice + deliveryCharge + platformFee + gst;

  // State to handle the selected payment method
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');

  // Handle payment method change
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle submission of the payment form
  const handlePaymentSubmit = () => {
    alert(`Payment Method: ${paymentMethod}\nProceeding with the payment...`);
  };

  return (
    <div className="bg-[#1c1b4d] min-h-screen text-white py-12 px-6">
      <div className="max-w-3xl mx-auto bg-[#2b2a6c] p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="w-full md:w-1/3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold">{product.name}</h2>
            <p className="text-xl font-bold mt-4">{product.price}</p>
            <p className="text-lg mt-4">{product.description}</p>

            {/* Payment Methods */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Select Payment Method</h3>
              <div className="mt-2">
                <label>
                  <input
                    type="radio"
                    value="debitCard"
                    checked={paymentMethod === 'debitCard'}
                    onChange={handlePaymentChange}
                    className="mr-2"
                  />
                  Debit Card / Credit Card
                </label>
              </div>
              <div className="mt-2">
                <label>
                  <input
                    type="radio"
                    value="onlinePayment"
                    checked={paymentMethod === 'onlinePayment'}
                    onChange={handlePaymentChange}
                    className="mr-2"
                  />
                  Online Payment (UPI, Wallets, etc.)
                </label>
              </div>
              <div className="mt-2">
                <label>
                  <input
                    type="radio"
                    value="cashOnDelivery"
                    checked={paymentMethod === 'cashOnDelivery'}
                    onChange={handlePaymentChange}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {/* Charges and Fees */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Charges and Fees</h3>
              <div className="mt-2">
                <p>Delivery Charge: ₹{deliveryCharge}</p>
                <p>Platform Fee: ₹{platformFee}</p>
                <p>GST (18%): ₹{gst.toFixed(2)}</p>
              </div>
            </div>

            {/* Total Amount */}
            <div className="mt-6 text-xl font-semibold">
              <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>
            </div>

            {/* Proceed Button */}
            <div className="mt-6">
              <button
                onClick={handlePaymentSubmit}
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
