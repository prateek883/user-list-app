import Attribution from './Components/Attribution'
import Card from './Components/Card'
import Header from './Components/Header'
import Users from './Components/User'
import { Container, CssBaseline, Grid } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState, useEffect } from 'react'
import axios from 'axios'

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: 'hsla(203, 100%, 45%, 1)',
    },
    secondary: {
      main: 'hsla(203, 100%, 65%, 1)',
    },
    text: {
      primary: '#000',
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
})

function App() {
  const [userData, setUserData] = useState({
    message: 'Select a User to see Details',
  })
  const [fetchedData, setFetchedData] = useState([])

  const passDataToCard = (userData) => {
    setUserData(userData)
  }

  useEffect(() => {
    axios
      .get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then((response) => response.data)
      .then((data) => setFetchedData(data))
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Grid container>
            <Grid item xs={6}>
              <Users passDataToCard={passDataToCard} data={fetchedData} />
            </Grid>
            <Grid item xs={6}>
              <Card userData={userData} />
            </Grid>
          </Grid>
        </Container>
        <Attribution />
      </ThemeProvider>
    </>
  )
}

export default App