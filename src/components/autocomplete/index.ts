import { withStyles } from "@shared";
import { Autocomplete as Component } from "./autocomplete.component";
import { connect } from "react-redux";
//import { State } from "@store/state";
import { AutocompleteProps } from "./autocomplete.props";
import { bindActionCreators } from "redux";
// import { initAutocomplete } from "@store/autocomplete";
/**
 * Styled component
 */
const Autocomplete: typeof Component = connect((props: AutocompleteProps) => {
  return {
    ...{}
  };
})(withStyles(require("./autocomplete.scss"))(Component) as any) as any;

export { Autocomplete };
