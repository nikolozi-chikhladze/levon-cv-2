import { useWindowSize } from "../../utils/useWindowSize";
import { AnimatedBorders } from "./AnimatedBorders";
import { Box } from "./Box";
import { WorkPaginationText } from "./Text";
import PropTypes from "prop-types";

export const WorkPagination = ({ previous, next }) => {
  const { isMobile } = useWindowSize();
  if (isMobile) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
        }}
      >
        <AnimatedBorders
          hasBorderTop
          hasBorderBottom
          hasBorderLeft
          hasBorderRight
        >
          <Box>
            <AnimatedBorders hasBorderRight>
              <WorkPaginationText
                to={previous}
                style={!previous ? { color: "#d9d9d9" } : {}}
              >
                Previous page
              </WorkPaginationText>
            </AnimatedBorders>
          </Box>
          <Box>
            <WorkPaginationText
              to={next}
              style={!next ? { color: "#d1d1d1" } : {}}
            >
              Next page
            </WorkPaginationText>
          </Box>
        </AnimatedBorders>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
      }}
    >
      <AnimatedBorders hasBorderBottom>
        <Box
          style={{
            padding: 0,
            borderLeft: "none",
            borderRight: "none",
            borderTop: "none",
          }}
        >
          <AnimatedBorders hasBorderRight>
            <WorkPaginationText
              to={previous}
              style={!previous ? { color: "#d9d9d9" } : {}}
            >
              Previous page
            </WorkPaginationText>
          </AnimatedBorders>
        </Box>
        <Box style={{ flex: 10, borderTop: "none" }} />
        <Box style={{ padding: 0, borderLeft: "none", borderTop: "none" }}>
          <AnimatedBorders hasBorderRight hasBorderLeft>
            <WorkPaginationText
              to={next}
              style={!next ? { color: "#d1d1d1" } : {}}
            >
              Next page
            </WorkPaginationText>
          </AnimatedBorders>
        </Box>
      </AnimatedBorders>
    </div>
  );
};

WorkPagination.propTypes = {
  previous: PropTypes.string,
  next: PropTypes.string,
};
