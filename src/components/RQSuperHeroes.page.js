import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useSupperData } from "../hooks/useSuperHeroesQuery";


export const RQSuperHeroesPage = () => {
  const [isFetch, setIsFetch] = useState(false);
  const onSuccess = (data) =>{
    console.log('perform side effect after data fetching ', data);
  } 
  const onError = (error) =>{
    console.log('perform side effect after encountering error ', error)
  }
  const { isLoading, data, isError, error, isFetching } = useSupperData(onSuccess, onError, isFetch)
  if (isLoading || isFetching) {
    return <h2>Loading ... </h2>;
  }
  if (isError) {
    return <h2> {error.message} </h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={()=>setIsFetch(true)}>fetch heros</button>
      {/* {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))} */}
      {data?.map(heroName=> <div key={heroName}>{heroName}</div>)}
    </>
  );
};
