import { View, StatusBar } from "react-native";

export default function LayoutFull({statusBarStyle, style, children }) {
  return (
    <View style={[style,{flex:1,marginTop:StatusBar.currentHeight, backgroundColor:"white"}]}>
      <StatusBar
        barStyle={statusBarStyle || "dark-content" }
        translucent={true}
        backgroundColor="#fff"
      />
      {children}
    </View>
  );
}
