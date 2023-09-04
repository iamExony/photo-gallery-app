import React from 'react';
import UseFirestore from '../hooks/useFirestore';

const Grid = () => {
    const {docs} = UseFirestore('images')
    console.log(docs)
  return (
    <div>Grid</div>
  )
}

export default Grid

