import { Form } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import Axios from "axios";

const EditRow = ({ val, setEditView, setContactList, contactList }) => {
    const [newFirstName, setNewFirstName] = useState(val.firstName);
    const [newLastName, setNewLastName] = useState(val.lastName);
    const [newPhoneNumber, setNewPhoneNumber] = useState(val.phoneNumber);
    const [newEmailAddress, setNewEmailAddress] = useState(val.emailAddress);

    const updateContact = (id) => {
        Axios.put("https://smart-phonebook.herokuapp.com/update", {
            id: id,
            firstName: newFirstName,
            lastName: newLastName,
            phoneNumber: newPhoneNumber,
            emailAddress: newEmailAddress,
        }).then(() => {
            setContactList(
                contactList.map((val) => {
                    return val.id === id
                        ? {
                              id: val.id,
                              firstName: newFirstName,
                              lastName: newLastName,
                              phoneNumber: newPhoneNumber,
                              emailAddress: newEmailAddress,
                          }
                        : val;
                })
            );
        });
        setEditView(false);
    };

    return (
        <tr>
            <td>{val.id}</td>
            <td>
                <Form.Control
                    type="text"
                    required
                    name="firstName"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                />
            </td>
            <td>
                <Form.Control
                    type="text"
                    name="lastName"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                />
            </td>
            <td>
                <Form.Control
                    type="number"
                    name="phoneNumber"
                    value={newPhoneNumber}
                    onChange={(e) => setNewPhoneNumber(e.target.value)}
                />
            </td>
            <td>
                <Form.Control
                    type="email"
                    name="emailAddress"
                    value={newEmailAddress}
                    onChange={(e) => setNewEmailAddress(e.target.value)}
                />
            </td>
            <td className="text-center">
                <BsFillCheckCircleFill
                    onClick={() => {
                        updateContact(val.id);
                    }}
                    style={{ cursor: "pointer" }}
                />
            </td>
            <td className="text-center">
                <MdCancel
                    onClick={() => {
                        setEditView(false);
                    }}
                    style={{ cursor: "pointer" }}
                />
            </td>
        </tr>
    );
};

export default EditRow;
