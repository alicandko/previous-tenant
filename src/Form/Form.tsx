import React from 'react';
import styled from 'styled-components';
import { Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

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
          <H2>Addresse</H2>
        </Grid>
        <Grid container item>
          <TextField label="Straße und Hausnummer" fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <TextField label="Stadt" fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <TextField label="Postleitzahl" fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <H2>Miete</H2>
        </Grid>
        <Grid container item>
          <TextField label="Kaltmiete" fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <TextField label="Warmmiete" fullWidth variant="outlined" />
        </Grid>
        <Grid container item justify="center">
          ODER
        </Grid>
        <Grid container item>
          <TextField label="Pauschalmiete" fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <H2>Kontakt</H2>
        </Grid>
        <Grid container item>
          <TextField label="E-Mail-Adresse" fullWidth variant="outlined" />
        </Grid>
        <Grid container item>
          <TextField label="Telefonnummer (Optional)" fullWidth variant="outlined" />
        </Grid>
      </Grid>
    </FormSC>
  );
};
