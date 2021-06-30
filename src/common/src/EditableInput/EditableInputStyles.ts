import styled from "styled-components";

import CancelIcon from "@material-ui/icons/Cancel";
import ReplayIcon from "@material-ui/icons/Replay";

export const InputContainerStyle = styled.div`
    position: relative;
    display: inline;
`;

export const CancelIconStyle = styled(CancelIcon)`
    && {
        position: absolute;
        right: 4px;
        top: 6px;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`

export const ReplayIconStyle = styled(ReplayIcon)`
    position: absolute;
    transform: rotate(270deg);
  `;