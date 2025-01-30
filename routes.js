// Import fetch module for making asynchronous requests
import fetch from "node-fetch";

// Create a route to existing endpoint & use a fat arrow function with, 
// concise body syntax to return the string
const routeHello = () => "Hello World!";

// Create a route for a new endpoint, this endpoint will  add a page to our, 
// web server displaying a list of usernames & IDs.
const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    try {

        // use await for fetch call
        const response = await fetch(url);

        // convert to json as soon as the call succeeds
        data = await response.json();
    } catch (err) {
        return err;
    }
    const names = data
    .map((item) => `id: ${item.id}, name: ${item.name}`)

    // use break tags to display them in rows and return the string
    .join("<br>");
    return names;
};
// export the two routes under their specified names
export { routeHello, routeAPINames };
