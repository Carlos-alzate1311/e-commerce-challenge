import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            J&A Variedades
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">
              Inicio
            </Button>
            <Button color="inherit" component={Link} to="/productos">
              Productos
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>
        {children}
      </Box>
    </>
  );
};

export default Layout;
