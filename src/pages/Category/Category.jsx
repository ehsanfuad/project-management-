import React from "react";
import useFetch from "../../hooks/useFetch";

function Category() {
  const { res, loading, error } = useFetch("/cats");
  // console.log("res", res);

  if (loading) return "loading...";
  if (!loading && res?.error?.status === 401) {
    localStorage.removeItem("jwt");
    window.location.reload(false);
  }
  if (res.data === null) return "";

  return (
    <div>
      {res.data.map((item, index) => (
        <div>{item.attributes.name}</div>
      ))}
    </div>
  );
}

export default Category;
