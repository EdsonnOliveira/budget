import { StyledProps } from "styled-components";
import { Margins } from "../../constants/spacing";

export default interface Main extends Margins {
    text: string;
    type: Types;
    color?: string;
    align?: Alignments
}

type Types = 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
type Alignments = 'auto' | 'center' | 'justify' | 'right';

export type IndexStyledProps = StyledProps<{
    color: string;
    textAlign: 'auto' | 'center' | 'justify' | 'right'
}>