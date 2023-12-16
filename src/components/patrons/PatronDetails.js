import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPatronById } from "../../data/patronsData";

export const PatronDetails = () => {
  const { id } = useParams();

  const [patron, setPatron] = useState(null)

  useEffect(() => {
    getPatronById(id).then(obj => setPatron(obj))
  }, [id])


  return (
    "Hello from patron details"
  )
}