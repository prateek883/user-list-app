import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

function Card({ userData }) {
  return (
    <Box
      sx={{
        marginTop: 3,
        padding: '0 30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
      }}
    >
      <Paper
        sx={{
          backgroundColor: 'grey',
          minHeight: '300px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px 0',
          borderRadius: '15px',
        }}
        elevation={12}
      >
        {Object.keys(userData).length > 1 ? (
          <>
            <Typography sx={{ marginBottom: '20px' }}>
              {userData.profile.username}
            </Typography>

            <TextField
              label="Bio"
              value={userData.Bio}
              variant="standard"
              sx={{ width: '80%', marginBottom: '20px' }}
            />
            <TextField
              label="Full Name"
              value={
                userData.profile.firstName + ' ' + userData.profile.lastName
              }
              variant="standard"
              sx={{ width: '80%', marginBottom: '20px' }}
            />
            <TextField
              label="Job Title"
              value={userData.jobTitle}
              variant="standard"
              sx={{ width: '80%', marginBottom: '20px' }}
            />
            <TextField
              label="Email"
              value={userData.profile.email}
              variant="standard"
              sx={{ width: '80%' }}
            />
          </>
        ) : (
          userData.message
        )}
      </Paper>
    </Box>
  )
}

export default Card