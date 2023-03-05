import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import React from 'react';

import SearchBar from '../components/searchbar/index';
import PersonProfile from '../components/profilePerson/index';
import Header from './Header';

const data = [
    {
        id: 1,
        title: 'Changing Seasons (fashion)',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },
    {
        id: 2,
        title: 'Item 2',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    },

];
const Fourth = () => {
    return (
        <SafeAreaView>
                  <Header isLabel={true} label={"Stores"}/>
            <View style={styles.SearchBarContainer}><SearchBar /></View>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <PersonProfile {...item} />
                    )
                }} />
        </SafeAreaView>
    )
}

export default Fourth;

const styles = StyleSheet.create({
    SearchBarContainer: {
        marginTop: 10,
        padding: 10
    }
})