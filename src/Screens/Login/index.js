import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { useGetContext } from "~/components/Provider";
import { storeData } from "~/AsyncStorage";

import { COLOR } from "~/assets/Colors";
import Button from "~/components/Button";

export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
    register,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setIsLogin } = useGetContext();

  const onSubmit = async(data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    // console.log(users);
    if (data.email == "toan@gmail.com" && data.password == 123456) {
      // console.log("Email==>",data.email);
      Alert.alert("Đăng nhập thành công!");
      storeData("userToken", data.email);
      setIsLogin?.(true);
    } else {
      Alert.alert("Tài khoản đăng nhập không đúng!");
      // reset();
      // Alert.alert(JSON.stringify(data));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar
            barStyle="dark-content"
            translucent={true}
            backgroundColor="transparent"
          />

          <Text style={styles.title}>Wellcome to Capi Restaurant</Text>
          <Text style={[styles.text, { marginTop: 8 }]}>
            Sign in to continue
          </Text>
          <View style={{ width: "100%", paddingHorizontal: 15 }}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Email không được bỏ trống!",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input]}
                  selectionColor="black"
                  placeholder="Email"
                  placeholderTextColor={COLOR.TEXT_OPACITY_COLOR}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  onSubmitEditing={() => setFocus("password")}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Mật khẩu không được bỏ trống!",
                },
                minLength: {
                  value: 6,
                  message: "Mật khẩu tối thiểu 6 ký tự",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                style={[styles.input]}
                selectionColor="black"
                placeholder="Password"
                placeholderTextColor={COLOR.TEXT_OPACITY_COLOR}
                secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  {...register("password")}
                  onSubmitEditing={handleSubmit(onSubmit)}
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password.message}</Text>
            )}
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text
                  style={[
                    styles.text,
                    {
                      color: COLOR.PRIMARY_COLOR,
                      marginVertical: 20,
                    },
                  ]}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <Button primary onPress={handleSubmit(onSubmit)}>
              Login
            </Button>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={styles.text}>New to Capi Restaurant?</Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.text,
                    { color: COLOR.PRIMARY_COLOR, marginLeft: 6 },
                  ]}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 20,
  },
  title: {
    fontFamily: "quicksan_700",
    fontSize: 24,
    color: COLOR.BLACK,
    width: 220,
    textAlign: "center",
  },
  text: {
    fontFamily: "quicksan_700",
    fontSize: 16,
    color: COLOR.TEXT_OPACITY_COLOR,
  },
  input: {
    width: "100%",
    paddingHorizontal: 2,
    paddingTop: 43,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: COLOR.BORDER_COLOR,
    fontFamily: "quicksan_700",
  },
  error:{
    fontFamily: "quicksan_500",
    fontSize:12,
    color:"red"
  }
});
