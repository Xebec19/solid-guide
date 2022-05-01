import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllQuotes } from "../lib/api";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maxmilan", text: "Learning React is great!" },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, []);

  if (status === "pending") {
    <div className="centered">
      <LoadingSpinner />
    </div>;
  }

  if (error) {
    return <p className="centred focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)){
      return <NoQuotesFound/>
  }
    return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
