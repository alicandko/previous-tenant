import React from 'react';
import styled from 'styled-components';
import { Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import text from '../de.json';

const FormSC = styled.form`
  width: 500px;
  padding: 30px 30px 30px 30px;
`;

const H1 = styled.h2`
  margin: 0 0 15px 0;
  font-size: 24px;
`;

const H2 = styled.h2`
  margin-bottom: 15px;
  margin: 0;
  font-size: 20px;
`;

export const Form: React.FC = () => {
  const formMethods = useForm({
    defaultValues: {},
    mode: 'onBlur',
  });

  return (
    <FormSC>
      <H1>Miethöhe posten</H1>
      <Grid xs={12} container direction="column" justify="center" alignItems="center" spacing={3}>
        <Grid container item>
          <H2>{text.address}</H2>
        </Grid>
        <Grid container item>
          <TextField label={text.streetAndHouseNumber} fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <TextField label={text.city} fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <TextField label={text.postalCode} fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <H2>{text.contractDetails}</H2>
        </Grid>
        <Grid container item>
          <TextField label={text.commencementOfContract} fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <TextField label={text.coldRent} fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <TextField label={text.warmRent} fullWidth variant="outlined" />
        </Grid>
        <Grid container item justify="center">
          ODER
        </Grid>
        <Grid container item>
          <TextField label={text.flatRent} fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <H2>{text.contact}</H2>
        </Grid>
        <Grid container item>
          <TextField label={text.email} fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <TextField label={text.phoneNumber} fullWidth variant="outlined" />
        </Grid>
      </Grid>
    </FormSC>
  );
};
