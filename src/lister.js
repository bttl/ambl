import React from 'react';

import {
  ListView
} from 'react-native';

export class Lister extends React.Component {

  constructor(props){
    super(props);

    var dsNew = new ListView.DataSource({
      rowHasChanged: (row1, row2) => {
        return row1 !== row2;
      }
    }).cloneWithRows(this.props.arr);
    
    this.state = {
      ds: dsNew
    };

    this.cmpListView = React.createFactory(ListView);
  }

  componentWillReceiveProps(nextProps) {
    // console.warn('ComponentWillReceiveProps');
    this.setState({
      ds: this.state.ds.cloneWithRows(nextProps.arr)
    });
  }
  
  render() {
    // console.warn('renderListView');
    return this.cmpListView({
      style: this.props.style,
      accessible: true,
      dataSource: this.state.ds,
      renderRow: (row) => this.props.renderRow(row)
    });
  }
}

Lister.propTypes = {
  arr: React.PropTypes.array.isRequired,
  renderRow: React.PropTypes.func.isRequired
};
