import { GET } from "@api/GET";
import { URLS } from "@constants/urls";
import { useEffect, useState } from "react";
import { OrderType } from "./types/order-types";

const { GET_ALL_ORDERS } = URLS;

interface HookRetType {
  clients: OrderType[];
  orderIds: string[];
}

export const useGetOrders = (): HookRetType => {
  const [clients, setClients] = useState<OrderType[]>([]);
  const [orderIds, setOrderIds] = useState<string[]>([]);

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    try {
      const data = await GET<OrderType[]>({
        url: GET_ALL_ORDERS,
      });

      const onlyIDs = data.map((item) => item._id);
      const mappedClientData = data.map((item, indx) => ({
        ...item,
        index: indx + 1,
      }));

      setClients(mappedClientData);
      setOrderIds(onlyIDs);
    } catch (error) {
      console.error(error);
      setClients([]);
      setOrderIds([]);
    }
  };

  return { clients, orderIds };
};
