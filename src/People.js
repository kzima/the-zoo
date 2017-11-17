import React, { Component } from "react";
import List from "material-ui/List";
import ListSubheader from "material-ui/List/ListSubheader";
import { LinearProgress } from "material-ui/Progress";
import { withStyles } from "material-ui/styles";

import Person from "./Person";
import { firestore } from "./firebase";

const TOTAL_PEOPLE = 2;

const styles = {
  bar: {
    background: "#e98b3e"
  },
  primaryColor: {
    background: "#f9cb52"
  }
};

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      progress: 0
    };
  }
  componentWillMount() {
    firestore.collection("people").onSnapshot(snapshot => {
      const people = snapshot.docs.map(doc => doc.data());
      this.setState({ people, progress: people.length * 100 / TOTAL_PEOPLE });
    });
  }
  render() {
    const { classes } = this.props;
    const { people, progress } = this.state;
    return (
      <div className="People">
        <LinearProgress
          mode="determinate"
          value={progress}
          classes={{ primaryColor: classes.primaryColor, bar: classes.bar }}
        />
        <List subheader={<ListSubheader>Who's who in the zoo?</ListSubheader>}>
          {people.map(item => <Person key={item.email} item={item} />)}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(People);
