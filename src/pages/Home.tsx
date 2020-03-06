import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Home: React.FC = () => {
  const { loading, error, data, refetch } = useQuery(BUSINESS_QUERY);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Yelp</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading && <h1>loading</h1>}
        {data &&
          data.search.business.map((bus: any) => {
            return (
              <IonCard>
                <img src={bus.photos[0]}/> 
                <IonCardContent>
                  <h3>{bus.name}</h3>
                </IonCardContent>
              </IonCard>
            );
          })}
      </IonContent>
    </IonPage>
  );
};

export default Home;

let BUSINESS_QUERY = gql`
  {
    search(term: "burrito", location: "san francisco") {
      total
      business {
        name
        rating
        review_count
        photos
        location {
          address1
          city
          state
          country
        }
      }
    }
  }
`;
