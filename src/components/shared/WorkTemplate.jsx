import { Box } from "./Box.jsx";
import { Title } from "./Title.jsx";
import { TextAccent, TextDescription } from "./Text.jsx";
import { List, ListItem } from "./List.jsx";
import PropTypes from "prop-types";
import { useWindowSize } from "../../utils/useWindowSize.jsx";
import { AnimatedBorders } from "./AnimatedBorders.jsx";

const RANDOM = Math.random();

export const WorkTemplate = ({ item, isLast }) => {
  const { isMobile } = useWindowSize();

  return isMobile ? (
    <>
      <Box>
        <AnimatedBorders
          hasBorderTop
          hasBorderLeft
          hasBorderRight
          hasBorderBottom
        >
          <Title text={item.title} marginBottom={"12px"} />
          <TextDescription marginBottom={"20px"}>
            {item.position}
          </TextDescription>
          <TextAccent>{item.date}</TextAccent>
        </AnimatedBorders>
      </Box>
      <Box>
        <AnimatedBorders hasBorderLeft hasBorderRight hasBorderBottom={isLast}>
          {item.descriptions.map((description, idx) => (
            <TextDescription
              key={`${RANDOM}-description-${idx}`}
              marginBottom={"34px"}
            >
              {description}
            </TextDescription>
          ))}
          {item.bullets.length > 0 && (
            <List>
              {item.bullets.map((bullet, idx) => (
                <ListItem key={`${RANDOM}-item-${idx}`}>
                  <TextDescription>{bullet}</TextDescription>
                </ListItem>
              ))}
            </List>
          )}
        </AnimatedBorders>
      </Box>
    </>
  ) : (
    <div style={{ display: "flex" }}>
      <Box
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          ...(!isLast && { borderBottom: "none" }),
          borderLeft: "none",
          borderRight: "none",
          padding: 32,
        }}
      >
        <AnimatedBorders hasBorderRight hasBorderTop>
          <Title text={item.title} marginBottom={"12px"} />
          <TextDescription marginBottom={"20px"}>
            {item.position}
          </TextDescription>
          <TextAccent>{item.date}</TextAccent>
        </AnimatedBorders>
      </Box>
      <Box
        style={{
          display: "flex",
          flex: 3,
          flexDirection: "column",
          marginRight: 40,
          ...(!isLast && { borderBottom: "none" }),
          padding: 32,
        }}
      >
        {item.descriptions.map((description, idx) => (
          <TextDescription
            key={`${RANDOM}-description-${idx}`}
            marginBottom={"34px"}
          >
            {description}
          </TextDescription>
        ))}
        {item.bullets.length > 0 && (
          <List style={{ paddingLeft: 30 }}>
            <AnimatedBorders hasBorderTop hasBorderRight>
              {item.bullets.map((bullet, idx) => (
                <ListItem key={`${RANDOM}-item-${idx}`}>
                  <TextDescription>{bullet}</TextDescription>
                </ListItem>
              ))}
            </AnimatedBorders>
          </List>
        )}
      </Box>
    </div>
  );
};

WorkTemplate.propTypes = {
  item: {
    title: PropTypes.string,
    position: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
  },
  isLast: PropTypes.bool,
};
