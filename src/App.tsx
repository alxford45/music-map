import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/react-hooks';
import { listBlogs } from "./graphql/queries";
import { gql } from 'apollo-boost';
import { ListBlogsQuery } from "./API";
const App = () => {
  const { loading, data, networkStatus } = useQuery<ListBlogsQuery>(gql`${listBlogs}`);
  if (loading) {
    return <div>loading.....</div>
  }
  console.log(networkStatus);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {data?.listBlogs?.items}
      </div>

    </div>
  );
}

export default App;
