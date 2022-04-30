import { Route, Switch, Redirect } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetails";
import AllQoutes from "./pages/AllQuotes";
import QuotesDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/newQuote";
import Layout from "./components/layout/Layout";
import NotFound from './pages/NotFound';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/qoutes" exact>
          <AllQoutes />
        </Route>
        <Route path="/quotes/:quoteId" exact>
          <QuoteDetail />
        </Route>
        <Route path="/new-qoute" exact>
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
