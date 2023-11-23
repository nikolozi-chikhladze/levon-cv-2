import React from 'react'
import {Box} from "./Box.jsx";
import {Title} from "./Title.jsx";
import {TextAccent, TextDescription} from "./Text.jsx";
import {List, ListItem} from "./List.jsx";

export const WorkTemplate = ({item}) => {
    return (
        <>
            <Box>
                <Title text={item.title} marginBottom={'12px'}/>
                <TextDescription marginBottom={'20px'}>
                    {item.position}
                </TextDescription>
                <TextAccent>
                    {item.date}
                </TextAccent>
            </Box>
            <Box>
                {item.descriptions.map(description => (
                    <TextDescription marginBottom={'34px'}>
                        {description}
                    </TextDescription>
                ))}
                {item.bullets.length > 0 &&
                    <List>
                        {item.bullets.map(bullet =>
                            <ListItem>
                                <TextDescription>
                                    {bullet}
                                </TextDescription>
                            </ListItem>
                        )}
                    </List>
                }
            </Box>
        </>
    )
}
