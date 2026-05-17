'use client';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const AddtoButtons = ({ data }) => {
  const handleAddCart = () => {
    toast.success(`Add ot Couress ${data.title}`);
  };

  return (
    <div>
      <Link href={`/checkout/${data._id}`}>
        <button
          onClick={handleAddCart}
          type="button"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          <ShoppingCart className="size-4" />
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default AddtoButtons;
