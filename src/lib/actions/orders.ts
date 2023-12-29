import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchWrapper } from "@/services/api";
import { getServerSession } from "next-auth";

export async function getOrders() {
  const session = await getServerSession(nextAuthOptions);
  const token = session?.user.token;

  try {
    const orders = await fetchWrapper("order/confirmed", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return orders;
  } catch (error) {
    return {
      error: "Error ao carregar categorias",
    };
  }
}
