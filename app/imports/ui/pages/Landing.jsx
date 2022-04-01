import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
            <Link to='/signin'>
              <button className="ui button black" >Login</button>
            </Link>
            <Link to='/signup'>
              <button className="ui button black" >Signup</button>
            </Link>
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
