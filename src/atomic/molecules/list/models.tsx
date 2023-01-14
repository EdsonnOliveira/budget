export interface IndexProps {
    items: ItemsList[]
}

export type ItemsList = {
    title: string;
    value: string;
    valueNumber?: number;
    type?: TypeItemList;
}

type TypeItemList = 'big' | 'normal'