import { useEffect, useState } from "react"
import { activatePatron, deactivatePatron, getPatrons } from "../../data/patronsData"
import { Link } from "react-router-dom"
import { Table } from "reactstrap"


export const PatronList = () => {
  const [patrons, setPatrons] = useState([])

  const getAndSetPatrons = () => {
    getPatrons().then(arr => setPatrons(arr))
  }

  useEffect(() => {
    getAndSetPatrons()
  }, [])

  const handleDeactivateBtn = (e, id) => {
    e.preventDefault()
    console.log("button clicked")
    deactivatePatron(id).then(() => getAndSetPatrons())
  }

  const handleActivateBtn = (e, id) => {
    e.preventDefault()
    activatePatron(id).then(() => getAndSetPatrons())
  }

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
            {/* <th>Active</th> */}
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
              {/* <td>{p.isActive ? 'true' : 'false'}</td> */}
              <td>
                <Link to={`${p.id}`}>Details</Link>
              </td>
              <td>
                {p.isActive ? 
                  <button onClick={e => handleDeactivateBtn(e, p.id)}>Deactivate</button> 
                  : 
                  <button onClick={e => handleActivateBtn(e, p.id)}>Activate</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}