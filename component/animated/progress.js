import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Transitioning, Transition} from 'react-native-reanimated';

function Progress() {
  const transition = <Transition.Change interpolation="easeInOut" />;
  // const transition = <Transition.Change />;
  let [perc, setPerc] = useState(20);
  let [range, setRange] = useState(1);
  const ref = useRef();
  const rangeButton = (e) => {
    const color = range >= e ? 'red' : 'grey';
    return (
      <TouchableOpacity
        onPress={() => {
          ref.current.animateNextTransition();
          setRange(e);
        }}
        style={{
          width: 100,
          height: 5,
          backgroundColor: color,
          borderRadius: 5,
        }}></TouchableOpacity>
    );
  };
  return (
    <>
      <Transitioning.View
        ref={ref}
        style={[styles.centerAll, {marginTop: 20}]}
        transition={transition}>
        <Button
          title={perc + 20 <= 100 ? '+20%' : '-80%'}
          color="#FF5252"
          onPress={() => {
            console.log('Ref======', ref);
            ref.current.animateNextTransition();
            setPerc(perc + 20 <= 100 ? perc + 20 : 20);
          }}
        />
        <View style={styles.bar}>
          <View
            style={{height: 5, width: `${perc}%`, backgroundColor: '#FF5252'}}
          />
        </View>
      </Transitioning.View>
      <Transitioning.View
        ref={ref}
        style={[styles.centerAll, {marginTop: 20}]}
        transition={transition}>
        <Button title={`${range * 20}%`} color="#FF5252" />
        <View style={{flexDirection: 'row'}}>
          {[1, 2, 3, 4].map((e) => rangeButton(e))}
        </View>
      </Transitioning.View>
    </>
  );
}

const styles = StyleSheet.create({
  centerAll: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  bar: {
    marginTop: 30,
    height: 5,
    width: '80%',
    backgroundColor: '#aaa',
  },
});

export default Progress;
