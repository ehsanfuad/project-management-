import React from "react";
import DataTable from "../../components/DataTable";
import { projects } from "../../data/data";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import ShowState from "../../components/ShowState/ShowState";
function Proj() {
  const columns = [
    { field: "id", headerName: "شماره", width: 30 },
    {
      field: "title",
      type: "string",
      headerName: "عنوان پروژه",
      width: 250,
      renderCell: (params) => {
        return (
          <Link
            to={`/project/${params.row.id}`}
            component={RouterLink}
            underline="none"
            color="inherit"
          >
            <div className="text-lime-600 underline">{params.row.title}</div>
          </Link>
        );
      },
    },
    {
      field: "owner",
      type: "string",
      headerName: "مجری",
      width: 150,
    },
    {
      field: "state",
      headerName: "وضعیت",
      width: 150,
      renderCell: (params) => {
        return <ShowState state={params.row.state} />;
      },
    },
    {
      field: "progress",
      headerName: "درصد پیشرفت",
      width: 250,
      renderCell: (params) => {
        return <ProgressBar percentage={params.row.progress} />;
      },
    },
    // {
    //   field: "createdAt",
    //   headerName: "Created At",
    //   width: 200,
    //   type: "string",
    // },
    // {
    //   field: "peygiri",
    //   headerName: "مسئول پیگیری",
    //   width: 200,
    //   type: "string",
    // },
    // {
    //   field: "nazerSazmani",
    //   type: "string",
    //   headerName: "ناظر سازمانی",
    //   width: 150,
    // },
  ];
  return <DataTable slug="products" columns={columns} rows={projects} />;
}

export default Proj;
