let apiURL;
const expressPort = 5000;
const apiUrls = {
  development: `http://localhost:${expressPort}/api`,
  production: `https://nameless-journey-52364.herokuapp.com`
};
if (window.location.hostname === "localhost") {
  apiURL = apiUrls.development;
} else {
  apiURL = apiUrls.production;
}

export default apiURL;