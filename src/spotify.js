export const authEndpoint = "https://accounts.spotify.com/authorize"; //we ask spotify to handle authorization and return us authorized users
const redirectUri = "http://localhost:3000/"; //after clicking login to spotify it redirects us to spotify login page and then redirect to home page(localhost) after authorized
const clientId = "38eef2c04c564b49abf370fcb16fad79";

//we dont have rights to delete songs or any thing in spotify but we can read play pause
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //accessToken=mysupersecretkey=rishi&janjal
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
