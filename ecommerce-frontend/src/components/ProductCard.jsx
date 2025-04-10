// import { Card, CardContent, Typography, CardMedia } from '@mui/material';

// const ProductCard = ({ producto }) => {
//   return (
//     <Card sx={{ maxWidth: 300 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={producto.imagen || "https://via.placeholder.com/300"}
//         alt={producto.nombre}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {producto.nombre}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {producto.descripcion}
//         </Typography>
//         <Typography variant="subtitle1" color="text.primary">
//           ${producto.precio}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;

// components/ProductCard.jsx
import { Button, Card, CardContent, CardActions, Typography } from '@mui/material';

const ProductCard = ({ producto, onEdit, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{producto.nombre}</Typography>
        <Typography>{producto.descripcion}</Typography>
        <Typography>${producto.precio}</Typography>
        {producto.imagen && (
          <img src={producto.imagen} alt={producto.nombre} width="100%" />
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(producto)}>Editar</Button>
        <Button size="small" color="error" onClick={() => onDelete(producto.id)}>Eliminar</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
