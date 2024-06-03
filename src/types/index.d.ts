import { UploadcareFile } from "@uploadcare/upload-client";

export interface CustomTitleProps {
  title?: string;
  className?: string;
  handleClick?: () => void;
}

export interface UploadCareApiResponse extends UploadcareFile {
  handleDelete?: () => void;
}

export interface AxiosUploadCare {
  url: string;
  method: string;
  payload?: string;
}
