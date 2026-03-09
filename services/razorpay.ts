import { supabase } from "./supabase";

const RAZORPAY_KEY_ID = 'rzp_live_Wh4xEHePkQXqRO';

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme: {
    color: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => any;
  }
}

export const openRazorpayCheckout = async ({
  amount,
  courseIds,
  userPhone,
  userEmail,
  onSuccess,
  onCancel,
  onError
}: {
  amount: number;
  courseIds: string[];
  userPhone: string;
  userEmail: string;
  onSuccess: (paymentId: string) => void;
  onCancel?: () => void;
  onError: (error: any) => void;
}) => {
  if (!window.Razorpay) {
    alert('Razorpay SDK failed to load. Please check your internet connection.');
    onError('SDK_NOT_LOADED');
    return;
  }

  try {
    // 1. Call Edge Function to create Order
    const { data: orderData, error: orderError } = await supabase.functions.invoke('razorpay-order', {
      body: { amount, course_ids: courseIds, user_phone: userPhone, user_email: userEmail }
    });

    if (orderError || !orderData?.orderId) {
      console.error('Order creation error:', orderError, orderData);
      throw new Error(orderError?.message || orderData?.error || 'Failed to create payment order');
    }

    const options: RazorpayOptions = {
      key: RAZORPAY_KEY_ID,
      amount: Math.round(amount * 100),
      currency: "INR",
      name: "Avada Bazaar",
      description: `${courseIds.length} Course${courseIds.length > 1 ? 's' : ''} Selected`,
      order_id: orderData.orderId,
      handler: async function (response: any) {
        // 2. Call Edge Function to verify signature
        const { data: verifyData, error: verifyError } = await supabase.functions.invoke('razorpay-verify', {
          body: {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          }
        });

        if (verifyError || !verifyData?.success) {
          onError(verifyError?.message || 'Payment verification failed');
        } else {
          onSuccess(response.razorpay_payment_id);
        }
      },
      prefill: {
        email: userEmail,
        contact: userPhone
      },
      theme: {
        color: "#D90429"
      },
      modal: {
        ondismiss: function () {
          if (onCancel) onCancel();
        }
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  } catch (error) {
    console.error("Razorpay Integration Error:", error);
    onError(error);
  }
};
