import { useEffect, useState } from "react"
import { getPatrons } from "../../data/patronsData"
import { Link } from "react-router-dom"
import { Table } from "reactstrap"


export const PatronList = () => {
  const [patrons, setPatrons] = useState([])

  useEffect(() => {
    getPatrons().then(arr => setPatrons(arr))
  }, [])

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Patrons</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {patrons.map(p => (
            <tr key={`patrons-${p.id}`}>
              <th scope="row">{p.id}</th>
              <td>{p.firstName}</td>
              <td>{p.lastName}</td>
              <td>{p.address}</td>
              <td>{p.email}</td>
              <td>{p.isActive ? 'true' : 'false'}</td>
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}