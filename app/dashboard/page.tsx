import React from 'react'
import ProductListPage from '../components/productlist'
import { Grid } from '@mui/material'
import ProductSearchBar from '../components/ProductSearchBar'

const DashBoardPage = () => {
    return (
        <Grid>
            <ProductSearchBar />
            <ProductListPage />
        </Grid>
    )
}

export default DashBoardPage
