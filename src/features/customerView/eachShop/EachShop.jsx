import React from 'react'
import { useParams } from 'react-router-dom'

export default function EachShop() {

    const {id} = useParams()

  return (
    <div>EachShop - ${id}</div>
  )
}
