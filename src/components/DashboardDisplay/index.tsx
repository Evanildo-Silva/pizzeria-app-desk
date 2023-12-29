"use client";

import { fetchWrapper } from "@/services/api";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import Modal from "react-modal";
import ModalOrderItems from "../ModalOrderItems";
import { Button } from "../ui/Button";

type OrderListProps = {
  orderList: OrderProps[];
};
export interface OrderProps {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  name: string;
  created_at: string;
  updated_at: string;
  items: Item[];
}

export interface Item {
  id: string;
  amount: number;
  created_at: string;
  updated_at: string;
  product: Product;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  banner: string;
  created_at: string;
  updated_at: string;
}

export default function DashboardDisplay({ orderList }: OrderListProps) {
  const [orders, setOrders] = useState(orderList);
  const [modalItem, setModalItem] = useState<OrderProps>();
  const [modal, setModal] = useState(false);

  const { data: session, status } = useSession();
  const token = session?.user.token;

  Modal.setAppElement("#__next");

  function handleCloseModal() {
    setModal(false);
  }

  async function handleRefreshDashboard() {
    await fetchWrapper("order/confirmed", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        const order = await response;
        setOrders(order as unknown as OrderProps[]);
        // TODO adicionar toast para sucesso
      })
      .catch((error) => {
        // TODO adicionar toast para erro
      });
  }

  async function handleFinishOrder(id: string) {
    await fetchWrapper("order/finish", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then(async (response) => {
        const order = (await response) as unknown as OrderProps;
        if (order.id === id) {
          setModal(false);
          handleRefreshDashboard();
        }
        // TODO adicionar toast para sucesso
      })
      .catch((error) => {
        // TODO adicionar toast para erro
      });
  }

  async function handleOpenModal(id: string) {
    await fetchWrapper(`order/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        setModalItem(response as unknown as OrderProps);
        setModal(true);
      })
      .catch(() => {});
  }

  return (
    <>
      <main className="max-w-[45rem] my-16 mx-auto px-8 flex flex-col">
        <div className="flex flex-row">
          <h1 className="font-semibold text-3xl">Últimos pedidos</h1>
          <Button
            className="ml-4 bg-transparent text-btn-primary"
            onClick={handleRefreshDashboard}
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
                  onClick={() => handleOpenModal(order.id)}
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
          handleFinishOrder={handleFinishOrder}
        />
      )}
    </>
  );
}
