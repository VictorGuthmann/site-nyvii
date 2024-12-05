"use server";

import { woocommerceClient } from "../lib/wooCommerce";

export const paymentMethod = async () => {
  try {
    const response = await woocommerceClient.get("/payment_gateways");

    const enabledPaymentMethods = response.data.filter(
      (method: any) => method.enabled === true
    );
    return enabledPaymentMethods;
  } catch (error) {
    throw new Error(`Error getting payment methods: ${error}`);
  }
};
