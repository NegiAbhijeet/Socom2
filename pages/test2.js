import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from "react"
import Second from './second';
import Third from './third';
import Fourth from './fourth';

const Test2 = () => {
    const [toggleState, setToggleState] = useState(1);

    const tabs = [
        {
            id: 1,
            title: 'Following',
        },
        {
            id: 2,
            title: 'Suggested',
        },
    ]

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const Loader=()=>{
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

        
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ flexDirection: 'row', }}>
                    {
                        tabs.map((item) => {
                            return (
                                <TouchableOpacity style={
                                    toggleState == item.id ? [styles.MyTabs, styles.activeTab] : [styles.MyTabs]
                                } key={item.id} onPress={() => { toggleTab(item.id) }}>
                                    <Text style={toggleState == item.id ? [styles.MyTabText, styles.activeText] :
                                        [styles.MyTabText]}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>

            <ScrollView style={{ width: '95%'}}>
                <View style={toggleState == 1 ? [styles.TabContent, styles.activeContent] : [styles.TabContent]}>
                    <Fourth />
                </View>
                <View style={toggleState == 2 ? [styles.TabContent, styles.activeContent] : [styles.TabContent]}>
                    <Third />
                </View>
            </ScrollView>
        </View>
    )
}

export default Test2;

const styles = StyleSheet.create({
    MyTabs: {
        width: '47%',
        borderBottomColor: '#909090',
        borderBottomWidth: 3,
        padding: 10,
    },
    MyTabText: {
        textAlign: 'center',
        color: 'white'
    },
    activeText: {
        color: '#FFBF23'
    },
    activeTab: {
        color: 'black',
        borderBottomColor: '#FFBF23',
        borderBottomWidth: 3,
    },
    TabContent: {
        width: '100%',
        display: 'none',
        minWidth: 300
    },
    activeContent: {
        display: 'flex'
    }
})
