import React from 'react'
import Grid from '@mui/material/Grid'
import { Paper } from '@mui/material'




const Ejemplo = () => {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item md={3}>
              <Paper>
                1
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper>
                2
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper>
                3
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper>
                4
              </Paper>
            </Grid>
        </Grid>

    </div>
  )
}

export default Ejemplo