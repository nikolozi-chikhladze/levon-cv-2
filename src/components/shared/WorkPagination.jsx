import { WorkPaginationText } from "./Text";
import PropTypes from "prop-types";

export const WorkPagination = ({ previous, next }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <WorkPaginationText
        to={previous}
        style={!previous ? { color: "#d9d9d9" } : {}}
      >
        Previous page
      </WorkPaginationText>
      <WorkPaginationText to={next} style={!next ? { color: "#d1d1d1" } : {}}>
        Next page
      </WorkPaginationText>
    </div>
  );
};

WorkPagination.propTypes = {
  previous: PropTypes.string,
  next: PropTypes.string,
};
