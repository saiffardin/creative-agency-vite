import { ORDER_STATUS } from "../constants/order-status";

export const getTextClassByOrderStatus = (currOrderStatus: string) => {
  switch (currOrderStatus) {
    case ORDER_STATUS.PENDING:
      return "text-danger";

    case ORDER_STATUS.DONE:
      return "text-success";

    case ORDER_STATUS.ON_GOING:
      return "text-warning";

    default:
      return "";
  }
};
