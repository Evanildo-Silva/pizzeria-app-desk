import DashboardDisplay from "@/components/DashboardDisplay";
import Header from "@/components/Hearder";
import { getOrders } from "@/lib/actions/orders";

export default async function Dashboard() {
  const orders: any = await getOrders();
  return (
    <div>
      <Header />
      <DashboardDisplay orderList={orders} />
    </div>
  );
}
