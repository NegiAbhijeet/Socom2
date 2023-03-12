import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Dimensions } from 'react-native';
import App from './dashboard';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        // Your login logic goes here
        navigation.navigate('TabNav')
    };
    

    return (
        <View style={styles.outerContainer}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.title}>Welcome,</Text>
                <Text style={{ fontSize: 24, color: 'black', marginVertical: 10 }}>Good to see you !</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email Address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>

                    <View style={{ width: '100%' }}>
                        <Text style={{ textAlign: 'right' }}>Forgot password?</Text>
                    </View>



                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <View style={{
                        width: '100%', borderTopColor: 'white',
                        borderTopWidth: 1, alignItems: 'center',
                        justifyContent: 'center', marginTop: 40, marginBottom: 20
                    }}>
                        <Text
                            style={{
                                textAlign: 'center', backgroundColor: '#526DCE',
                                position: 'relative', bottom: 10, paddingHorizontal: 20
                            }}>Or Login with</Text>
                    </View>

                    <View style={{
                        width: '100%', flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity style={styles.bottomButtons} onPress={handleLogin}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButtons} onPress={handleLogin}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>

    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        minHeight: Dimensions.get('window').height * 0.5


    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#526DCE',
        paddingVertical: 30,
        borderTopLeftRadius: 50,
    },
    title: {
        fontSize: 25,
        color: 'black',
        paddingHorizontal: 10
    },
    inputContainer: {
        width: '95%',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#00000026'
    },
    input: {
        fontSize: 16,
        color: 'white',
        paddingVertical: 10,
    },
    loginButton: {
        backgroundColor: '#FFBF23',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        textAlign: 'center'
    },
    loginText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
    bottomButtons: {
        width: 140,
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 8,
        borderColor: '#FFBF23',
        borderWidth: 1,
        marginBottom: 30
    }
});

export default LoginScreen;
