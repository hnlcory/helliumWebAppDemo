import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Grid id='landing-page' verticalAlign='middle' textAlign='center' divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image size='small' src='/images/symbol.jpeg' centered></Image>
            <h1 id='font-type-main'>hntHI</h1>
            <p id='font-type-general'>Data Visualization for Helium LoRaWAN Miners</p>
            <button className="ui button black">Login</button>
            <button className="ui button black">Signup</button>
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
