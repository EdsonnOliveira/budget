import { StyledProps } from "styled-components";
import { Margins } from "../../../constants/spacing";
import { IndexProps as TagProps } from "../../tag/models";

export interface IndexProps extends Margins {
    title: string;
    subtitle: string;
    tag: TagProps
}

export type IndexStyledProps = StyledProps<IndexProps>