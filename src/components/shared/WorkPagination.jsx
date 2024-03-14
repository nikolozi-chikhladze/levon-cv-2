import { useWindowSize } from "../../utils/useWindowSize";
import { Box } from "./Box";
import { WorkPaginationText } from "./Text";
import PropTypes from "prop-types";

export const WorkPagination = ({ previous, next }) => {
  const { isMobile } = useWindowSize()
  if (isMobile) {
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
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box style={{padding: 0, borderLeft: 'none', borderRight: 'none', borderTop: 'none'}}>
        <WorkPaginationText
          to={previous}
          style={!previous ? { color: "#d9d9d9" } : {}}
        >
          Previous page
        </WorkPaginationText>
      </Box>
      <Box style={{flex: 10, borderTop: 'none'}} />
      <Box style={{padding: 0, borderLeft: 'none', borderTop: 'none'}}>
        <WorkPaginationText to={next} style={!next ? { color: "#d1d1d1" } : {}}>
          Next page
        </WorkPaginationText>
      </Box>
    </div>
  );
};

WorkPagination.propTypes = {
  previous: PropTypes.string,
  next: PropTypes.string,
};
