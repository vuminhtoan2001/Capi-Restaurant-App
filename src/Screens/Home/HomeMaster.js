import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";

import HeaderTitleDetail from "~/components/HeaderTitleDetail";
import Layout from "~/components/Layout";
import SearchInput from "~/components/SearchInput";
import { COLOR } from "~/assets/Colors";
import Card from "~/components/Card";
import GroupCard from "~/components/GroupCard";
import GroupCardCollection from "~/components/GroupCardCollection";
import FavoriteCuisine from "~/components/FavoriteCuisine"
import Brands from "~/components/Brands"

export default function HomeMaster() {
  return (
    <Layout>
      <HeaderTitleDetail title="Your location" textDetail="New York City" />
      <ScrollView style={{backgroundColor:COLOR.BACKGROUND_OPACITY_COLOR}}>
        <View style={{ paddingBottom: 12, backgroundColor:COLOR.WHITE }}>
          <SearchInput />
        </View>
        <GroupCard title="Lengendary food"/>
        <GroupCard title="Trending this week"/>
        <GroupCardCollection title="Collection by Capi"/>
        <FavoriteCuisine title="Favorite Cuisines"/>
        <Brands title="Popular brands"/>
      </ScrollView>
    </Layout>
  );
}
