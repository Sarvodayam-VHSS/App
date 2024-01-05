// NewPage.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useAppContext } from '../src/AppContext';

const NewPage = () => {
  const { products, setProducts } = useAppContext();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectProductImage = () => {
    const options = {
      title: 'Select Product Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setProductImage(response.uri);
      }
    });
  };

  const sellProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: productName,
      price: productPrice,
      details: productDetails,
      image: productImage,
      phoneNumber: customerPhoneNumber,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    setProducts([...products, newProduct]);

    setProductName('');
    setProductPrice('');
    setProductDetails('');
    setProductImage(null);
    setCustomerPhoneNumber('');
  };

  const editProduct = () => {
    if (selectedProduct) {
      const editedProduct = {
        ...selectedProduct,
        name: productName || selectedProduct.name,
        price: productPrice || selectedProduct.price,
        details: productDetails || selectedProduct.details,
        image: productImage || selectedProduct.image,
        phoneNumber: customerPhoneNumber || selectedProduct.phoneNumber,
      };

      const updatedProducts = products.map((product) =>
        product.id === selectedProduct.id ? editedProduct : product
      );

      setProducts(updatedProducts);
      setSelectedProduct(null);
    }
  };

  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setProductName(product.name);
    setProductPrice(product.price);
    setProductDetails(product.details);
    setProductImage(product.image);
    setCustomerPhoneNumber(product.phoneNumber);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    setProductName('');
    setProductPrice('');
    setProductDetails('');
    setProductImage(null);
    setCustomerPhoneNumber('');
  };

  return (
    <ImageBackground
      source={require('../assets/page.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Ende Nadu Selling Page</Text>

        <TouchableOpacity style={styles.imageButton} onPress={selectProductImage}>
          <Text style={styles.buttonText}>Select Product Image</Text>
        </TouchableOpacity>

        {productImage && (
          <Image source={{ uri: productImage }} style={styles.selectedImage} resizeMode="cover" />
        )}

        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={productName}
          onChangeText={(text) => setProductName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Product Price (in Rupees)"
          value={productPrice}
          onChangeText={(text) => setProductPrice(text)}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Product Details"
          value={productDetails}
          onChangeText={(text) => setProductDetails(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Customer's Phone Number"
          value={customerPhoneNumber}
          onChangeText={(text) => setCustomerPhoneNumber(text)}
          keyboardType="numeric"
        />

        {selectedProduct ? (
          <TouchableOpacity style={styles.editButton} onPress={editProduct}>
            <Text style={styles.buttonText}>Edit Product</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.sellButton} onPress={sellProduct}>
            <Text style={styles.buttonText}>Sell Product</Text>
          </TouchableOpacity>
        )}

        <View style={styles.productListContainer}>
          <Text style={styles.productListTitle}>Products</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productListItem}
                onPress={() => showProductDetails(item)}
              >
                <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="cover" />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>₹{item.price}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <Modal
          visible={selectedProduct !== null}
          transparent={true}
          animationType="slide"
          onRequestClose={closeProductDetails}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Product Details</Text>
              {selectedProduct && (
                <View>
                  <Image
                    source={{ uri: selectedProduct.image }}
                    style={styles.modalProductImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.productName}>{selectedProduct.name}</Text>
                  <Text style={styles.productPrice}>₹{selectedProduct.price}</Text>
                  <Text style={styles.productDetails}>{selectedProduct.details}</Text>
                  <Text style={styles.dateTime}>
                    Date: {selectedProduct.date}, Time: {selectedProduct.time}
                  </Text>
                </View>
              )}
              <TouchableOpacity style={styles.closeButton} onPress={closeProductDetails}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255, 165, 0, 0.8)', // Orange background color with opacity
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e44d26', // Orange color
  },
  imageButton: {
    backgroundColor: '#e44d26', // Orange color
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
  },
  sellButton: {
    backgroundColor: '#e44d26', // Orange color
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#e44d26', // Orange color
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productListContainer: {
    width: '100%',
  },
  productListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e44d26', // Orange color
  },
  productListItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#e44d26',
    marginBottom: 8,
  },
  productDetails: {
    fontSize: 14,
    marginBottom: 8,
  },
  dateTime: {
    fontSize: 12,
    color: '#777',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#e44d26', // Orange color
  },
  modalProductImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#e44d26', // Orange color
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default NewPage;
