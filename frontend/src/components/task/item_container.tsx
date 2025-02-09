import { Box, Card, Typography } from "@mui/material";
import ItemBox from "./item_box";
import { ITaskDetails } from "../../type";
import React from "react";

interface Props {
  title: string;
  tasks: ITaskDetails[];
  getAllTasks: () => Promise<void>
}

const ItemContainer: React.FC<Props> = ({ title, tasks, getAllTasks }) => {
  return (
    <>
      <Card sx={{ padding: "1rem", margin: "1rem", width:{md:'300px',xs:'100%'},}}>
        <Box
          sx={{
            backgroundColor: "#4f9af0",
            padding: "8px",
            marginBottom: "1rem",
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        {/* passing each task based status */}

        {tasks.map((item: ITaskDetails) => {
          if (item.status === title) {
            return <ItemBox itemDetails={item} getAllTasks={getAllTasks}/>;
          }
        })}
      </Card>
    </>
  );
};

export default ItemContainer;
