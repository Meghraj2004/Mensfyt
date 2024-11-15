"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface OrderProduct {
  id: string;
  customerOrderId: string;
  productId: string;
  quantity: number;
  product: {
    id: string;
    slug: string;
    title: string;
    mainImage: string;
    price: number;
  };
}

interface Order {
  id: string;
  adress: string;
  apartment: string;
  dateTime: string;
  email: string;
  lastname: string;
  name: string;
  phone: string;
  postalCode: string;
  city: string;
  country: string;
  orderNotice: string;
  status: "processing" | "delivered" | "canceled";
  total: number;
}

const UserOrderDetails = () => {
  const [orderProducts, setOrderProducts] = useState<OrderProduct[]>([
    {
      id: "1",
      customerOrderId:"c884fd64-6726-47af-aae1-6fcf9d12f27c",
      productId: "0f3e37a7-442a-43fc-9124-e2e9c3cd9b21",
      quantity: 1,
      product: {
        id: "c884fd64-6726-47af-aae1-6fcf9d12f27c",
        slug: "SelFusion-Mens-Premium",
        title: "SelFusion Mens Premium",
        mainImage: "/SelFusion Mens Premium.jpg", // Replace with a valid path to a placeholder image
        price: 1000,
      },
    },
  ]);

  const [order, setOrder] = useState<Order | null>({
    id:"c884fd64-6726-47af-aae1-6fcf9d12f27c",
    adress: "A/P Bhoje",
    apartment: "dw",
    dateTime: "2024-11-12 12:17:06.539",
    email: "passt8729@gmail.com",
    lastname: "Pass",
    name: "Time",
    phone: "9421612110",
    postalCode: "424203",
    city: "Jalgaon",
    country: "India",
    orderNotice: "Fast Deliver",
    status: "processing",
    total: 1205,
  });

  const params = useParams<{ id: string }>();
  const router = useRouter();

  // Function to format the date in a consistent format
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US"); // Change locale as needed
  };

  return (
    <div className="bg-gray-100 p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-5">Order Details</h1>

      {order && (
        <div className="bg-white p-5 shadow rounded-lg">
          <div className="mb-4">
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Date:</strong> {formatDate(order.dateTime)}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
          </div>

          <div className="border-t pt-4 mb-4">
            <h2 className="text-xl font-bold">Shipping Information</h2>
            <p><strong>Name:</strong> {order.name} {order.lastname}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Address:</strong> {order.adress}, {order.apartment}, {order.city}, {order.country}</p>
            <p><strong>Postal Code:</strong> {order.postalCode}</p>
          </div>

          <div className="border-t pt-4 mb-4">
            <h2 className="text-xl font-bold">Order Items</h2>
            {orderProducts && orderProducts.length > 0 ? (
              <ul>
                {orderProducts.map((item) => (
                  <li key={item.id} className="flex gap-4 py-3 border-b">
                    <Image
                      src={item.product.mainImage}
                      alt={item.product.title}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <Link href={`/product/${item.product.slug}`} className="font-semibold">
                        {item.product.title}
                      </Link>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{item.product.price.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products in this order.</p>
            )}
          </div>  

          <div className="border-t pt-4">
            <p><strong>Total:</strong> ₹{order.total.toFixed(2)}</p>
          </div>
        </div>
      )}

      {!order && (
        <p className="text-center">Loading order details...</p>
      )}
    </div>
  );
};

export default UserOrderDetails;
