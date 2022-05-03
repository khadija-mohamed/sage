import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className="Actioncard">
        <CardMedia
          component="img"
          height="150"
          src="https://images.unsplash.com/photo-1597717503010-ee19fef2db91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="white sage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sage
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Salvia officinalis, the common sage or just sage, is a perennial,
            evergreen subshrub, with woody stems, grayish leaves, and blue to
            purplish flowers. It is a member of the mint family Lamiaceae and
            native to the Mediterranean region, though it has been naturalized
            in many places throughout the world.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
