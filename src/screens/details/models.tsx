import { ItemsRadio } from "../../atomic/molecules/radio/models";
import { ItemType, ModalType } from "../../constants/types";
import { Models as ModelsSales } from '../../services/sales'

export interface ViewProps {
    data: ModelsSales | null | undefined;
    total: string;
    products: ItemType[] | null;
    setModalPayment: ModalType;
    paymentSelected: ItemsRadio;
    setModalItem: ModalType;
    setItemSelected: (item: number) => void;
    setItemSelectedSeq: (item: number) => void;
    disabledFinish: boolean;
    finishSale: () => void;
}