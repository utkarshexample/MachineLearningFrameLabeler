///// ADDED AFTER SUBMISSION

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useFetchVideoMetaData = (fetchFunction, onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchVideoData() {
      try {
        setLoading(true);
        const data = await fetchFunction();
        onSuccess(data);
        setError(null);
      } catch (e) {
        setError(e);
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchVideoData();
  }, [dispatch]);

  return { loading, error };
};

export default useFetchVideoMetaData;
