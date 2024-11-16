import "./ServiceListAdmin.css";
import { useGetOrders } from "@hooks/useGetOrders";
import { OnChangeSelectEvent } from "types/event-types";
import { useUpdateOrderStatus } from "@hooks/useUpdateOrderStatus";
import { getTextClassByOrderStatus } from "./helper/get-text-class-by-order-status";
import Table from "@components/Table";
import { orderTableColumns } from "./constants/order-table";

const ServiceListAdmin = () => {
  const { clients, orderIds } = useGetOrders();

  console.log(clients);

  const { updateOrderStatusById } = useUpdateOrderStatus();

  const handleChange = (e: OnChangeSelectEvent) => {
    const target = e.target as HTMLSelectElement;
    const currOrderStatus = target.value;

    const tableRow = target.parentNode?.parentNode as HTMLElement;
    const tableIndex = Number(tableRow.getElementsByTagName("td")[0].innerHTML);
    const currentOrderID = orderIds[tableIndex - 1];

    target.className = getTextClassByOrderStatus(currOrderStatus);

    updateOrderStatusById(currentOrderID, currOrderStatus);
  };

  return (
    <div className="admin-serviceList">
      <Table rows={clients} columns={orderTableColumns} />
    </div>
  );
};

export default ServiceListAdmin;
