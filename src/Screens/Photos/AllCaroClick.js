import { View } from "react-native";

import { COLOR } from "~/assets/Colors";
import Layout from "~/components/Layout";
import HeaderPhoto from "~/components/Photos/HeaderPhoto";
import ItemBox from "~/components/Photos/ItemBox"

export default function AllCaroClick() {
  return (
    <Layout>
      <HeaderPhoto title="Photo" onlyTitle />

      <View
        style={{
          width: "100%",
          height: 4,
          backgroundColor: COLOR.BACKGROUND_OPACITY_COLOR,
        }}
      ></View>

      <ItemBox/>


    </Layout>
  );
}
