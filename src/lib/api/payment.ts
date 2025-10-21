import { strapiAPI } from './strapi';

export const paymentService = {
  // Create booking with selected payment method
  async createBooking(data: any, paymentMethod: string) {
    const response = await strapiAPI.post('/bookings', {
      data: {
        ...data,
        paymentMethod,
      },
    });
    return response.data;
  },

  // Verify Chapa payment
  async verifyChapPayment(tx_ref: string) {
    const response = await strapiAPI.post('/bookings/verify-chapa-payment', {
      tx_ref,
    });
    return response.data;
  },

  // Verify Stripe payment  
  async verifyStripePayment(sessionId: string) {
    const response = await strapiAPI.post('/bookings/confirm-payment', {
      sessionId,
    });
    return response.data;
  },

  // Get payment status
  async getPaymentStatus(bookingId: string) {
    const response = await strapiAPI.get(`/bookings/${bookingId}/payment-status`);
    return response.data;
  },
};