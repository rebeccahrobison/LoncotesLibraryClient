import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMaterial } from "../../data/materialsData";
import { checkoutMaterial } from "../../data/checkoutsData";

export const CheckoutForm = () => {
  const materialId = useParams().id;
  const navigate = useNavigate();
  const [material, setMaterial] = useState({})
  const [checkout, setCheckout] = useState({ materialId: parseInt(materialId), patronId: 0 })

  useEffect(() => {
    getMaterial(materialId).then(obj => setMaterial(obj))
  }, [materialId])

  const handleCheckoutBtn = (e) => {
    e.preventDefault()
    console.log("checkout obj", checkout)
    checkout.materialId = materialId
    if (checkout.materialId && checkout.patronId) {
      checkoutMaterial(checkout).then(() => navigate("/materials/browse"))
    } else {
      window.alert("Please enter a valid Patron Id")
    }
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Checkouts Form</h4>
      </div>
      <div className="form-list">
        <h6>Enter Patron Id to Checkout {material.materialName}</h6>
        <input
          type="text"
          onChange={e => {
            const checkoutCopy = {...checkout }
            checkoutCopy.patronId = parseInt(e.target.value)
            setCheckout(checkoutCopy)
          }}
        />
        <button onClick={e => handleCheckoutBtn(e)}>Checkout Material</button>
      </div>
    </div>
  )
}


// Add a button to the material items in the Browse component labeled "Check out".
// This button should navigate to a form component that allows the user to input a patron's id.
// Add a submit button to this component which send a request to the API to create a new
// checkout for that material (HINT: you will need to use a URL param and useParams in
// the form component to know which material the checkout is for).