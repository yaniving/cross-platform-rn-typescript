
import * as React from "react";

import { StyleSheet, View, Text } from "react-native";
import  { IInputModel } from "../../model";
import Routing from '../../utils/routing';
// import { getInput } from "../../selectors/input";
import { addItem } from "../../actions";
import { connect } from "react-redux";

const { Link } = Routing;

// styles
const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  buttons: {
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 2,
    padding: 10
  },
  buttonText: {
    "color": "#fff",
  },
  marginTop: {
    marginTop: 20,
  }
});

// create props interface
export interface IProps {
  input: IInputModel ,
  onClicked: (text: string) => void,
}

interface IState {
  input: IInputModel,
}

class SecondPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  // Render page
  public render() {
    return (
      <View style={styles.root}>
          <Text style={{color: "#000", fontSize: 15}}>Welcome to Second Page</Text>
          <View style={styles.button}>
            <Link to="/">
              <Text style={styles.buttonText}>Back to Page 1</Text>
            </Link>
          </View>
      </View>
    );
  }
}



const mapDispatchToProps = {
  onClicked: addItem
};

export default connect<any, any, any>(null, mapDispatchToProps)(SecondPage)
