import React, { Component } from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';
import './App.css'

class Cell extends Component {
  render() {
    return (
      <Card className='Card' title={ this.props.name } extra={ this.props.id } style={{ width: 300 }}>
        <img src={ this.props.sprite } alt={ this.props.name } />
      </Card>
    );
  }
}

Cell.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  sprite: PropTypes.string,
};

export default Cell;
