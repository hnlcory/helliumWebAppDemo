import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.stuff.name}</Table.Cell>
        <Table.Cell>{this.props.stuff.data.status.online}</Table.Cell>
        <Table.Cell>{this.props.stuff.data.last_poc_challenge}</Table.Cell>
        <Table.Cell>{this.props.stuff.data.owner}</Table.Cell>
        <Table.Cell>{this.props.stuff.data.reward_scale}</Table.Cell>
        <Table.Cell>{`${this.props.stuff.data.geocode.short_city}, ${this.props.stuff.data.geocode.short_state}`}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
StuffItem.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    data: PropTypes.object,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(StuffItem);
