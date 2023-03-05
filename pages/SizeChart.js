import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SizeSelector = () => {
    const sizes=['XS','S','M','L','XL']
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Size</Text>
      <View style={styles.buttonsContainer}>
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            // onPress={() => onSelectSize(size)}
            style={[
              styles.sizeButton,
            //   selectedSize === size ? styles.selectedSizeButton : {},
            ]}
          >
            <Text
              style={[
                styles.sizeButtonText,
                // selectedSize === size ? styles.selectedSizeButtonText : {},
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginVertical: 10
    },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeButton: {
    padding: 8,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedSizeButton: {
    backgroundColor: '#e91e63',
  },
  sizeButtonText: {
    fontSize: 16,
    color: '#666',
  },
  selectedSizeButtonText: {
    color: '#fff',
  },
});

export default SizeSelector;
