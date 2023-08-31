
// Searcher.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'antd'; // Importar el componente Input desde 'antd'
import { dataSlice } from '../slices/dataSlice';

export const Searcher = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(dataSlice.actions.setFilter(e.target.value));
  }

  return <Input.Search 
    placeholder="Buscar..." 
    onChange={handleOnChange}
    style={{marginBottom: '10px'}} />
}