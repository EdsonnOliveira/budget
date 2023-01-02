export interface IndexProps {
    items: ItemsList[]
}

export type ItemsList = {
    title: string;
    value: string;
    type?: TypeItemList;
}

type TypeItemList = 'big' | 'normal'