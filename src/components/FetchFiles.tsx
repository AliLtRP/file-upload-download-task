import {
  listOfFiles,
  UploadcareSimpleAuthSchema,
} from "@uploadcare/rest-client";

const FetchFiles = async () => {
  const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
    publicKey: "d397e169eeaeaab6f930",
    secretKey: "6967a8fe72bc3b51288d",
  });

  const result = await listOfFiles(
    {},
    { authSchema: uploadcareSimpleAuthSchema }
  );

  return result;
};

export default FetchFiles;
