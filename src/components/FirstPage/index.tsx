
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
// import Sample from "../Sample";
import  { InputModel } from "../../model";
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
  input: InputModel ,
  onClicked: (text: string) => void,
}

interface IState {
  input: InputModel,
}

class FirstPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  // Render page
  public render() {
    return (
      <View style={styles.root}>
          <View style={styles.button}>
            <Link to="/second">
              <Text style={styles.buttonText}>Go to Page 2</Text>
            </Link>
          </View>
          {/*<Sample input={this.props.input.text} onClick={this.props.onClicked} />*/}
      </View>
    );
  }
}

// export default FirstPage;
// const mapStateToProps = (state: IState) => ({
//   input: getInput(state)
// })

const mapDispatchToProps = {
  onClicked: addItem
}

export default connect<any, any, any>(null, mapDispatchToProps)(FirstPage)
