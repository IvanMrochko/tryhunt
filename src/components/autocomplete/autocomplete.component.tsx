import * as React from "react";
import { AutocompleteProps } from "./autocomplete.props";
import ReactSelect, { components } from "react-select";
import { Card } from "../card";
import * as classNames from "classnames";
import { Checkbox } from "../checkbox";
import { capitalize } from "@shared";
import { Icon } from "../icon";
// import { enviroment } from "@env";
import axios from "axios";
import { type } from "os";

/**
 * Drop
 */
const MultiDropdown = ({
  styles,
  value,
  getOptionLabel,
  getOptionValue,
  options,
  onChange
}) => {
  const columns = options.length > 2 ? [0, Math.ceil(options.length / 2)] : [0];

  return (
    <div className={styles.dropdownContainer}>
      {columns.map((column, index) => {
        return (
          <div className={styles.dropdownContent} key={index}>
            {options.slice(column, columns[index + 1]).map(option => {
              return (
                <div
                  className={styles.dropdownCheckbox}
                  key={getOptionValue(option)}
                >
                  <Checkbox
                    value={value.some(
                      item => getOptionValue(item) == getOptionValue(option)
                    )}
                    label={getOptionLabel(option)}
                    onChange={() => onChange(option)}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

/**
 * Menu renderer
 */
const Menu = ({
  children,
  innerProps,
  selectProps: {
    customClassNames: styles,
    value,
    getOptionValue,
    getOptionLabel,
    onChange,
    options
  },
  isMulti
}) => (
  <Card {...innerProps} className={styles.dropdown}>
    {isMulti ? (
      <MultiDropdown
        onChange={onChange}
        styles={styles}
        value={value}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        options={options}
      />
    ) : (
      children
    )}
  </Card>
);

/**
 * COntrol wrapper
 */
const Control = ({
  children,
  innerProps,
  selectProps: { customClassNames: styles }
}) => (
  <div {...innerProps} className={styles.control}>
    {children}
  </div>
);

/**
 * Menu list cmp
 */
const MenuList = ({
  children,
  selectProps: { customClassNames: styles },
  innerProps
}) => (
  <div {...innerProps} className={styles.menuList}>
    {children}
  </div>
);

/**
 * List option
 */
const Option = ({
  data,
  innerProps,
  selectProps: { customClassNames: styles, getOptionLabel }
}) => {
  return (
    <div {...innerProps} className={styles.option}>
      {getOptionLabel(data)}
    </div>
  );
};

/**
 * Multi value block
 */
const MultiValue = ({
  children,
  data,
  innerProps,
  selectProps: { customClassNames: styles, onChange }
}) => (
  <div {...innerProps} className={styles.multiValue}>
    <div className={styles.multiValueLabel}>{children}</div>
    <div className={styles.multiValueRemove} onClick={() => onChange(data)}>
      <Icon name="cross" />
    </div>
  </div>
);

/**
 * Single value block
 */
const SingleValue = ({
  children,
  innerProps,
  selectProps: { customClassNames: styles }
}) => (
  <div {...innerProps} className={styles.singleValue}>
    {children}
  </div>
);

/**
 * Placeholder
 */
const Placeholder = ({
  children,
  innerProps,
  selectProps: { customClassNames: styles }
}) => (
  <div {...innerProps} className={styles.placeholder}>
    {children}
  </div>
);

/**
 * Controls
 */
const IndicatorsContainer = ({
  selectProps: { customClassNames: styles, menuIsOpen },
  innerProps
}) => (
  <div className={styles.controls} {...innerProps}>
    <Icon
      className={classNames(styles.controlsArrow, {
        [styles.controlsArrowReversed]: menuIsOpen
      })}
      name="arrowDown"
    />
  </div>
);

/**
 * Value wrapper
 */
const ValueContainer = ({
  children,
  selectProps: { customClassNames: styles }
}) => <div className={styles.valueContainer}>{children}</div>;

/**
 * Select container
 */
const SelectContainer = ({
  children,
  innerProps,
  selectProps: { customClassNames: styles }
}) => (
  <div {...innerProps} className={styles.selectContainer}>
    {children}
  </div>
);

class Autocomplete extends React.Component<AutocompleteProps> {
  /*
   * set init state for options
   * */
  public componentDidMount() {
    const { id, isMulti, value, getOptions, initAutocomplete } = this.props;

    initAutocomplete(id);

    getOptions(id, value ? value.name : "");
  }

  public componentDidUpdate(props) {
    if (this.props.parent && this.props.parent != props.parent) {
      this.loadOptions(this.props.value ? this.props.value.name : "", {
        action: "input-change"
      });
    }
  }

  public state = {
    search: ""
  };

  /**
   * Defaults
   */
  public static defaultProps = {
    getValue: ({ id }) => id,
    getName: ({ name }) => name,
    background: "grey"
  };

  /**
   * Custom Styles for Select
   */
  public customStyles = {
    control: provided => ({
      ...provided,
      height: 47,
      fontSize: 14
    }),
    placeholder: () => ({
      fontSize: 14,
      color: "#6B6B6B"
    })
  };

  public select;
  public delay;
  public loadOptions = (search, meta?) => {
    const { getOptions, id, value, options } = this.props;

    if (!meta || meta.action != "input-change") return;

    clearTimeout(this.delay);

    this.delay = setTimeout(() => {
      getOptions(id, search);
    }, 350);

    return search;
  };

  /*
   * getter for field value
   * */
  public get value() {
    const { value } = this.props;

    return value || null;
  }

  /**
   * Handle typing
   */
  public onChange = option => {
    const { getValue } = this.props;
    return getValue(option);
  };

  /**
   * Handle select
   */
  public onSelect = option => {
    const { name, onChange } = this.props;

    onChange(name, option);

    if (option == null) {
      this.loadOptions("", { action: "input-change" });
    }
  };

  public onFilter = (option, search) => {
    console.log(option, search);

    return true;
  };
  /**
   * Multi Select render
   */

  /**
   * Renders Select
   */
  public render() {
    const {
      styles,
      value,
      isMulti,
      placeholder,
      name,
      getValue,
      getName,
      label,
      options,
      isError,
      onChange,
      error,
      className,
      isDisabled,
      background
    } = this.props;
    return (
      <div
        className={classNames(
          styles.select,
          className,
          styles["select" + capitalize(background)],
          {
            [styles.selectInvalid]: isError,
            [styles.selectDisabled]: isDisabled
          }
        )}
      >
        {label && <label className={styles.label}>{label}</label>}
        <ReactSelect
          ref={ref => (this.select = ref)}
          onSelectResetsInput={false}
          onBlurResetsInput={false}
          onInputChange={this.loadOptions}
          isMulti={isMulti}
          isDisabled={isDisabled}
          isClearable
          customClassNames={styles}
          options={options}
          styles={this.customStyles}
          getOptionLabel={getName}
          getOptionValue={getValue}
          value={this.value}
          onChange={this.onSelect}
          // filterOption={this.onFilter}
          placeholder={placeholder || "Start typing..."}
          components={{
            ClearIndicator: () => null,
            IndicatorSeparator: () => null,
            SingleValue,
            MultiValue,
            Control,
            Option,
            Menu: props => <Menu {...props} options={options} />,
            MenuList,
            Placeholder,
            ValueContainer,
            IndicatorsContainer,
            SelectContainer
          }}
        />

        {isError && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
}

export { Autocomplete };
