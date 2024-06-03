import { useEffect, useState } from "react";
import instance from "../api/axios";
import { AxiosResponse } from "axios";
import { UploadcareFile } from "@uploadcare/upload-client";

const useApi = () => {
  const [apiData, setApiData] = useState<AxiosResponse<UploadcareFile> | null>(
    null
  );
  const [isloading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [fetch, setFetching] = useState<boolean>(true);
  const [payload, setPayload] = useState<string>();
  const [url, setUrl] = useState<string>();
  const [method, setMethod] = useState<string>();

  useEffect(() => {
    if (fetch) {
      setLoading(true);
      instance
        .request({ url, method, params: payload })
        .then((res) => {
          console.log(res);
          setApiData(res.data);
        })
        .catch((e) => {
          setLoading(false);
          setError(e);
        });
    }
    setLoading(false);
  }, [fetch, url, method]);

  return {
    apiData,
    error,
    isloading,
    setMethod,
    setUrl,
    setFetching,
    setPayload,
    setError,
  };
};

export default useApi;
