import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={producto.imagen || "https://via.placeholder.com/300"}
        alt={producto.nombre}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.descripcion}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          ${producto.precio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
