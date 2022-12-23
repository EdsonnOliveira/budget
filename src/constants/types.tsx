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