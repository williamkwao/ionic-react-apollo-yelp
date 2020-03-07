import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonSearchbar
} from "@ionic/react";
import React, { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [searchInputText, setSearchInputText] = useState<string>("");
  const { loading, error, data, refetch } = useQuery(BUSINESS_QUERY, {
    variables: { search }
  });
  if (error) {
    console.log("err", error);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Yelp</IonTitle>
        </IonToolbar>
        <form
          onSubmit={e => {
            e.preventDefault();
            setSearch(searchInputText);
            refetch();
          }}
        >
          <IonSearchbar
            inputMode="text"
            value={searchInputText}
            onIonChange={e => {
              setSearchInputText(e.detail.value || "");
            }}
          ></IonSearchbar>
        </form>
      </IonHeader>
      <IonContent>
        {loading && <h1>loading</h1>}
        {data &&
          data.search.business.map((bus: any) => {
            return (
              <IonCard>
                <img src={bus.photos[0]} />
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
  query search($search: String) {
    search(term: $search, location: "san francisco") {
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
