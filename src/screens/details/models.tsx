import { ItemsRadio } from "../../atomic/molecules/radio/models";
import { ItemType, ModalType } from "../../constants/types";
import { Models as ModelsSales } from '../../services/sqlite/sales'

export interface IndexProps {
    setValueSoldToday: (valueSoldToday: string) => void
}

export interface ViewProps {
    data: ModelsSales | null | undefined;
    total: string;
    products: ItemType[] | null;
    payments: ItemsRadio[];
    paymentSelected: number;
    setPaymentSelected: (id: number) => void;
    setModalItem: ModalType;
    setItemSelected: (item: number) => void;
    setItemSelectedSeq: (item: number) => void;
    disabledFinish: boolean;
    finishSale: () => void;
}