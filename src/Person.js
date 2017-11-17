import React from "react";
import { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";

const Person = ({ item }) => {
  const { displayName, email, photoURL } = item;
  return (
    <ListItem className="Person" button>
      <Avatar>
        <img src={photoURL} alt="" className="avatar" />
      </Avatar>
      <ListItemText primary={displayName} secondary={email} />
    </ListItem>
  );
};
export default Person;
