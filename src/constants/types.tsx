export enum PaymentTypes {
    money = 'Dinheiro',
    credit = 'Crédito',
    debit = 'Débito'
}

export interface BudgetType {
    sequence: string | number;
    payment?: PaymentTypes
    time?: string;
    value: string;
}

export interface ItemType {
    id: string | number;
    sequence: string | number;
    name: string;
    value: string;
    barCode: string;
}

export type ModalType = (state: boolean) => void;

export type IconType = {
    source: string;
    width: string | number;
    height: string | number;
    top?: string | number;
    left?: string | number;
    position?: string
}