import "../styles/DataTable.styles.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../OfflineAPI/DataTable";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import { useState } from "react";
import { useEffect } from "react";

const userColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "Name",
    width: 150,
    sortable: false,
    renderCell: (params) => {
      return <div className="data_user">{params.row.username}</div>;
    },
  },
  {
    field: "carNumber",
    headerName: "Car Number",
    width: 130,
    sortable: false,
    renderCell: (params) => {
      return <div className="data_carNumber">{params.row.carNumber}</div>;
    },
  },
  {
    field: "carModel",
    headerName: "Car Model",
    width: 130,
    sortable: false,
    renderCell: (params) => {
      return <div>{params.row.carModel}</div>;
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    renderCell: (params) => {
      return <div>{params.row.date}</div>;
    },
  },
  {
    field: "time",
    headerName: "Time",
    width: 150,
    sortable: false,
    renderCell: (params) => {
      return <div>{params.row.time}</div>;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.booking}`}>
          {params.row.booking}
        </div>
      );
    },
  },
];

export default function DataTable() {
  const [userServices, setUserServices] = useState([]);
  const { user } = useContext(Context);
  useEffect(() => {
    async function fetchDetails() {
      axios
        .get("http://localhost:5000/services/details", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          body: {
            email: user.email,
          },
        })
        .then((data) => setUserServices(data.data.allServices))
        .catch((err) => console.log(err.message));
    }
    fetchDetails();
  }, [user]);

  return (
    <div
      style={{
        height: "auto",
        width: "80%",
        marginTop: "4rem",
        boxShadow:
          "rgba(79, 71, 235, 0.3) 0px 1px 2px,rgba(79, 71, 235, 0.3) 0px 4px 15px, rgba(79, 71, 235, 0.3) 0px 8px 20px,rgba(80, 71, 235, 0.3) 0px 8px 16px, rgba(80, 71, 235, 0.3) 0px 16px 32px,rgba(79, 71, 235, 0.3) 0px 32px 64px",
        borderRadius: "2rem",
      }}
    >
      <DataGrid
        className="data-grid"
        // getRowId={() => userServices.length}
        getRowId={(row) => row._id}
        rows={userServices}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight={true}
        style={{ border: "none", padding: "1rem" }}
      />
    </div>
  );
}
