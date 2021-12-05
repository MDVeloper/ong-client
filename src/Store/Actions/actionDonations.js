import axios from "axios";

export const setAmountMP = (amount) => {
    return {
      type: "SET_AMOUNT_MP",
      payload: amount,
    };
  };