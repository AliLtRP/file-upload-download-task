import {
  SupportedFileInput,
  UploadClient,
  UploadcareFile,
} from "@uploadcare/upload-client";
import { useEffect, useState } from "react";

function useUploadCare({ publicK }: { publicK: string }) {
  const client = new UploadClient({ publicKey: publicK });
  const [data, setData] = useState<UploadcareFile>();
  const [isError, setError] = useState<string>();
  const [fetch, setFetch] = useState<boolean>(false);
  const [file, setFile] = useState<string | SupportedFileInput>("");

  useEffect(() => {
    if (fetch) {
      client
        .uploadFile(file)
        .then((res) => {
          console.log(res);
          setData(res);
        })
        .catch((e) => {
          console.log(e);
          setError(e);
        });
    }
  }, [fetch, file]);

  return { data, isError, setFile, setFetch };
}
export default useUploadCare;
