import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Amplify from "@aws-amplify/core";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import config from "./aws-exports";
import App from "./App";

Amplify.configure(config);

const client = new ApolloClient({
    uri:
        config.aws_appsync_graphqlEndpoint,
    headers: {
        "X-Api-Key": config.aws_appsync_apiKey
    }
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root") as HTMLElement
);
