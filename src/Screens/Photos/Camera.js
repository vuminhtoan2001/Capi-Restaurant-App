import { Camera, CameraType } from "expo-camera";
import { useState, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLOR } from "~/assets/Colors";
import Layout from "~/components/Layout";
import HeaderPhoto from "~/components/Photos/HeaderPhoto";

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [showListPicture, setShowListPicture] = useState(false);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const refCamera = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleStartCamera = () => {
    if (!permission.granted) {
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>
            Bạn cho phép truy cập vào camera của bạn
          </Text>
          <Button onPress={requestPermission} title="Đồng ý" />
        </View>
      );
    }
    setStartCamera(true);
  };

  const takePicture = async () => {
    handleStartCamera();
    let result = await refCamera.current.takePictureAsync();
    console.log(result);
    setImage(result.uri);
    setImages([...images, result.uri]);
    setPreviewVisible(true);
  };

  const reTakeCamera = () => {
    setPreviewVisible(false);
    handleStartCamera();
  };

  const handleWatchPicture = () => {
    navigation.navigate("ListPicture", {
      images,
    });
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <Layout>
      <HeaderPhoto title="Camera" onlyTitle />
      <View style={styles.container}>
        {previewVisible ? (
          <CameraPreview
            photo={image}
            reTakeCamera={reTakeCamera}
            handleWatchPicture={handleWatchPicture}
          />
        ) : (
          <View style={{ flex: 1 }}>
            <Camera flashMode={flash} style={styles.camera} type={type} ref={refCamera}></Camera>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.torch
                      : Camera.Constants.FlashMode.off
                  );
                }}
              >
                <Ionicons
                  name="flash-outline"
                  size={34}
                  color={COLOR.TEXT_OPACITY_COLOR}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button_take}
                onPress={takePicture}
              >
                <View
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: COLOR.PRIMARY_COLOR,
                    borderRadius: 50,
                  }}
                ></View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}
              >
                <Text style={styles.text}>
                  <Ionicons
                    name="sync"
                    size={34}
                    color={COLOR.TEXT_OPACITY_COLOR}
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Layout>
  );
}

const CameraPreview = ({ photo, reTakeCamera, handleWatchPicture }) => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={{ uri: photo }}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={reTakeCamera}>
            <Text style={styles.text}>Re-Take</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleWatchPicture}>
            <Text style={styles.text}>Xem ảnh</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    Width: "100%",
    height: 600,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 20,
  },
  button_take: {
    borderWidth: 1,
    padding: 2,
    borderColor: COLOR.TEXT_OPACITY_COLOR,
    borderRadius: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
  },
});
