import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
const NewQuote = () => {
    const history = useHistory();
    history.pushState('/quotes');
    const addQuoteHandler = quoteData => {
        console.log(quoteData);
    }
    return <QuoteForm onAddQuote={addQuoteHandler} />
};

export default NewQuote;