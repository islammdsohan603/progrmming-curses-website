'use client';

import { toast } from 'react-toastify';

const OrderButton = () => {
  const handleOrder = () => {
    toast.success('Pyment SuccessFully');
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
