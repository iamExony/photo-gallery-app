import React, {useState, useEffect} from 'react'
import { projectFirestore } from '../firebase/config'

const UseFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(docs => {
                documents.push({...docs.data(), id: docs.id})

            })
            setDocs(documents)
        });
        return () => unsub();
        
    }, [collection])
  
    return { docs };
}

export default UseFirestore