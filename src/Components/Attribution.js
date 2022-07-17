import { Box } from '@mui/material/'
import { grey } from '@mui/material/colors'

function Attribution() {
  return (
    <Box
      component="footer"
      sx={{
        paddingTop: 1,
        display: 'flex',
      }}
      variant="body2"
      color={grey[900]}
    >
    </Box>
  )
}

export default Attribution