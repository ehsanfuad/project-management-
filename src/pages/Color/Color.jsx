import React from "react";
import useFetch from "../../hooks/useFetch";

function Color() {
  const { res, loading, error } = useFetch("/colors");
  console.log(res);
  console.log("error", error);
  if (loading) return "loading...";
  if (!loading && res?.error?.status === 401) {
    localStorage.removeItem("jwt");
    window.location.reload(false);
  }
  if (res.data === null) return null;
  return (
    <div>
      {res.data.map((item, index) => (
        <div>{item.attributes.name}</div>
      ))}
    </div>
  );
}

export default Color;
