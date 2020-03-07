# Ionic React Yelp Search

This repo is a demo for how to avoid CORS restrictions imposed on hybrid apps by ios. I chose to use the YELP api since it is one of the few public API with CORS restrictions

The app avoids CORS restrictions by using [cordova-plugin-advanced-http](https://github.com/silkimen/cordova-plugin-advanced-http) and linking a fetch implemetation of the plugin to Apollo graphql client.

## Setup

- Install the [Ionic CLI](https://ionicframework.com/docs/cli) if you dont it installed. `npm install -g @ionic/cli`
- `npm install`
- [Get a Yelp API key](https://www.yelp.com/developers/documentation/v3/authentication)
- Create a `.env` file in the root of the project and add the yelp API key as `REACT_APP_YELP_API_KEY=youryelpapikey`

## How to run on an ios simulator

- `ionic cap sync`
- `ionic cap open ios` This will open the project in xcode
- Select your target simulator and hit the play button to run

## Screenshot

<p align="center">
  <img  src="demogif.gif" alt="demo gif">
</p>
