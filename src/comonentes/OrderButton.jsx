'use client';

import { toast } from 'react-toastify';

const OrderButton = ({ userData }) => {
  const handleOrder = async () => {
    try {
      const res = await fetch(`http://localhost:5000/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: {
            name: userData.courseName,
            image: userData.courseImage,
            price: userData.coursePrice,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // সার্ভার থেকে error message দেখান
        toast.error(`সমস্যা: ${data.error || 'অজানা সমস্যা'}`);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error('Payment URL পাওয়া যায়নি।');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('অর্ডার করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    }
  };

  return (
    <div>
      <button
        onClick={handleOrder}
        className="mt-6 cursor-pointer flex h-12 w-full items-center justify-center rounded-xl bg-violet-600 text-sm font-black text-white transition hover:bg-violet-700"
      >
        নিরাপদে অর্ডার করুন
      </button>
    </div>
  );
};

export default OrderButton;
