import { NotificationProps } from "../../../atomic/atoms/notification/models";

export interface ViewProps {
    name: string;
    setName: (text: string) => void;
    price: string;
    setPrice: (text: string) => void;
    barCode: string;
    setBarCode: (text: string) => void;
    buttonDisabled: boolean;
    notification: NotificationProps;
    insert: () => void;
}