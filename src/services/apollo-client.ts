import ApolloClient from "apollo-boost";
import { cordovaHttpFetchImpl } from "./cordova-http-fetch";
import { YELP_API_KEY } from "./keys";

export let client = new ApolloClient({
  uri: "https://api.yelp.com/v3/graphql",
  fetch: cordovaHttpFetchImpl,
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
    "Accept-Language": "en_US"
  }
});
