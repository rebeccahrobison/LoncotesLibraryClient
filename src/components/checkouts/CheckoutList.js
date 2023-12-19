import { useEffect, useState } from "react"
import { Table } from "reactstrap"
import { getCheckouts, returnCheckout } from "../../data/checkoutsData"

export const CheckoutList = () => {
  const [checkouts, setCheckouts] = useState([])

  const getAndSetCheckouts = () => {
    getCheckouts().then(arr => setCheckouts(arr))
  }

  useEffect(() => {
    getAndSetCheckouts()
  }, [])

  const handleReturnBtn = (e, id) => {
    e.preventDefault()
    returnCheckout(id).then(() => getAndSetCheckouts())
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
         <h4>Checkouts</h4>
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
          {checkouts.map(co => (
            <tr key={`checkouts-${co.id}`}>
              <th scope="row">{co.id}</th>
              <th>{co?.material?.materialName}</th>
              <th>{co?.patron.firstName} {co?.patron?.lastName}</th>
              <th>{co?.checkoutDate?.slice(0, 10)}</th>
              <th><button onClick={e => handleReturnBtn(e, co.id)}>Return</button></th>
            </tr>
          ))}
        </tbody>
       </Table>
    </div>


  )
}

    // <div className="container">
    //   <div className="sub-menu bg-light">
    //     <h4>Patrons</h4>
    //   </div>
    //   <Table>
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>First Name</th>
    //         <th>Last Name</th>
    //         <th>Address</th>
    //         <th>Email</th>
    //         <th>Active</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {patrons.map(p => (
    //         <tr key={`patrons-${p.id}`}>
    //           <th scope="row">{p.id}</th>
    //           <td>{p.firstName}</td>
    //           <td>{p.lastName}</td>
    //           <td>{p.address}</td>
    //           <td>{p.email}</td>
    //           <td>{p.isActive ? 'true' : 'false'}</td>
    //           <td>
    //             <Link to={`${p.id}`}>Details</Link>
    //           </td>
    //           <td>
    //             {p.isActive ? <button onClick={e => handleDeactivateBtn(e, p.id)}>Deactivate</button> : ""}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    // </div>