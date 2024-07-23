'use client'

import React, {useState, useEffect, Fragment} from 'react';
import {User} from "@/app/components/model/user.model";
import {getColumns} from "@/app/api/columns/columns.api";
import {getUserById, getUsers, postUser, putUser, removeUserById} from "@/app/api/users/users.api";
import GridComponent from "@/app/components/ui/grid/gridComponent";
import {DynamicColumn} from "@/app/components/model/dynamicColumn";
import {ColumnModel} from "@/app/components/ui/grid/model/columnModel";
import ConfirmDialog from "@/app/components/ui/dialog/confirmDialog";
import DynamicForm from "@/app/components/ui/forms/DynamicForm";
import Toast from "@/app/components/ui/toas/toast";
import AppLayout from "@/app/layout/appLayout";
import RootLayout from "@/app/layout";
import {usePathname} from "next/navigation";

function GridPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [formData, setFormData] =
        useState<object>();
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [columns, setColumns] = useState<DynamicColumn[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [dialogMode, setDialogMode] =
        useState<"DELETE" | "EDIT" | "SAVE">("SAVE");
    const [_id, setId] = useState<string>("");
    const [toastShow, setToastShow] = useState<boolean>(false);
    const [toastMode, setToastMode] =
        useState<"ALERT" | "INFO" | "SUCCESS" | "ERROR">("SUCCESS");
    const [toastObj, setToastObj] =
        useState<{ title?: string, description?: string }>({
            title: undefined,
            description: undefined
        });
    const [tableRefresh, setTableRefresh] = useState<number>(0);


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

    }, [tableRefresh]);

    function onDelete(id: string) {
        setId(id);
        setDialogMode("DELETE");
        setShowDialog(true);
    }

    function handleDelete(id: string) {
        removeUserById(id)
            .then((res) => {
                if (res.ok) {
                    setShowDialog(false);
                    setModalShow(false);
                    setToastMode("SUCCESS");
                    setTableRefresh(tableRefresh + 1);
                } else {
                    setToastObj({title: "Error", description: res.statusText});
                    setToastMode("ERROR");
                }
            })
            .finally(() => {
                setToastShow(true);
            });
    }

    function onEdit(id: string) {
        setId(id);
        getUserById(id)
            .then((res) => {
                const data = res.json();
                data.then((res) => {
                    setFormData(res);
                }).then(() => {
                    setDialogMode("EDIT");
                    setModalShow(true);
                });
            })
            .catch((error) => {
                setToastMode("ERROR");
                setToastShow(true);
            });
    }

    function ConfirmAction() {
        if (dialogMode == "DELETE") {
            handleDelete(_id);
        } else if (dialogMode == "EDIT")
            handleEdit();
        else {
            handleSave();
        }
    }

    function handleEdit() {
        putUser(formData as User, _id)
            .then((res) => {
                if (res.ok) {
                    setToastMode("SUCCESS");
                    setTableRefresh(tableRefresh + 1);
                } else {
                    setToastObj({title: "Error", description: res.statusText});
                    setToastMode("ERROR");
                }
            }).finally(() => {
            setToastShow(true);
            setShowDialog(false);
            setModalShow(false);
        });
    }

    function handleSave() {
        postUser(formData as User)
            .then((res) => {
                if (res.ok) {
                    setToastMode("SUCCESS");
                    setTableRefresh(tableRefresh + 1);
                } else {
                    setToastObj({title: "Error", description: res.statusText});
                    setToastMode("ERROR");
                }
            })
            .finally(() => {
                setToastShow(true);
                setShowDialog(false);
                setModalShow(false);
            })
    }

    const handleChange = (field: string, value: string | Date | boolean) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

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

    const path = usePathname();
    const Layout = path == "/" ? Fragment : AppLayout;

    if (isLoading)
        return <div>Loading...</div>;
    if (!columns && !users)
        return <div>No Data!!!</div>;
    const description =
        "A list of all the users in your account including their name, title, email and job title.";

    return (
        <Layout>
            <GridComponent columns={mapColumns(columns)} data={users}
                           gridOperations={[
                               {
                                   title: "Remove", onClick: onDelete
                               },
                               {
                                   title: "Edit", onClick: onEdit
                               }
                           ]}
                           gridHeader={{
                               title: "Users",
                               description: description,
                               button: {
                                   title: "Add User",
                                   onClick: () => {
                                       setFormData(undefined);
                                       setModalShow(true);
                                       setDialogMode("SAVE");
                                   }
                               }
                           }}/>
            <DynamicForm modalShow={modalShow}
                         setModalShow={setModalShow}
                         title={"Add/Edit User"}
                         description={description}
                         columns={columns}
                         onClickConfirm={() => {
                             setShowDialog(true);
                         }}
                         data={formData}
                         handleChange={handleChange}
            />

            <ConfirmDialog open={showDialog}
                           setOpen={setShowDialog}
                           onClickConfirm={ConfirmAction}
                           mode={dialogMode}
            />
            <Toast show={toastShow}
                   setShow={setToastShow}
                   mode={toastMode}
                   title={toastObj.title}
                   description={toastObj.description}/>
        </Layout>
    )
}

export default GridPage;