import React from 'react';

import {
  Text,
  TouchableHighlight
} from 'react-native';

export class Btn extends React.Component {
  constructor(props) {
    super(props);

    this.cmpTouchableHighlight = React.createFactory(TouchableHighlight);
    this.cmpText = React.createFactory(Text);
  }

  render() {
    return this.cmpTouchableHighlight({
      onPress: (e) => {
        this.props.onClick(e);
      },      
      style: this.props.style,
      // The color of the underlay that will show through when the touch is active.
      underlayColor: this.props.underlayColor
    }, this.cmpText(null, this.props.children));
  }
}

Btn.propTypes = {
  onClick: React.PropTypes.func.isRequired
};
