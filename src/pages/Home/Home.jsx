import React from "react";
import CardSummery from "../../components/CardSummery/CardSummery";
import VerticalBar from "../../components/Charts/VerticalBar";
import PieChart from "../../components/Charts/PieChart";
import useFetch from "../../hooks/useFetch";

function Home() {
  // const { res, loading, error } = useFetch(`/users/16`);
  return (
    <>
      <CardSummery />
      <div className="flex flex-row gap-2 mt-4 ">
        <div
          className="flex-1 rounded-2xl shadow-md shadow-lime-200 border-2 p-4 pt-9 dark:bg-secondary-dark-bg
          dark:text-gray-200"
        >
          <VerticalBar />
        </div>
        <div
          className="w-80 rounded-2xl shadow-md shadow-lime-200 border-2 p-4 pt-9 dark:bg-secondary-dark-bg
          dark:text-gray-200"
        >
          <PieChart />
        </div>
      </div>
    </>
  );
}

export default Home;
