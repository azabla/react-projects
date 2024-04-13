import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook Test</h1>
      {loading ? <h3>loading1 please wait</h3> : null}
      {error ? <h3>error occurred : {error} </h3> : null}
      {data && data.products && data.products.length
      ? data.products.map((dataItem)=>(<p key = {dataItem.key}>{dataItem.title}</p>)) 
      :null}
    </div>
  );
}
