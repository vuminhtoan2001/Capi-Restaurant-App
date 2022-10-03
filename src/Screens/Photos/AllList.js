import { Text, View, FlatList } from "react-native";
import Layout from "~/components/Layout";
import HeaderPhoto from "~/components/Photos/HeaderPhoto";
import TabMenu from "~/components/Photos/TabMenu";
import ItemBox from "~/components/Photos/ItemBox";

export default function AllList() {
  const data = [1, 2, 3, 4, 5, 6, 7];
  const renderItem = ({ item }) => <ItemBox />;
  return (
    <Layout>
      <HeaderPhoto
        title="All Photos"
        textDetail="Lombar Pizza"
        groupIcon={true}
      />
      <TabMenu />
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item) => item}
        style={{flex: 1}}
      />
    </Layout>
  );
}
