import { Card, CardBody, Skeleton, SkeletonText, Box, HStack } from "@chakra-ui/react";
import React from "react";

const GenSkel = () => {
  return (
   
      <Box>

          <Skeleton height="32px" />
          
    <SkeletonText></SkeletonText>
          
      </Box>
   
  );
};

export default GenSkel;