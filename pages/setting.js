import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import { Alert } from 'react-native/Libraries/Alert/Alert';

const styles = StyleSheet.create({
    container: {

        flex: 1,
        // backgroundColor:'red'


    },
    item: {
        //padding: 10,
        paddingStart: 10,
        justifyContent: 'center',
        fontSize: 15,
        // height: 45,
        // fontWeight: 500,
        color: '#000000',



    },
    ico: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginVertical: 1,
        flexDirection: 'row',
        padding: 7,
        flex: 1,
        paddingVertical: 10



    }
});

const Setting = () => {
    // const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (

        <View style={styles.container}>

            <View>
                <Text style={{ fontWeight: 800, fontSize: 20, marginVertical: 20, paddingStart: 10, color: '#000000' }}> Settings </Text>
            </View>
            <FlatList
                data={[
                    { key: 'Notification' },
                    { key: 'Term of use' },
                    { key: 'Privacy Policy' },
                    { key: 'Permissions' },
                    { key: 'Delete account' },


                ]}
                renderItem={({ item }) =>



                    <View style={styles.ico}>

                        {/* <View style={{flexDirection:'row', width:'90%'}}> */}

                        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>

                            <Text style={styles.item}>{item.key}</Text>
                        </View>

                        {item.key != 'Notification' ? [<Icon name="chevron-right" size={25} color="#6E6E6E" />] : 
                        [<Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />]}

                    </View>
                }
            />

        </View>

    );
};

export default Setting;

