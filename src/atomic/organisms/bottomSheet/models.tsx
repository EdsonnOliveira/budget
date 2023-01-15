import { ButtonTypes } from "../../atoms/button/models";
import { ItemsList } from "../../molecules/list/models";
import { ItemsRadio } from "../../molecules/radio/models";

export interface IndexProps {
    title: string;
    description?: string;
    descriptionBold?: string;
    type: TypeModal,
    items?: ItemsRadio[] | ItemsList[];
    selectedItem?: number;
    setSelectedItem?: (selected: ItemsRadio) => void;
    visible: boolean;
    setState: (state: boolean) => void;
    buttonConfirm?: ButtonConfirm;
    returnConfirm?: (data: string) => void;
    onShow?: () => void;
    onClose?: () => void;
}

type TypeModal = 'radio' | 'question' | 'list' | 'scanner';
type ButtonConfirm = {
    type: ButtonTypes;
    text: string;
    disabled?: boolean;
    onPress: () => void;
}