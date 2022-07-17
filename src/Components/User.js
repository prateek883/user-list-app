import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function Users({ passDataToCard, data }) {
  return (
    <Box
      sx={{
        width: '90%',
        backgroundColor: 'white',
        marginTop: 3,
        minHeight: '300px',
      }}
    >
      <List>
        {data.length ? (
          data.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => passDataToCard(item)}>
                <ListItemText>
                  {item.profile.firstName} {item.profile.lastName}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <Box
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </List>
    </Box>
  )
}

export default Users