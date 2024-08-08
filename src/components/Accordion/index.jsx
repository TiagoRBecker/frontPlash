"use client"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
 
const AccordionComponent = ({name , name_button}) => {
  return (
    <Accordion  allowMultiple borderBottom="1px" borderColor="#ccc">
      <AccordionItem  color={"black"} py={4}>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              display="flex"
              gap="3"
              flex="1"
              textAlign="left"
              color={"black"}
              fontWeight={700}
            >
           {name_button}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}  color={"black"}>
          {name}
          </AccordionPanel>
        
        </h2>
      </AccordionItem>
      
    </Accordion>
  );
};

export default AccordionComponent;
