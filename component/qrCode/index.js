import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
} = Animated;
function AnimatedBox() {
  const [tranX, setTranX] = useState(0);
  // we create a clock node
  const newClock = new Clock();
  // and use runTiming method defined above to create a node that is going to be mapped
  // to the translateX transform.
  const runTiming = (clock, value, dest) => {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0),
    };

    const config = {
      duration: 5000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease),
    };

    return block([
      cond(
        clockRunning(clock),
        [
          // if the clock is already running we update the toValue, in case a new dest has been passed in
          set(config.toValue, dest),
        ],
        [
          // if the clock isn't running we reset all the animation params and start the clock
          set(state.finished, 0),
          set(state.time, 0),
          set(state.position, value),
          set(state.frameTime, 0),
          set(config.toValue, dest),
          startClock(clock),
        ],
      ),
      // we run the step here that is going to update position
      timing(clock, state, config),
      // if the animation is over we stop the clock
      cond(state.finished, debug('stop clock', stopClock(clock))),
      // we made the block return the updated position
      state.position,
    ]);
  };
  useEffect(() => {
    setTranX(runTiming(newClock, -120, 300));
  }, []);
  const onPress = () => {
    setTranX(runTiming(newClock, -120, 300));
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[{transform: [{translateX: tranX}]}]}>
        <Image
          style={{height: 200, width: 200}}
          source={require('../../image/thang.png')}
        />
      </Animated.View>
      <TouchableOpacity
        style={{
          width: 100,
          marginTop: 200,
          backgroundColor: 'yellow',
          alignSelf: 'center',
          borderRadius: 5,
        }}
        onPress={onPress}>
        <Text style={{textAlign: 'center', paddingVertical: 10}}>reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});

export default AnimatedBox;
