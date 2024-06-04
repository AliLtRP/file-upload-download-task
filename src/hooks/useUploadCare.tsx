import axios from "axios";
import { useEffect, useState } from "react";

function useUploadCare({
  publicK,
  handleLoading,
}: {
  publicK: string;
  handleLoading: (flag: boolean) => void;
}) {
  const [data, setData] = useState<any>();
  const [isError, setError] = useState<string>();
  const [fetch, setFetch] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const [progress, setProgress] = useState<number>(0);
  const [loaded, setLoaded] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!fetch || !file) return;

    setIsVisible(true);

    const formData = new FormData();
    formData.append("UPLOADCARE_PUB_KEY", publicK);
    formData.append("UPLOADCARE_STORE", "auto");
    formData.append("file", file);

    const uploadFile = async () => {
      try {
        const res = await axios.post(
          "https://upload.uploadcare.com/base/",
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              setLoaded(loaded);
              setTotal(total!);
              setProgress((loaded / total!) * 97);
            },
          }
        );
        setData(res.data);
        setIsVisible(false);
        handleLoading(false);
        reset();
      } catch (error) {
        setError(error.message);
        setIsVisible(false);
      } finally {
        setFetch(false);
      }
    };

    uploadFile();
  }, [fetch, file]);

  const reset = () => {
    setProgress(0);
    setTotal(0);
    setLoaded(0);
    handleLoading;
  };

  return {
    data,
    isError,
    progress,
    total,
    loaded,
    setFile,
    setFetch,
    isVisible,
    fetch,
  };
}

export default useUploadCare;
