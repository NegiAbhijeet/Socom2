import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from "react"
import Second from './second';
import Third from './third';
import Fourth from './fourth';

const Test = () => {
    const [toggleState, setToggleState] = useState(1);
    const [loading, setloading] = useState(1);

    const tabs = [
        {
            id: 1,
            title: 'Live now',
        },
        {
            id: 2,
            title: 'For You',
        },
        {
            id: 3,
            title: 'Popular',
        }
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

        

    // function Page1() {
    //     return <p>Hello world!1</p>
    // }
    
    // function Page2() {
    //     return <p>Hello world!2</p>
    // }

    // function Page3() {
    //     return <p>Hello world!3</p>
    // }

    // const components = {
    //     'page1': Page1,
    //     'page2': Page2,
    //     'page3': Page3
    // }

    // const [currElem, setCurrElem]=useState('page1');
    // function loadComp(){
    //     useEffect(()=>{
    //         const elem=<Second />
    //     })
    // }
    
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
                    <Second />
                </View>
                <View style={toggleState == 2 ? [styles.TabContent, styles.activeContent] : [styles.TabContent]}>
                    <Third />
                </View>
                <View style={toggleState == 3 ? [styles.TabContent, styles.activeContent] : [styles.TabContent]}>
                <Second />
                </View>
            </ScrollView>
        </View>
    )
}

export default Test;

const styles = StyleSheet.create({
    MyTabs: {
        width: '31%',
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
