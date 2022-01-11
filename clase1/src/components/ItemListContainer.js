import {useState, useEffect} from 'react'

import {getFetch} from './objetos'
import Spiner from './Spinner'
import ItemList from './ItemList'
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false) )
    }, [])
    

    return (
        <>
        
        <div className="itemListContainer">
        <div className="cards">
        {
        loading ?  <Spiner/> :<ItemList productos={productos} />
        }
        </div>
        </div>
        </>
    )
}

export default ItemListContainer