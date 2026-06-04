'use client';

import { toast } from 'react-toastify';

const OrderButton = () => {
  const handleOrder = async () => {
    try {
      const res = await fetch(`http://localhost:5000/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseId: 'course-id' }), // Replace with actual course ID
      });

      if (res.ok) {
        const data = await res.json();
        window.location.href = data.url;
        toast.success('অর্ডার সফল হয়েছে! দয়া করে পেমেন্ট সম্পন্ন করুন।');
      }
    } catch (error) {
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
