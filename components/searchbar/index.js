import React from 'react';
import { Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const SearchBar=()=>{
    return(
        <Input
        placeholder='Search Stores'
        leftIcon={{ type: 'font-awesome', name: 'search' }}
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
    )
}
export default SearchBar;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      flex: 1,
      marginVertical: 10
    },
    inputContainer: {
      borderRadius: 10,
      borderColor: 'white',
      height: 40,
      width: '100%',
      backgroundColor: '#F7F7F7',
      paddingHorizontal: 10    
    },
    input: {
      fontSize: 14,
      paddingHorizontal: 6,
    },
})