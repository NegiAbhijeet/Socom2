import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import CarouselMain from '../components/carousel/index'
import MainHeading from '../components/mainHeading/index';
import Header from './Header';
import Test from './test';
const cols = 3;
const marginHorizontal = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols));
const recLiveData = [
  { id: 1, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7s56292QmjcgxIAOJGODlr-3rBjgNVjR3g&usqp=CAU', cardText: 'Demo', cardHeading: 'Demo head' },
  { id: 2, imgSrc: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', cardText: 'Demo', cardHeading: 'Demo head' },
  { id: 3, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQ47DyzTnKHlliq9Y5acG_4Bf4OvSxPmXXKvANEh1&s', cardText: 'Demo', cardHeading: 'Demo head' },
  { id: 4, imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7s56292QmjcgxIAOJGODlr-3rBjgNVjR3g&usqp=CAU', cardText: 'Demo', cardHeading: 'Demo head' }
]

const Card = (props) => {
  return (
    <View style={Styles.container} key={props.id}>
      <View style={Styles.card}>
        <Image style={Styles.card_img} source={{ uri: props.imgSrc }} />
        <Text style={Styles.card_text}>{props.cardText}</Text>
      </View>
      <Text style={{ textAlign: 'center', fontSize: 10, marginTop: 10 }}>{props.cardHeading}</Text>
    </View>
  )
}

const First = () => {
  return (
    <View>
      <Header/>

    <ScrollView>
      <MainHeading text='Popular Live' />
      {/* <Test/> */}
      <CarouselMain />

      <MainHeading text='Recommended Live' />
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16}
        style={{ flexDirection: 'row', flex:1 }}>
        {
          recLiveData.map((item) => {
            return (<Card {...item} />);
          })
        }
      </ScrollView> */}

      <MainHeading text='Upcoming Live' />
      <View style={{ width: '100%' }}>
        <Image style={{ width: '100%', aspectRatio: 3 / 2, resizeMode: 'cover' }} source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }} />
      </View>
    </ScrollView>
    </View>
  )
}

export default First

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    margin: 6,
    flex: 1,
  },
  card: {
    overflow: 'hidden',
    borderRadius: 5,
    elevation: 10,
  },

  card_img: {
    width: width,
    aspectRatio: 10 / 11
  },

  card_text: {
    backgroundColor: '#FFBB46',
    textAlign: 'center',
    padding: 5,
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 24,
    letterSpacing: 0.16,
    color: '#FFFFFF',
  }
})