import { useEffect, useState } from "react"
import { getAvailableMaterials } from "../../data/materialsData"
import { Link, useNavigate } from "react-router-dom"
import { Table } from "reactstrap"

export const AvailableList = () => {
  const [availableMaterials, setAvailableMaterials] = useState([])
  const navigate = useNavigate()

  const getAndSetAvailableMaterials = () => {
    getAvailableMaterials().then(arr => setAvailableMaterials(arr))
  }

  useEffect(() => {
    getAndSetAvailableMaterials()
  }, [])

  const handleCheckoutBtn = (e, id) => {
    e.preventDefault()
    navigate(`/checkouts/${id}/form`)
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {availableMaterials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>Details</Link>
              </td>
              <td><button onClick={e => handleCheckoutBtn(e, m.id)}>Checkout</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}