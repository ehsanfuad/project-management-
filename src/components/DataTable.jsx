import React from "react";
import { DataGrid, GridColDef, GridToolbar, faIR } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import useClasses from "../hooks/useClasses";

function DataTable(props) {
  const styles = (theme) => ({
    test: {
      "& .MuiTablePagination-actions": {
        direction: "ltr",
      },
      "& .muirtl-rtrcn9-MuiTablePagination-root .MuiTablePagination-selectLabel":
        {
          display: "none",
        },
      "& .MuiDataGrid-columnHeaders": {
        position: "sticky",
      },
      "& .MuiTablePagination-displayedRows": {
        fontFamily: "vazirMedium",
      },
      "& .MuiInputBase-root": {
        fontFamily: "vazirMedium",
      },
    },
  });
  const classes = useClasses(styles);
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const handleDelete = (id) => {
    //delete the item
    // mutation.mutate(id)
  };

  // const actionColumn = {
  //   field: "action",
  //   headerName: "درصد پیشرفت",
  //   width: 200,
  //   renderCell: (params) => {
  //     return (
  //       <div className="action">
  //         <Link to={`/${props.slug}/${params.row.id}`}>
  //           <img src="/view.svg" alt="" />
  //         </Link>
  //         <div className="delete" onClick={() => handleDelete(params.row.id)}>
  //           <img src="/delete.svg" alt="" />
  //         </div>
  //       </div>
  //     );
  //   },
  // };

  return (
    <div>
      {/* <CacheProvider value={cacheRtl}> */}
      <DataGrid
        style={{ width: "70vw" }}
        className={classes.test}
        rows={props.rows}
        localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
        columns={[...props.columns]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        // pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      {/* </CacheProvider> */}
    </div>
  );
}

export default DataTable;
