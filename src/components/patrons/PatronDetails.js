import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPatronById } from "../../data/patronsData";
import { Button, Table } from "reactstrap";

export const PatronDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patron, setPatron] = useState(null)

  useEffect(() => {
    getPatronById(id).then(obj => setPatron(obj))
  }, [id])

  const handleBtnClick = (e) => {
    e.preventDefault();
    navigate("edit")
  }

  return (
    <div className="container">
      <h2>{patron?.firstName} {patron?.lastName}</h2>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Active</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <th scope="row">{patron?.id}</th>
          <th>{patron?.firstName}</th>
          <th>{patron?.lastName}</th>
          <th>{patron?.address}</th>
          <th>{patron?.email}</th>
          <th>{patron?.isActive ? 'true' : 'false'}</th>
          <th>${patron?.balance}</th>
        </tbody>
      </Table>
      <Button onClick={e => handleBtnClick(e)}>Edit Patron Details</Button>
    </div>
  )
}