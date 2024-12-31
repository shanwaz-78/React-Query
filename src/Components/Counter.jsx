import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useQuery } from "react-query";
import { getPosts } from "../services/Api.js";

const Counter = () => {
  const { data, isLoading, isError, error } = useQuery(
    "Get Posts",
    async () => (await getPosts("/posts")).data,
    { refetchOnWindowFocus: true }
  );

  if (isLoading) {
    return <div style={{ textAlign: "center" }}>Data is Loading....</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <DataTable value={data} tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="ID" sortable></Column>
        <Column field="title" header="Title" sortable></Column>
        <Column field="body" header="Body" sortable></Column>
      </DataTable>
    </div>
  );
};

export default Counter;
