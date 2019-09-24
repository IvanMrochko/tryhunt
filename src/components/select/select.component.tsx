import * as React from "react";
import { SelectProps } from "./select.props";
import ReactSelect, { components } from "react-select";
import { Card } from "../card";
import * as classNames from "classnames";
import { Checkbox } from "../checkbox";
import { capitalize } from "@shared";
import { Icon } from "../icon";

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
  label,
  innerProps,
  selectProps: { customClassNames: styles }
}) => (
  <div {...innerProps} className={styles.option}>
    {label}
  </div>
);

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

class Select extends React.Component<SelectProps> {
  /**
   * Defaults
   */
  public static defaultProps = {
    onChange: () => {},
    getValue: ({ id }) => id,
    getName: ({ name }) => name,
    onSelectOption: () => {},
    options: [],
    background: "grey"
  };

  /**
   * Custom Styles for Select
   */
  public customStyles = {
    control: provided => ({
      ...provided,
      height: 55,
      fontSize: 18
    }),
    placeholder: () => ({
      fontSize: 18,
      color: "#6B6B6B"
    })
  };

  /**
   * Handle selection
   */
  public onChange = option => {
    const {
      getValue,
      onSelectOption,
      name,
      onChange,
      isMulti,
      value
    } = this.props;

    if (isMulti) {
      const isSelected = value.some(item => item == getValue(option));

      return onChange(
        isSelected
          ? value.filter(item => item != getValue(option))
          : [...value, getValue(option)],
        name
      );
    }

    onChange(name, getValue(option));
    onSelectOption(option);
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
      getValue,
      getName,
      label,
      options,
      isError,
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
          isMulti={isMulti}
          isDisabled={isDisabled}
          customClassNames={styles}
          styles={this.customStyles}
          getOptionLabel={getName}
          getOptionValue={getValue}
          options={options}
          value={
            isMulti
              ? options.filter(one => value.some(item => item == getValue(one)))
              : options.find(one => getValue(one) == value) || null
          }
          onChange={this.onChange}
          placeholder={placeholder}
          components={{
            ClearIndicator: () => null,
            IndicatorSeparator: () => null,
            SingleValue,
            MultiValue,
            Control,
            Option,
            Menu,
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

export { Select };
