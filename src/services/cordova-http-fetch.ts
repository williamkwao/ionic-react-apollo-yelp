import HttpStatus from "http-status-codes";
declare global {
  interface Window {
    cordova: any;
  }
}
export const cordovaHttpFetchImpl = async (url: string, options: any) => {
  let cordova: any = window.cordova;
  //if cordova is not available use web fetch
  if (!cordova) {
    return fetch(url, options);
  }
  let http = cordova.plugin.http;

  http.setDataSerializer("json");
  options.data = JSON.parse(options.body);
  options.method = options.method.toLowerCase();

  let response: any = await new Promise((resolve, reject) => {
    http.sendRequest(url, options, resolve, reject);
  })

  const responseBody =
    typeof response.data === `object` ? JSON.stringify(response.data) : response.data;
  const headers = new Headers();
  Object.entries(response.headers).forEach(function([key, value]) {
    headers.append(key, <string>value);
  });

  return new Response(responseBody, {
    status: response.status,
    statusText: HttpStatus.getStatusText(response.status),
    headers
  });
};
