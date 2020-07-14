import React from 'react';
import {Text, View} from 'react-native';

import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  ShineOverlay,
} from 'rn-placeholder';

const placeHolder = () => (
  <Placeholder
    Animation={Fade}
    // Left={PlaceholderMedia}
    // Right={PlaceholderMedia}
  >
    <View style={{backgroundColor: 'white'}}>
      <PlaceholderLine width={80} height={80} />
      <PlaceholderLine />
      <PlaceholderLine width={30} />
    </View>
  </Placeholder>
);

export default placeHolder;
