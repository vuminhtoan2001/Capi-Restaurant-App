import { View, StatusBar } from "react-native";

export default function LayoutFull({statusBarStyle, style, children }) {
  return (
    <View style={[style,{flex:1,backgroundColor:"white"}]}>
      <StatusBar
        barStyle={statusBarStyle || "dark-content" }
        translucent={true}
        backgroundColor="transparent"
      />
      {children}
    </View>
  );
}
