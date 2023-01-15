import { NotificationProps } from "../../../atomic/atoms/notification/models";
import { ModalType } from "../../../constants/types";

export interface ViewProps {
    name: string;
    setName: (text: string) => void;
    price: string;
    setPrice: (text: string) => void;
    barCode: string;
    setBarCode: (text: string) => void;
    buttonDisabled: boolean;
    setModalBarCode: ModalType;
    notification: NotificationProps;
    setModalDelete: (state: boolean) => void;
    update: () => void;
    del: () => void;
}