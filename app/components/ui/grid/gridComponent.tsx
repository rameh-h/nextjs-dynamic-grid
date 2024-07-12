'use client'
import React from 'react';

export default function GridComponent(model: GridModel) {
    const columns = model.columns.sort((a, b) => {
        return a.sequence - b.sequence;
    });
    const data = model.data;
    return (
        <div>Table</div>
     /*   <Table striped hover responsive bordered>
            <thead>
            <tr>
                {columns.map((column) => (
                    <th scope="row" key={column.id}>{column.displayName}</th>
                ))}
            </tr>
            </thead>
        </Table>*/
    );
};