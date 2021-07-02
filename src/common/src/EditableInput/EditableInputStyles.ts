import styled from "styled-components";
import { themeColor } from '@amsterdam/asc-ui';
import { Input } from '@amsterdam/asc-ui';

import CancelIcon from "@material-ui/icons/Cancel";
import ReplayIcon from "@material-ui/icons/Replay";

export const EditableInputStyle = styled.div`
    color:${themeColor('tint', 'level4')};
    font-weight: 500;
    width: 100%;
`;

export const InputContainerStyle = styled.div`
    position: relative;
    display: inline;
    width: 100%;
`;

export const InputStyles = styled(Input)`
    min-width: 70px;
    max-width: 620px;
    line-height:22px;
    padding-left: 10px;
    color:${themeColor('tint', 'level4')};

    &:focus {
        outline:none;
    }
`;

export const ClearIconStyle = styled(CancelIcon)`
    position: absolute;
    top: -3px;
    right: 4px;
    cursor: pointer;
`

export const RestoreIconStyle = styled(ReplayIcon)`
    position: absolute;
    top: 25px;
    transform: rotate(310deg);
    margin-left: 5px;
`;

export const LabelStyle = styled.div`
    width: 240px;
    min-width: 70px;
    max-width: 620px;
    line-height:22px;
    padding: 12px 9px 9px 11px;
`;