export const authEndpoint = "https://accounts.spotify.com/authorize";
//to redirect to local host/homepage
const redirectUri = "http://localhost:3000/";

const clientId = "4382ec2904b045f49a37b80a7939f39a";

const scopes = [

    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
//to pull out the acess token from the link
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {});
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`;