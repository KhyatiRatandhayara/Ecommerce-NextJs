import React from 'react'
import ProductCard from './ProductCard'
import { Grid } from '@mui/material';

const ProductListPage = async () => {

    const productData = await fetch("https://fakestoreapi.com/products");
    const productDataRes = await productData.json();

  return (
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', gap: '30px', justifyContent: 'center' }}>
      {productDataRes.map((product: any, index: number) => <ProductCard key={index} product={product}/>)}
    </Grid>
  )
}

export default ProductListPage
