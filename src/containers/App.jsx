import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Layout from "./Layout";
import Posts from "./Posts";
import PostPage from "./PostPage";
import Write from "./Write";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/post/:id" component={PostPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
