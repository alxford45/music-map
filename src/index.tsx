import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";


const client = new ApolloClient({
    uri:
        "https://g33nmiwnmnagnawqqw54sqvgl4.appsync-api.us-east-2.amazonaws.com/graphql",
    headers: {
        "X-Api-Key": "da2-4huensyzjndbnk5hnm5ebol23u"
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root") as HTMLElement
);
