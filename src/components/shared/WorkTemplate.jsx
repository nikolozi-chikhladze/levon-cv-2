import { Box } from "./Box.jsx";
import { Title } from "./Title.jsx";
import { TextAccent, TextDescription } from "./Text.jsx";
import { List, ListItem } from "./List.jsx";
import PropTypes from "prop-types";

const RANDOM = Math.random();

export const WorkTemplate = ({ item }) => {
  return (
    <>
      <Box>
        <Title text={item.title} marginBottom={"12px"} />
        <TextDescription marginBottom={"20px"}>{item.position}</TextDescription>
        <TextAccent>{item.date}</TextAccent>
      </Box>
      <Box>
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
      </Box>
    </>
  );
};

WorkTemplate.propTypes = {
  item: {
    title: PropTypes.string,
    position: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
  },
};
