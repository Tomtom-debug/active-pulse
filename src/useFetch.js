import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); // allows you to abort web requests at any point
    fetch(url, { signal: abortCont.signal })
    .then(res => {
        if (!res.ok) { // error coming back from server
            throw Error('could not fetch the data for that resource');
        } 
        return res.json();
    })
    .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
    })
    .catch(err => {
        // auto catches network / connection error
        if (err.name === 'AbortError') {
            console.log('fetch aborted')
        } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
        }
    })
         // abort the fetch
        return () => abortCont.abort();

    }, [url])

  return { data: data, status:isPending, error:error };
  // return { data, isPending, error }; Alternative without using keys in returned object
}
 
export default useFetch;