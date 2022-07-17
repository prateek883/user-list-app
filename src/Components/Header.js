import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} component="header">
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header