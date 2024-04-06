// import React from 'react'


// we assign 3 value by union
type DataFetchProps = {
  status: "loading" | "error" | "success"
};

const DataFetch = ({ status }: DataFetchProps) => {
  if (status === "loading") {
    return <h2>Data is Loading</h2>;
  } else if (status === "error") {
    return <h2>!Error. Data could not fetch</h2>;
  }
  
  return (

    <>
      <h2>Data fetched Sucessfully!</h2>
    </>
  )
}

export default DataFetch;
