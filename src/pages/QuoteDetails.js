import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!'},
  { id: 'q2', author: 'Maxmilan', text: 'Learning React is great!'}
];

const QuotesDetails = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId );

    if(!quote) {
      return <p>
        No quote found!
      </p>
    }

    return (
    <Fragment>
      <HighlightedQuote/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </Fragment>
  );
};

export default QuotesDetails;
