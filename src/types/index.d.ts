export interface CustomTitleProps {
  title?: string;
  className?: string;
  handleClick?: () => void;
}

export interface UploadCareApiResponse {
  originalFilename: string;
  isStored: boolean;
  size: number;
}
