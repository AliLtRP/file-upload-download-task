import { FileInfo } from "@uploadcare/upload-client";
import axios from "axios";
import fileDownload from "js-file-download";
import { CSSProperties, useEffect } from "react";
import { a } from "../types";

const CustomButton = ({
  title,
  className,
  style,
  url,
}: {
  title?: string;
  className?: string;
  style?: CSSProperties;
  url?: a[];
}) => {
  useEffect(() => {
    console.log(url);
  }, [url]);

  const handleClick = () => {
    url?.map((v, i) => {
      axios
        .get(v.originalFileUrl!, { responseType: "blob" })
        .then((res) => {
          console.log(res);
          fileDownload(res.data, v.originalFilename);
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);
  };

  return (
    <button
      className={className}
      onClick={() => handleClick()}
      style={style}
      type="submit"
    >
      {title}
    </button>
  );
};

export default CustomButton;
