import axios from "axios";
import { useQuery } from "react-query";
const fetchData = (endpoint) => {
    return axios.get(endpoint);
  };
export const useSupperData = (onSuccess, onError, isFetch = false) =>{
     return  useQuery(
        "supper-hero",
        () => fetchData("http://localhost:4000/superheroes"),
        {
          // cacheTime: 5000 default 5 minutes
          // staleTime: 30000,   //default 0 (mặc định cứ mỗi lần vào page gọi 1 lần)
          // refetchOnMount:true , //  true | false | 'always' refetch khi app bị mount
          // refetchOnWindowFocus: true // true | false | 'always' refetch khi có sự thay đổi dữ liệu
          // refetchInterval: 2000, // refetch lại api sau 2 s
          // refetchIntervalInBackground: true,  // refetch ngay cả khi ko ở trang đó
          enabled: isFetch, // disable fetching data
          onSuccess, // thanh  cong
          onError, // that bai thi lam gi
          select: (data)=> {
            const superHeroes = data.data.map(hero=>hero.name);
            return superHeroes   // return array[]
          } // destructuring data trả về
        }
      );
}
