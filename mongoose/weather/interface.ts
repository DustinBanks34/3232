// Interface for the Mongoose Weather Model
export declare interface WeatherInterface {
    zip: string;
    weather: string;
    tempC: string;
    tempF: string;
    friends: string[];
};

// Typescript interface with properties mathcing the GraphQL and Mongoose schemas