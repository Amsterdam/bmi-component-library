import React from 'react';
import { StyledTableContent } from './DecompositionTableStyles';
import DecompositionElement from './DecompositionElement';

export type Props = {
    columns?: any[];
    elements: any[];
    manifestations: any[];
}



const DecompositionTableContent: React.FunctionComponent<Props> = ({
    columns,
    elements,
    manifestations,
}: Props) => {

    // const tableElements = useMemo(() => {
    //     const elements = manifestations.map(manifestation => {
    //         const element = elements.find(element => element.id === manifestation.elementId);

    //         return {
    //             ...element,
    //             ...manifestation,
    //         };
    //     }).filter(element => element.id !== undefined);

    //     return elements;
    // }, [elements, manifestations]);


    return (
        <StyledTableContent>
            {
                elements.map(element => <DecompositionElement key={element.id} cols={columns} element={element} />)
            }
        </StyledTableContent>
    )
};

export default DecompositionTableContent;