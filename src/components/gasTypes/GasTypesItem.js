import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const GasTypeItem = ({ index, gasType, onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const formatISODate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Card
        variant="outlined"
        style={{
          marginBottom: "10px",
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            {" "}
            <Typography
              style={{
                padding: "1px 5px",
                borderRadius: "50%",
                border: "1px solid gray",
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
              }}
            >
              {index + 1}
            </Typography>
            <IconButton onClick={handleMenuOpen}>
              <MoreVert />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={onEdit}>Edit</MenuItem>
              <MenuItem onClick={onDelete}>Delete</MenuItem>
            </Menu>
          </div>

          <Divider style={{ width: "95%", alignSelf: "center" }} />

          <Typography
            style={{
              padding: "8px",
              display: "flex",
              width: "95%",
              justifyContent: "space-between",
            }}
          >
            <span>Gas Type</span>
            <span> {gasType.name}</span>
          </Typography>

          <Typography
            style={{
              padding: "8px",
              display: "flex",
              width: "95%",
              justifyContent: "space-between",
            }}
          >
            <span>6 kg</span>
            <span>KES {gasType.buyingPrice6kg}</span>
          </Typography>

          <Typography
            style={{
              padding: "8px",
              display: "flex",
              width: "95%",
              justifyContent: "space-between",
            }}
          >
            <span>13 kg</span>
            <span>KES {gasType.buyingPrice13kg}</span>
          </Typography>

          <Typography
            style={{
              padding: "8px",
              display: "flex",
              width: "95%",
              justifyContent: "space-between",
            }}
          >
            <span>Date</span>
            <span>{formatISODate(gasType.timestamp)}</span>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default GasTypeItem;
