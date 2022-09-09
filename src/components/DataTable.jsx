import "../styles/DataTable.styles.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../OfflineAPI/DataTable";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";
const userColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 160,
  },
  {
    field: "user",
    headerName: "Name",
    width: 160,
    sortable: false,
    renderCell: (params) => {
      return <div className="data_user">{params.row.username}</div>;
    },
  },
  {
    field: "carNumber",
    headerName: "Car Number",
    width: 160,
    sortable: false,
    renderCell: (params) => {
      return <div className="data_carNumber">{params.row.carNumber}</div>;
    },
  },
  {
    field: "carModel",
    headerName: "Car Model",
    width: 160,
    sortable: false,
    renderCell: (params) => {
      return <div>{params.row.carModel}</div>;
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 160,
    renderCell: (params) => {
      return <div>{params.row.date}</div>;
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
const actionColumn = [
  {
    field: "action",
    headerName: "View Bill",
    width: 97,
    renderCell: (params) => {
      function handleClick(e) {
        const id = e.target.value;
        const billPath = `http://localhost:5000/services/view/${id}/bill`;
        window.open(billPath, "_blank");
      }

      return (
        <div className="cellAction">
          <button
            onClick={handleClick}
            value={params.row._id}
            disabled={params.row.booking !== "Completed"}
            className="viewButton"
          >
            View
          </button>
        </div>
      );
    },
  },
];
export default function DataTable() {
  const [userServices, setUserServices] = useState([]);
  const [fetching, setFetching] = useState(false);
  const { user } = useContext(Context);
  const history = useHistory();
  useEffect(() => {
    setFetching(true);
    async function fetchDetails() {
      try {
        const data = await axios.get("http://localhost:5000/services/details", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          body: {
            email: user.email,
          },
        });
        setUserServices(data.data.allServices);
        setFetching(false);
      } catch (error) {
        setFetching(false);
        alert("Try again later");
        history.push("/");
      }
    }
    fetchDetails();
  },[]);

  return (
    <div
      style={{
        height: "auto",
        width: "90%",
        marginTop: "4rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      {fetching ? (
        <Loader />
      ) : (
        <DataGrid
          className="data-grid"
          getRowId={(row) => row._id}
          rows={userServices}
          columns={userColumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight={true}
          style={{ border: "none", padding: "1rem" }}
        />
      )}
    </div>
  );
}
