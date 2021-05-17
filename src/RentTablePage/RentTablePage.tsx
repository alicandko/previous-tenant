import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Form } from '../Form';
import { Table } from '../Table';

interface Props {
  className?: string;
}

export const RentTablePage: React.FC<Props> = ({ className }) => (
  <Grid
    xs={12}
    container
    direction="column"
    justify="center"
    alignItems="center"
    className={className}
  >
    <Table />
  </Grid>
);
