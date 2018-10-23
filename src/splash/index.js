import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation';
import DeviceStorage from '../utils/deviceStorage'

var { height, width } = Dimensions.get('window');

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };


  componentDidMount() {
    this.timer = setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' })
        ]
      })
      DeviceStorage.save('isFirst',false);
      this.props.navigation.dispatch(resetAction);
    },2500);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={{ flex: 1,justifyContent:"center",alignItems:'center' }}>
        <Text>这是启动页面</Text>
        {/* <Image
        style={{flex:1,width:width,height:height}}
        source={require('')}
        /> */}
      </View>
    );
  }
}
export default Splash;