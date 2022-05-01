import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();
    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes');
        }
    }, [status]);
    history.pushState('/quotes');
    const addQuoteHandler = quoteData => {
        console.log(quoteData);
        sendRequest(quoteData);
        history.push('/quotes');
    }
    return <QuoteForm isLoading={ isLoading } onAddQuote={addQuoteHandler} />
};

export default NewQuote;