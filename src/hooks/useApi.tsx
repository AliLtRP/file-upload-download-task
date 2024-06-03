// import { useEffect, useState } from "react";
// import instance from "../api/axios";

// const useApi = () => {
//   const [data, setData] = useState<any | null>(null);
//   const [isloading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>();
//   const [fetch, isFetching] = useState<boolean>(true);

//   useEffect(() => {
//     instance.request({ url: "", method: "", data: "" });
//   }, []);

//   if (isloading) {
//     return <div>Loading....</div>;
//   }

//   if (error) {
//     return new Error(error);
//   }

//   return <div>useApi</div>;
// };

// export default useApi;
