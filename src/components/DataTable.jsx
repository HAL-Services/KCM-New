import "../styles/DataTable.styles.scss";
import { DataGrid } from "@mui/x-data-grid";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { userRows, userColumns } from "../OfflineAPI/DataTable";

export default function DataTable() {
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
        rows={userRows}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight={true}
        style={{ border: "none", padding: "1rem" }}
      />
    </div>
  );
}
