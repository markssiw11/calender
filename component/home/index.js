import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCog,
  faSearch,
  faPowerOff,
  faBell,
  faDoorOpen,
  faSignOutAlt,
  faDoorClosed,
  faHandHoldingUsd,
  faBarcode,
  faBars,
  faCheck,
  faFire,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import QRCode from 'react-native-qrcode-svg';
const window = Dimensions.get('window');
const SCREEN_HEIGHT = window.height;
const windowWidth = window.width;

console.log(window.width);
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;
import Share from 'react-native-share';
const images = {
  background: require('../../image/image1.png'),
};
class HomeScreen extends Component {
  renderNavBar = () => {
    return (
      <View style={styles.navContainer}>
        <View style={styles.statusBar} />
        <View style={styles.tabBar}>
          <View style={styles.searchCtn}>
            <FontAwesomeIcon
              icon={faSearch}
              size={18}
              style={{
                color: 'grey',
                marginLeft: 5,
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Tìm kiếm"
              onPress={() => {
                this.props.navigation.navigate('Animated');
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FontAwesomeIcon
              icon={faBell}
              onPress={() => this.props.navigation.navigate('Demo')}
              size={18}
              style={{fontSize: 40, color: 'darkslateblue'}}
            />
            <FontAwesomeIcon
              icon={faPowerOff}
              onPress={() => Alert.alert('hello')}
              size={18}
              style={{fontSize: 40, color: 'darkslateblue', marginLeft: 20}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AnimatedOne');
            }}
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 7,
              paddingVertical: 7,
              borderRadius: 12,
            }}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size={30}
              style={{
                color: 'grey',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 7,
              paddingVertical: 7,
              borderRadius: 12,
            }}
            onPress={() => this.props.navigation.navigate('Demo')}>
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              size={30}
              style={{
                color: 'grey',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Progress')}
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 7,
              paddingVertical: 7,
              borderRadius: 12,
            }}>
            <FontAwesomeIcon
              icon={faBarcode}
              size={30}
              style={{
                color: 'grey',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Upload')}
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 7,
              paddingVertical: 7,
              borderRadius: 12,
            }}>
            <FontAwesomeIcon
              icon={faFilter}
              size={30}
              style={{
                color: 'grey',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  renderContent = () => {
    return (
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('RunSpring')}
          style={{
            backgroundColor: '#7fffd4',
            paddingHorizontal: 7,
            paddingVertical: 7,
            borderRadius: 12,
            width: 50,
            height: 50,
          }}>
          <FontAwesomeIcon
            icon={faFire}
            size={30}
            style={{
              color: 'grey',
            }}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ProgressBar')}
            style={{
              backgroundColor: '#7fffd4',
              paddingHorizontal: 7,
              paddingVertical: 7,
              borderRadius: 12,
              width: 50,
              height: 50,
            }}>
            <FontAwesomeIcon
              icon={faFire}
              size={30}
              style={{
                color: 'grey',
              }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 8}}>show & hide</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Snapable')}
            style={{
              backgroundColor: '#7fffd4',
              paddingHorizontal: 7,
              paddingVertical: 7,
              borderRadius: 12,
              width: 50,
              height: 50,
            }}>
            <FontAwesomeIcon
              icon={faFire}
              size={30}
              style={{
                color: 'grey',
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Carousel')}
            style={{
              backgroundColor: '#7fffd4',
              paddingHorizontal: 7,
              paddingVertical: 7,
              borderRadius: 12,
              width: 50,
              height: 50,
            }}>
            <FontAwesomeIcon
              icon={faFire}
              size={30}
              style={{
                color: 'grey',
              }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 8, textAlign: 'center'}}>Carousel</Text>
        </View>
      </View>
    );
  };
  onPressShare = () => {
    const shareOptions = {
      title: 'Share file abcd',
      failOnCancel: false,
      message: 'abcd',
    };
    Share.open(shareOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <ReactNativeParallaxHeader
          headerMinHeight={HEADER_HEIGHT}
          headerMaxHeight={180}
          extraScrollHeight={20}
          navbarColor="#3498db"
          // title="Parallax Header ~"
          titleStyle={styles.titleStyle}
          backgroundImage={images.background}
          backgroundImageScale={1.2}
          renderNavBar={this.renderNavBar}
          renderContent={this.renderContent}
          containerStyle={styles.container}
          contentContainerStyle={styles.contentContainer}
          innerContainerStyle={styles.container}
          alwaysShowTitle={true}
          alwaysShowNavBar={true}
          scrollViewProps={{
            onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
            onScrollEndDrag: () => console.log('onScrollEndDrag'),
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {},
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(104, 182, 131, 0.5)',
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'teal',
    flexDirection: 'row',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 1,
    width: (windowWidth * 2) / 3,
    paddingLeft: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  searchCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 5,
    marginLeft: 5,
    marginVertical: 7,
  },
  ctn: {
    backgroundColor: 'mediumturquoise',
    paddingVertical: 5,
    flex: 1,
    flexDirection: 'row',
    width: windowWidth,
    alignItems: 'center',
  },
});
export default HomeScreen;
