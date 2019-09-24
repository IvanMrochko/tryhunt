import { WithError } from "@models";
import { ChangeHandler, WithStyles, Dictionary } from "@shared";
import { ISelectScss } from "../select/select.scss";
// import { initAutocomplete } from "@store/autocomplete";
type Value = { id?: any; name?: string };
type AutocompleteProps<O = Dictionary> = WithStyles<ISelectScss> &
  WithError & {
    /**
     * Instance id
     */
    id: any;
    /*
     * Field name
     * */
    name: string;
    /**
     * Block classname
     */
    className?: string;
    /**
     * Control value
     */
    value?: Dictionary;
    /**
     * Get option value
     */
    getValue?: (option) => any;
    /**
     * Get option name
     */
    getName?: (option) => any;
    /**
     * Control label
     */
    label?: any;
    /**
     * Control placeholder
     */
    placeholder?: string;
    /**
     * Is Multi select
     */
    isMulti?: boolean;
    /**
     * Options list
     */
    options?: O[];
    /**
     * Handler
     */
    onChange?: ChangeHandler<Dictionary>;

    isDisabled?: boolean;

    /**
     * Parent value
     */
    parent?: any;
    /**
     * Background
     */
    background?: "white" | "grey";

    getOptions: (id: any, search: string) => any;

    initAutocomplete?: any;
  };

export { AutocompleteProps };
