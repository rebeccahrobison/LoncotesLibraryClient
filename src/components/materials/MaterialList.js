import { useEffect, useState } from "react";
import { Input, Table } from "reactstrap";
import { getMaterials, removeMaterialFromCirc } from "../../data/materialsData";
import { Link } from "react-router-dom";
import { getGenres } from "../../data/genresData";
import { getMaterialTypes } from "../../data/materialTypesData";

export default function MaterialList() {
  const [materials, setMaterials] = useState([]);
  const [genres, setGenres] = useState([])
  const [chosenGenre, setChosenGenre] = useState(0)
  const [materialTypes, setMaterialTypes] = useState([])
  const [chosenMaterialType, setChosenMaterialType] = useState(0)
  const [filteredMaterials, setFilteredMaterials] = useState([])

  const getAndSetMaterials = () => {
    getMaterials().then(setMaterials);
  }

  useEffect(() => {
    getAndSetMaterials()
  }, []);

  useEffect(() => {
    getGenres().then(arr => setGenres(arr))
  }, [])

  useEffect(() => {
    getMaterialTypes().then(arr => setMaterialTypes(arr))
  }, [])

  useEffect(() => {
    if (chosenGenre == 0) {
      setFilteredMaterials(materials)
    } else {
      const foundMaterials = materials.filter(m => m.genreId == parseInt(chosenGenre))
      setFilteredMaterials(foundMaterials)
    }
  }, [chosenGenre, materials])

  useEffect(() => {
    if (chosenMaterialType == 0) {
      setFilteredMaterials(materials)
    } else {
      const foundMaterials = materials.filter(m => m.materialTypeId == parseInt(chosenMaterialType))
      setFilteredMaterials(foundMaterials)
    }
  }, [chosenMaterialType, materials])


  const handleRemoveBtn = (e, id) => {
    e.preventDefault()
    removeMaterialFromCirc(id).then(() => getAndSetMaterials())
  }

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Materials</h4>
        <Link to="/materials/create">Add</Link>
      </div>
      <div className="filter-items">Filter By:
        <div className="filter-item">
          <Input 
            type="select"
            onChange={e => {
              setChosenGenre(e.target.value)
            }}
          >
            <option value="0">Genre</option>
            {genres.map(g => {
              return (
                <option value={g.id} key={g.id}>{g.name}</option>
              )
            })}
          </Input>
        </div>
        <div className="filter-item">
          <Input 
            type="select"
            onChange={e => {
              setChosenMaterialType(e.target.value)
            }}
          >
            <option value="0">Material Type</option>
            {materialTypes.map(mt => {
              return (
                <option value={mt.id} key={mt.id}>{mt.name}</option>
              )
            })}
          </Input>
        </div>
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
          {filteredMaterials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType.name}</td>
              <td>{m.genre.name}</td>
              <td>
                <Link to={`${m.id}`}>Details</Link>
              </td>
              <td><button onClick={e => handleRemoveBtn(e, m.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
