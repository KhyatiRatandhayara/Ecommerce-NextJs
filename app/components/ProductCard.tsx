import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }: any) => {
    const MAX_DESCRIPTION_LENGTH = 100;
    const MAX_TITLE_LENGTH = 50;

    const truncatedTitle = product.title.length > MAX_TITLE_LENGTH
        ? `${product.title.substring(0, MAX_TITLE_LENGTH)}...`
        : product.title;

    const truncatedDescription = product.description.length > MAX_DESCRIPTION_LENGTH
        ? `${product.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
        : product.description;
    return (
        <Card sx={{ maxWidth: 345, height: 'inherit', display: 'flex', flexDirection: 'column', padding: "20px" }}>
            <CardActionArea style={{ flex: 1 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 140, objectFit: 'cover' }}
                    image={product.image}
                    alt={product.title}
                />
                <CardContent style={{ flex: 1, padding: '20px' }}> {/* Added padding here */}
                    <Typography gutterBottom variant="h5" component="div">
                        {truncatedTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {truncatedDescription}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ marginTop: 2 }}>
                        Price: {product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button variant="contained" fullWidth color="primary">
                Add to Cart
            </Button>
        </Card>
    );
};

export default ProductCard;
