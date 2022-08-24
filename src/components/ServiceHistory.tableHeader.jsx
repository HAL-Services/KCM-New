import React from "react";
import PropTypes from "prop-types";

const ServiceHistoryTableHeader = ({ title }) => {
  return (
    <header className="service-table-header">
      <h1>{title}</h1>
    </header>
  );
};

ServiceHistoryTableHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ServiceHistoryTableHeader;
