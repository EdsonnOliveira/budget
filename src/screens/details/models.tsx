import { Items } from "../../atomic/molecules/radio/models";

export interface ViewProps {
    itemsPayment: Items[];
    paymentSelected: number;
    setPaymentSelected: (payment: number) => void;
}