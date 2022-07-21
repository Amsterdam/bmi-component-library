import React from 'react';

export type Props = {
    key: string;
    cols: any[];
    element: any;
    // categoryId: string,
    // code: string,
    // conditionId: string,
    // constructionType: string,
    // constructionYear: number,
    // deletedAt: string,
    // elementGroupName: string,
    // gisibId: number,
    // id: string,
    // isArchived: boolean,
    // isElectrical: boolean,
    // isElectricalObjectSpecific: boolean,
    // isRelevant: boolean,
    // isStructural: boolean,
    // isStructuralObjectSpecific: boolean,
    // location: string,
    // name: string,
    // objectId: string,
    // observationPointId: string,
    // surveyId: string,
    // units: any[],
}

const DecompositionElement: React.FunctionComponent<Props> = ({
    cols,
    element
}: Props) => {
    return (
        <tr>
            {cols.map(col => <td key={col.field}>{element[col.field]}</td>)}
        </tr>
    )
};

export default DecompositionElement;