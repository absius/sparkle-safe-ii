import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Checkout from "./pages/Checkout";
import MyJewelry from "./pages/MyJewelry";
import AddJewelry from "./pages/AddJewelry";
import GiveUsYourMoney from "./pages/GiveUsYourMoney";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/myJewelry" component={MyJewelry} />
            <Route exact path="/addJewelry" component={AddJewelry} />
            <Route exact path="/giveUsYourMoney" component={GiveUsYourMoney} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
