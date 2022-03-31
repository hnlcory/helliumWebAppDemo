import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src='/images/symbol.jpeg'></Image>
            <h1>hntHI</h1>
            <p>Data Visualization for Helium HNT Miners</p>
          </Grid.Column>
          <Grid.Column>
            <Image size='huge' src='/images/longfilarge.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    );
  }
}

export default Landing;
