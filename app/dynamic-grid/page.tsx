'use client'

import React, {useState, useEffect, Fragment} from 'react';

import {User} from "@/app/components/model/user.model";
import AddUser from "@/app/components/ui/forms/AddUser";
import getColumns from "@/app/api/columns/columns.api";
import {getUsers} from "@/app/api/users/users.api";
import GridComponent from "@/app/components/ui/grid/gridComponent";
import {DynamicColumn} from "@/app/components/model/dynamicColumn";
import {ColumnModel} from "@/app/components/ui/grid/model/columnModel";

export default function GridPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [columns, setColumns] = useState<DynamicColumn[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getColumns()
            .then((res) => res.json())
            .then((data) => {
                setColumns(data);
            });
        getUsers()
            .then((res) => res.json())
            .then((users) => {
                setUsers(users);
                setLoading(false);
            });

    }, []);

    const onDelete = () => {
        console.log('delete');
    }
    const onEdit = () => {
        console.log('edit');
    }
    const onAddUser = () => {
        setModalShow(!modalShow);
    }
    if (isLoading)
        return <div>Loading...</div>;
    if (!columns && !users)
        return <div>No Data!!!</div>;
    const description =
        "A list of all the users in your account including their name, title, email and job title.";

    return (
        <>
            <GridComponent columns={mapColumns(columns)} data={users}
                           gridOperations={[{title: "Remove", onClick: onDelete}, {title: "Edit", onClick: onEdit}]}
                           gridHeader={{
                               title: "Users",
                               description: description,
                               button: {title: "Add User", onClick: onAddUser}
                           }}/>
            <AddUser modalShow={modalShow}
                     setModalShow={setModalShow}
                     title={"Add/Edit User"}
                     description={description}
                     columns={columns}/>
        </>

    )
}

function mapColumns(columns: DynamicColumn[]): ColumnModel[] {
    return columns.map((x, index) => {
        return {
            id: x.id,
            displayName: x.displayName,
            sequence: x.sequence ?? index + 1,
            isKey: x.isKey,
            columnTypeId: x.columnType,
            filed: x.alias,
            isVisible: !x.isHidden
        }
    });
}
