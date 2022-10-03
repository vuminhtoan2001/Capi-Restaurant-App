import { View } from "react-native";
import Layout from "~/components/Layout"
import HeaderPhoto from "~/components/Photos/HeaderPhoto"
import TabMenu from "~/components/Photos/TabMenu"
import ListReview from "~/components/Review/ListReview"
export default function ReviewList(){

    const tabMenu = [
        {
          id: 1,
          name: "Popular",
          qty: 3,
        },
        {
          id: 2,
          name: "My Review",
          qty: 25,
        },
        {
          id: 3,
          name: "All Reviews",
          qty: 10,
        },
      ];

    return <Layout>
        <HeaderPhoto title="Reviews" textDetail="Lombar Pizza" onlyTitle/>
        <TabMenu tabMenu={tabMenu}/>
        <ListReview/>
    </Layout>
}