import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getListKontak } from '../../actions/kontakAction'

const ListKontak = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        //panggil action getlistkontak
        console.log('1. use effect component did mount')
        dispatch(getListKontak())
    })
  return (
    <div>ListKontak</div>
  )
}

export default ListKontak