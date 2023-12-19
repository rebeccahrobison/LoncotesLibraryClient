import { useEffect, useState } from "react"
import { getOverdueCheckouts } from "../../data/checkoutsData"
import { Table } from "reactstrap"

export const OverdueCheckoutList = () => {
  const [overdueCheckouts, setOverdueCheckouts] = useState([])

  const getAndSetOverdueCheckouts = () => {
    getOverdueCheckouts().then(arr => setOverdueCheckouts(arr))
  }

  useEffect(() => {
    getAndSetOverdueCheckouts()
  }, [])

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Overdue Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Material Name</th>
            <th>Patron Name</th>
            <th>Checkout Date</th>
          </tr>
        </thead>
        <tbody>
          {overdueCheckouts.map(co => (
            <tr key={`checkouts-${co.id}`}>
              <th scope="row">{co.id}</th>
              <th>{co?.material?.materialName}</th>
              <th>{co?.patron.firstName} {co?.patron?.lastName}</th>
              <th>{co?.checkoutDate?.slice(0, 10)}</th>
            </tr>
          ))}
        </tbody>
       </Table>
    </div>
  )
}