import { FileInfo, UploadcareFile } from "@uploadcare/upload-client";

export interface CustomTitleProps {
  title?: string;
  className?: string;
  handleClick?: () => void;
}

export interface UploadCareApiResponse extends UploadcareFile {
  handleDelete?: () => void;
  uuid?: string;
  originalFileUrl?: any;
}

export interface AxiosUploadCare {
  url: string;
  method: string;
  payload?: string;
}

export interface inComingData {
  result: Array<object>;
  total: number;
}

export interface a extends FileInfo {
  originalFileUrl?: string;
}
