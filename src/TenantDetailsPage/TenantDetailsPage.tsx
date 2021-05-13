import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Form } from '../Form';

interface Props {
  className?: string;
}

export const TenantDetailsPage: React.FC<Props> = ({ className }) => (
  <Grid
    xs={12}
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={className}
  >
    <Paper>
      <Form />
    </Paper>
  </Grid>
);
