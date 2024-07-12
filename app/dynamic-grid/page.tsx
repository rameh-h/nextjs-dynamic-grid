'use client'

import React from 'react';
import GridComponent from "@/app/components/ui/grid/gridComponent";
import {getDynamicColumn} from "@/app/api/dynamicColumn/dynamicColumn.api";

export default function GridPage(){

    return (
        <div>
            <GridComponent columns={[]} data={[]}/>
        </div>
    )
}