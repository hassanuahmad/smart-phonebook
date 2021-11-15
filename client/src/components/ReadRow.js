import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import EditRow from "./EditRow";

const ReadRow = ({
    val,
    deleteContact,
    updateContact,
    contactList,
    setContactList,
}) => {
    const [editView, setEditView] = useState(false);

    const ReadOnlyRow = () => {
        return (
            <tr>
                <td>{val.id}</td>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.phoneNumber}</td>
                <td>{val.emailAddress}</td>
                <td className="text-center">
                    <GrUpdate
                        onClick={() => {
                            setEditView(true);
                        }}
                        style={{ cursor: "pointer" }}
                    />
                </td>
                <td className="text-center">
                    <AiFillDelete
                        onClick={() => {
                            deleteContact(val.id);
                        }}
                        style={{ cursor: "pointer" }}
                    ></AiFillDelete>
                </td>
            </tr>
        );
    };

    return editView ? (
        <EditRow
            val={val}
            updateContact={updateContact}
            setEditView={setEditView}
            contactList={contactList}
            setContactList={setContactList}
        />
    ) : (
        <ReadOnlyRow />
    );
};

export default ReadRow;
