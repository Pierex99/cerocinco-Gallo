import './ItemDetailContainer.css'

import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function ItemDetailContainer() {
    const [item, setItem] = useState()
    const { productId } = useParams()

    useEffect(() => {
        console.log(productId);
        // necesita conocer la base de datos, el nombre de la colleccion y el id de item
        const itemRef = doc(db, "items", productId)

        getDoc(itemRef)
            .then((snapshot) => {

                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId]);


    return (
        <div className='item-detail-container'>
            {!item ? (
                <p>Cargando producto...</p>
            ) : (
                <>
                    <ItemDetail item={item} />
                </>
            )}
        </div>
    )
}