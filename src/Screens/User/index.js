import { View, Text, TouchableOpacity } from "react-native";
import Button from "~/components/Button";
import { useGetContext } from "~/components/Provider";
import { removeData } from "~/AsyncStorage";
export default function User() {
  const { setIsLogin } = useGetContext();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        primary
        onPress={() => {
          removeData("userToken");
          setIsLogin(false);
        }}
      >
        Sign out
      </Button>
    </View>
  );
}
