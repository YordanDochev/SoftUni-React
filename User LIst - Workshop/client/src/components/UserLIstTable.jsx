import { useState, useEffect } from "react"

import UserListItem from "./UserListItem"
import * as userService from "../services/userService"
import CreateUserModal from "./CreateUserModal";
import UserInfoModal from "./UserInfoModal";
import UserDeleteModal from "./UserDeleteModal";

const UserListTable = () => {
    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [selectedUser, setSelectedUser] = useState({})


    useEffect(() => {
        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => console.log(err))

    }, [])

    const userCrateClickHandler = () => {
        setShowCreate(true)
    }

    const hideUserCreateModal = () => {
        setShowCreate(false)
    }

    const onClickInfoHandler = async (userId) => {
        setShowInfo(true)

        const user = await userService.getOne(userId)

        setSelectedUser(user)

    }

    const hideInfoModal = () => {
        setShowInfo(false)
    }

    const onClickDeleteHandler = (userId) => {
        setSelectedUser(userId)
        setShowDelete(true)
    }

    const deleteUserHandler = async () => {
        await userService.removeUser(selectedUser)
        
        setUsers(state => state.filter(user => user._id !== selectedUser))

        setShowDelete(false)
    }

    const hideDeleteModal = () => {
        setShowDelete(false)
    }

    const userCreateHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const data = Object.fromEntries(formData)

        const userData = await userService.createUser(data)

        setUsers(users => [...users, userData])

        setShowCreate(false)
    }
    return (
        <div className="table-wrapper">
            {showCreate && (
                <CreateUserModal
                    hideUserCreateModal={hideUserCreateModal}
                    onUserCreate={userCreateHandler}
                />
            )}

            {showInfo && (
                <UserInfoModal
                    hideInfoModal={hideInfoModal}
                    user={selectedUser}
                />
            )}

            {showDelete && (
                <UserDeleteModal
                hideDeleteModal ={hideDeleteModal}
                onDelete = {deleteUserHandler}
                />
            )}

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <UserListItem
                            key={user._id}
                            _id={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            phoneNumber={user.phoneNumber}
                            createdAt={user.createdAt}
                            imageUrl={user.imageUrl}
                            onClickInfoHandler={onClickInfoHandler}
                            onClickDeleteHandler={onClickDeleteHandler}


                        />
                    )}

                </tbody>
            </table>

            <button className="btn-add btn" onClick={userCrateClickHandler}>Add new user</button>

        </div>
    )
}

export default UserListTable