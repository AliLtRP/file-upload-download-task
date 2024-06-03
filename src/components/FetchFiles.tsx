import {
  listOfFiles,
  UploadcareSimpleAuthSchema,
} from "@uploadcare/rest-client";

const FetchFiles = async () => {
  const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
    publicKey: "14d03156cea50f38ae21",
    secretKey: "33d7233477c2c9e24e0f",
  });

  const result = await listOfFiles(
    {},
    { authSchema: uploadcareSimpleAuthSchema }
  );

  return result;
};

export default FetchFiles;
