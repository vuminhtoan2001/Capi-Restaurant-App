import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ItemReview from "./ItemReview";
import { COLOR } from "~/assets/Colors";

export default function ListReview() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, paddingHorizontal: 15 }}>
      <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
        <ItemReview />
        <ItemReview />
        <ItemReview />
      </ScrollView>
    </View>
  );
}
