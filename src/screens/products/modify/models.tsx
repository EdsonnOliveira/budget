export interface ViewProps {
    name: string;
    setName: (text: string) => void;
    price: string;
    setPrice: (text: string) => void;
    barCode: string;
    setBarCode: (text: string) => void;
}