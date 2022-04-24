import { Route, Switch } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetails";
function App() {
  return (
    <Switch>
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
