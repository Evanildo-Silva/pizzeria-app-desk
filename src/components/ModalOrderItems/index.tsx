import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import { OrderProps } from "../DashboardDisplay";

type ModalOrderDetailsProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  orderItems?: OrderProps;
  handleFinishOrder: (id: string) => void;
};

export default function ModalOrderDetails({
  isOpen,
  onRequestClose,
  orderItems,
  handleFinishOrder,
}: ModalOrderDetailsProps) {
  const customStyle = {
    content: {
      top: "50%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      padding: "1.875rem",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1d1d2e",
    },
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyle}>
      <div className="flex flex-row items-center justify-between mb-3">
        <h2 className="font-semibold text-3xl">Detalhes do pedido</h2>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          style={{ background: "transparent", border: 0 }}
        >
          <FiX size={45} color="#f34741" />
        </button>
      </div>
      <div className="w-[38.75rem] sm:w-[20rem]">
        <span className="flex flex-row gap-4">
          <p className="text-2xl">
            Mesa: <strong>{orderItems?.table}</strong>
          </p>
          {orderItems?.name && (
            <p>
              Clente: <strong>{orderItems?.name}</strong>
            </p>
          )}
        </span>
        {orderItems?.items.map((item) => (
          <section
            key={item.id}
            className="flex flex-col p-4 mt-4 rounded-md bg-foreground"
          >
            <span className="flex items-center text-2xl gap-2">
              {item.amount} -{" "}
              <strong className="text-btn-primary">{item.product.name}</strong>
            </span>
            <p className="break-all mt-2">{item.product.description}</p>
          </section>
        ))}
        <button
          className="mt-6 bg-foreground text-btn-secondary py-2 px-4 rounded-md"
          onClick={() => handleFinishOrder(orderItems!.id)}
        >
          Concluir pedido
        </button>
      </div>
    </Modal>
  );
}
