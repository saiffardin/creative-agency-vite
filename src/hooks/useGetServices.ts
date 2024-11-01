import { useState } from "react";
import { GET } from "@api/GET";
import { URLS } from "@constants/urls";
import { ServiceType } from "./types/service-types";

interface HookRetType {
  allServices: ServiceType[];
  getAllServices: () => void;
}

const { GET_ALL_SERVICES } = URLS;

export const useGetServices = (): HookRetType => {
  const [allServices, setAllServices] = useState<ServiceType[]>([]);

  const getAllServices = async () => {
    try {
      const response = await GET<ServiceType[]>({
        url: GET_ALL_SERVICES,
      });
      setAllServices(response || []);
    } catch (error) {
      console.log(error);
      setAllServices([]);
    }
  };

  return { allServices, getAllServices };
};
