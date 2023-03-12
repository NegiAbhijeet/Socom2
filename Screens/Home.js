import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import CarouselMain from '../components/carousel/index'
import MainHeading from '../components/mainHeading/index';
import Header from '../components/header/Header';

const recLiveData = [
  { id: 1, imgSrc: '', cardText: 'Demo1', cardHeading: 'Demo head' },
  { id: 2, imgSrc: '', cardText: 'Demo', cardHeading: 'Demo head' },
  { id: 3, imgSrc: '', cardText: 'Demo', cardHeading: 'Demo head' },
  // { id: 4, imgSrc: '', cardText: 'Demo', cardHeading: 'Demo head' }
]



const HomePage = () => {
  return (
    <View>
      <Header />

      <ScrollView>
        <MainHeading text='Popular Live' />
        <CarouselMain />

        <MainHeading text='Recommended Live' />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={16}> 
          {
            recLiveData.map((item) => {
              return (
                <View style={Styles.container} key={item.id}>
                  <View style={Styles.card}>
                    <Image style={Styles.card_img} source={require('../img/imgs.jpeg')} />
                    <Text style={Styles.card_text}>{item.cardText}</Text>
                  </View>
                  <Text style={{ textAlign: 'center', fontSize: 10, marginTop: 10 }}>{item.cardHeading}</Text>
                </View>
              )
            })
          }
        </ScrollView>

        <MainHeading text='Upcoming Live' />
        <View style={{ width: '100%' }}>
          <Image style={{ width: '100%', aspectRatio: 3 / 2, resizeMode: 'cover' }} source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }} />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomePage

const Styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    margin: 6,
    // flex: 1,
  },
  card: {
    overflow: 'hidden',
    borderRadius: 5,
    elevation: 10,
  },

  card_img: {
    width: 108,
    height: 130,
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