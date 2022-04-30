import { Route, Switch, Redirect } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetails";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/qoutes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId" exact>
        <QuoteDetail />
      </Route>
      <Route path="/new-qoute" exact>
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
