import "./App.css";
import CustomProgressSlider from "./components/CustomProgressSlider";
import CustomTitle from "./components/CustomTitle";
import Wrapper from "./components/Wrapper";
import { RiDownloadCloud2Line } from "react-icons/ri";
import CustomFileReceiver from "./components/CustomFileReceiver";
import CustomButton from "./components/CustomButton";
import useUploadCare from "./hooks/useUploadCare";
import fileDialog from "file-dialog";
import FetchFiles from "./components/FetchFiles";
import { useEffect, useState } from "react";

function App() {
  const [render, setRender] = useState<boolean>(false);
  const { data, progress, total, isVisible, loaded, setFile, setFetch } =
    useUploadCare({
      publicK: "14d03156cea50f38ae21",
      handleLoading: () => handleRender(),
    });

  const [filesList, setFilesList] = useState();
  const [flag, setFlag] = useState<boolean>(true);

  const fetch = async () => {
    try {
      const res = await FetchFiles();
      setFilesList(res.results);
      setFlag(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (flag) {
      fetch();
      console.log("fetching...");
      setFlag(false);
    }
  }, [filesList, flag]);

  useEffect(() => {
    fetch();
  }, [data]);

  const handleRender = () => {
    setRender(false);
  };

  const handleClick = () => {
    fileDialog()
      .then((file) => {
        setFlag(true);
        setRender(true);
        setFetch(true);
        setFile(file[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Wrapper className="bg-[#F6F9FF] w-full h-auto min-h-[100vh] flex flex-col justify-center items-center">
      <Wrapper className="w-80 flex justify-end">
        <Wrapper className="p-4 bg-white rounded-2xl border-8 border-[#E0EAFD]">
          <RiDownloadCloud2Line size={25} onClick={() => [handleClick()]} />
        </Wrapper>
      </Wrapper>
      <Wrapper className="h-auto w-80 flex flex-col justify-start items-start gap-0 p-6 my-4 rounded-3xl shadow-2xl bg-white overflow-y-auto">
        {render && (
          <Wrapper
            className={`w-full flex flex-col justify-evenly items-start p-2 rounded-xl bg-[#F6F9FF] h-28`}
          >
            <CustomTitle
              title="Loading...."
              className={` mulish text-[18px] ml-1`}
            />

            <Wrapper className="relative w-full h-4 bg-white rounded-full overflow-hidden border-2 border-[#E0EAFD] opacity-100 p-2">
              <CustomProgressSlider isVisible={isVisible} progress={progress} />
            </Wrapper>

            <CustomTitle
              title={
                `${
                  (loaded / 1000).toFixed(1) == "0.4"
                    ? 0.0
                    : (loaded / 1000).toFixed(1)
                } KB of ${
                  (total / 1000).toFixed(1) == "0.4"
                    ? 0.0
                    : (loaded / 1000).toFixed(1)
                } KB` || "256 bytes of 1 TB"
              }
              className="mulish text-xs font-light ml-1"
            />
          </Wrapper>
        )}

        {filesList?.map((v, i) => {
          return (
            <CustomFileReceiver
              originalFilename={v.originalFilename}
              size={v.size}
              isStored={v.isStored}
              uuid={v.uuid}
              originalFileUrl={v.originalFileUrl}
            />
          );
        })}

        <CustomButton
          title="Go to Downloads"
          className="border-2 w-full h-14 rounded-lg mt-8 mb-2 border-[#A1ACD2] mulish text-sm font-normal"
          url={filesList}
        />
      </Wrapper>
    </Wrapper>
  );
}

export default App;
