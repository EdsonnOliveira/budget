export enum PaymentTypes {
    money = 'Dinheiro',
    credit = 'Crédito',
    debit = 'Débito'
}

export interface BudgetType {
    sequence: string | number;
    payment: PaymentTypes
    value: string;
}

export interface ItemType {
    sequence: string | number;
    name: string;
    value: string;
    barCode: string;
}

export type ModalType = (state: boolean) => void;