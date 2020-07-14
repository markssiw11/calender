import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';
const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth - 40;
class MyCarousel extends Component {
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          source={item.source}
          style={{width: itemWidth, height: itemWidth}}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={{marginTop: 20}}>
        <Carousel
          layout={'stack'}
          layoutCardOffset={`18`}
          ref={(c) => {
            this._carousel = c;
          }}
          useScrollView={true}
          data={data}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#ffe4c4',
    // borderWidth: 0.5,
  },
  title: {
    color: 'blue',
    textAlign: 'center',
  },
});

const data = [
  {title: 'Nguyen Van A', source: require('../../image/image1.png')},
  {title: 'Nguyen Van B', source: require('../../image/thang.png')},
];

export default MyCarousel;
