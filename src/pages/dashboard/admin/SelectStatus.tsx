import React from "react";
import { getTextClassByOrderStatus } from "./helper/get-text-class-by-order-status";
import { OrderType } from "@hooks/types/order-types";
import { OnChangeSelectEvent } from "types/event-types";

interface Props {
  client: OrderType;
  handleChange: (e: OnChangeSelectEvent) => void;
}

const SelectStatus = ({ client, handleChange }: Props) => {
  return (
    <select
      style={{ border: "0" }}
      className={getTextClassByOrderStatus(client.status || "")}
      id="dropdown"
      onChange={handleChange}
    >
      <option className="d-none" disabled selected>
        {" "}
        {client.status}{" "}
      </option>
      <option className="text-body" value="Pending">
        Pending
      </option>
      <option className="text-body" value="Done">
        Done
      </option>
      <option className="text-body" value="On-Going">
        On-Going
      </option>
    </select>
  );
};

export default SelectStatus;
