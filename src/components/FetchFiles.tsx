import {
  listOfFiles,
  UploadcareSimpleAuthSchema,
} from "@uploadcare/rest-client";

const FetchFiles = async () => {
  //   const { apiData, error, setPayload, setUrl, setMethod, setFetching } =
  //     useApi();

  //   useEffect(() => {
  //     const handleFetch = () => {
  //       setUrl(`files`);
  //       setMethod("GET");
  //     };

  //     if (fetch) {
  //       handleFetch();
  //     }
  //   }, []);

  //   console.log(apiData);

  const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
    publicKey: "39de4d5d3bfb2f6e1abb",
    secretKey: "8207a55c632e14e908b3",
  });

  const result = await listOfFiles(
    {},
    { authSchema: uploadcareSimpleAuthSchema }
  );

  return result;
};

export default FetchFiles;
