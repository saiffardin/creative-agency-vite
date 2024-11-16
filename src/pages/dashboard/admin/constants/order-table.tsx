import { TableColumns } from "@components/Table";
import { OrderType } from "@hooks/types/order-types";

export const orderTableColumns: TableColumns<OrderType> = [
  { key: "index", label: "No." },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "service", label: "Service" },
  { key: "projectDetail", label: "Project Detail" },
  { key: "status", label: "Status" },
];
