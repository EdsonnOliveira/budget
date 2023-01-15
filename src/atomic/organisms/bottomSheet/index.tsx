import React from "react";
import Text from "../../atoms/text";

import { IndexProps } from "./models";
import { Backdrop, ButtonClose, Header, Main, ButtonCloseImg, Body, BoxModal, Footer } from "./style";

import CloseImg from '../../../assets/icons/x.png'
import Radio from "../../molecules/radio";
import { ItemsRadio } from "../../molecules/radio/models";
import List from "../../molecules/list";
import Button from "../../atoms/button";
import BoxCommon from "../../atoms/boxes/boxCommon";

const BottomSheet: React.FC<IndexProps> = ({
    title,
    description,
    descriptionBold,
    type,
    items,
    selectedItem,
    setSelectedItem,
    visible,
    setState,
    buttonConfirm,
    onShow,
    onClose,
}) => {
    if (!visible) return <></>

    return (
        <BoxModal
            onRequestClose={onClose}
            onShow={onShow}
            transparent
        >
            <Backdrop onPress={() => setState(false)} />
            <Main>
                <Header>
                    <Text type='H2' text={title} />
                    <ButtonClose onPress={() => setState(false)}>
                        <ButtonCloseImg source={CloseImg} />
                    </ButtonClose>
                </Header>
                <Body>
                    {
                        items?.length > 0 && type == 'radio' && (
                            <Radio
                                items={items}
                                selected={selectedItem}
                                setSelected={(selected: ItemsRadio) => {
                                        setSelectedItem({id: selected.id, description: selected.description});
                                        setState(false)
                                    }
                                }
                            />
                        )
                    }
                    {
                        items?.length > 0  && type == 'list' && (
                            <List
                                items={items}
                            />
                        )
                    }
                    {
                        type == 'question' && (
                            <BoxCommon flexDirection='row' justifyContent='center' alignItems='center' flex>
                                <Text type='H3' weight='500' align='center' text={description} textBold={descriptionBold} />
                            </BoxCommon>
                        )
                    }
                    {
                        type == 'scanner' && (
                            <></>
                        )
                    }
                </Body>
                {
                    buttonConfirm && (
                        <Footer>
                            <Button type={buttonConfirm?.type} text={buttonConfirm?.text} onPress={buttonConfirm?.onPress} />
                        </Footer>
                    )
                }
            </Main>
        </BoxModal>
    )
}

export default BottomSheet;