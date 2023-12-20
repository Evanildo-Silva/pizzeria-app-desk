"use client";

import { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import Modal from "react-modal";
import ModalOrderItems from "../ModalOrderItems";
import { Button } from "../ui/Button";

type OrderProps = {
  id: string;
  table: number | string;
  status: boolean;
  draft: boolean;
  name: string | null;
  created_at: string;
  updeted_at: string;
};

type OrderListProps = {
  orderList?: OrderProps[]; // TODO temporário
};

export type OrderItemProps = {
  id: string;
  amount: string;
  order_id: string;
  product_id: string;
  products: {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  };
  order: {
    id: string;
    table: string;
    name: string | null;
  };
};

export default function DashboardDisplay({ orderList }: OrderListProps) {
  const [orders, setOrders] = useState(orderList);
  const [modalItem, setModalItem] = useState<OrderItemProps[]>([]);
  const [modal, setModal] = useState(false);

  Modal.setAppElement("#__next");

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <>
      <main className="max-w-[45rem] my-16 mx-auto px-8 flex flex-col">
        <div className="flex flex-row">
          <h1 className="font-semibold text-3xl">Últimos pedidos</h1>
          <Button
            className="ml-4 bg-transparent text-btn-primary"
            onClick={() => {}}
          >
            <FiRefreshCcw size={25} />
          </Button>
        </div>
        <article className="flex flex-col my-4">
          {orders?.length === 0 && (
            <span className="text-lg text-gray-400">Aguardando pedidos...</span>
          )}
          {!!orders &&
            orders.map((order) => (
              <section
                className="flex flex-row items-center mb-4 rounded-md bg-foreground"
                key={order.id}
              >
                <button
                  className="flex items-center text-lg h-[3.75rem]"
                  onClick={() => {}}
                >
                  <div className="w-2.5 bg-btn-primary h-[3.75rem] mr-4 rounded-l-md" />
                  <span>Mesa: {order.table}</span>
                  {!!order.name && (
                    <span className="m-8">Cliente: {order.name}</span>
                  )}
                </button>
              </section>
            ))}
        </article>
      </main>
      {!!modal && (
        <ModalOrderItems
          isOpen={modal}
          onRequestClose={handleCloseModal}
          orderItems={modalItem}
          handleFinishOrder={() => {}}
        />
      )}
    </>
  );
}
