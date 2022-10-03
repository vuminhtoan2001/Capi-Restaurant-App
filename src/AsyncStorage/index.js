import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (keyName, value) => {
  try {
    await AsyncStorage.setItem(keyName, value);
  } catch (e) {
    // saving error
  }
};

export const getData = async (keyName) => {
  try {
    const value = await AsyncStorage.getItem(keyName);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export const removeData = async (keyName) => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};

