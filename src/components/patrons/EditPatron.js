import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPatronById, updatePatron } from "../../data/patronsData";
import { Button } from "reactstrap";

export const EditPatron = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patron, setPatron] = useState(null)

  useEffect(() => {
    getPatronById(id).then(obj => setPatron(obj))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patron.address && patron.email) {
      updatePatron(patron).then(navigate("/patrons"))
    } else {
      window.alert("Please fill out all fields")
    }
  }

  return (
    <div className="container">
      <h2>Edit {patron?.firstName} {patron?.lastName}'s Details</h2>
      <form>
        <h6>Address:</h6>
        <input 
          type="text" 
          value={patron?.address}
          onChange={e => {
            const patronCopy = {...patron}
            patronCopy.address = e.target.value
            setPatron(patronCopy)
          }}
        />
        <h6>Email:</h6>
        <input 
          type="text"
          value={patron?.email}
          onChange={e => {
            const patronCopy = {...patron}
            patronCopy.email = e.target.value
            setPatron(patronCopy)
          }}
        />
      </form>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>

  )
}