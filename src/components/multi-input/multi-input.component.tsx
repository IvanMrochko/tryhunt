import * as React from "react";
import { MultiInputProps } from "./multi-input.props";
import * as classNames from "classnames";

class MultiInput extends React.PureComponent<MultiInputProps> {
  /**
   * Refs list
   */
  public inputs: { [x: string]: HTMLInputElement } = {};
  /**
   * Fill value
   */
  public processValueFirstTime(value: any) {
    const { chars } = this.props;
    const symbols = chars.filter(item => typeof item != "string");
    if (!value || value.toString().length != symbols.length) {
      return symbols.map((item, index) => value[index] || " ").join("");
    }

    this.isFirstValueEmited = true;

    return value;
  }

  /**
   * Is firs value emited
   */
  public isFirstValueEmited: boolean = false;
  /**
   * Handle input change
   */
  public onChange = (char: RegExp, index: number) => (event: KeyboardEvent) => {
    const keyCode = event.which || event.keyCode;

    switch (keyCode) {
      case 37:
        return this.focusPrevious(index);
      case 39:
        return this.focusNext(index);
    }

    if (!char.test(event.key)) return;

    const { onChange, name, value } = this.props;

    const result = (this.isFirstValueEmited
      ? value
      : this.processValueFirstTime(value)
    )
      .toString()
      .split("");

    result[index] = event.key;

    onChange(name, result.join(""));

    this.focusNext(index);
  };

  /**
   * Focus prev field
   */
  public focusPrevious = (index: number) => {
    const { chars } = this.props;
    let prevFieldIndex;
    for (let i = index - 1; i >= 0; i--) {
      const char = chars[i];

      if (typeof char == "string") continue;

      prevFieldIndex = i;

      break;
    }

    if (prevFieldIndex || prevFieldIndex == 0)
      this.inputs["char" + prevFieldIndex].focus();
  };

  /**
   * Focus next field
   */
  public focusNext = (index: number) => {
    const { chars } = this.props;
    const nextFieldIndex = chars.findIndex(
      (item, charIndex) => charIndex > index && typeof item != "string"
    );

    if (nextFieldIndex > -1) this.inputs["char" + nextFieldIndex].focus();
  };
  /**
   * Renders MultiInput
   */
  public render() {
    const { styles, chars, value, label, isError, error } = this.props;

    return (
      <div className={classNames(styles.multiInput, {
        [styles.multiInputInvalid]: isError
      })}> 
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputs}>
          {chars.map((char, index) =>
            typeof char == "string" ? (
              <div key={index}>{char}</div>
            ) : (
              <input
                className={styles.cell}
                key={index}
                value={value[index] || ""}
                onChange={() => {}} // just to prevent react from spaming console
                onKeyDown={this.onChange(char, index) as any}
                ref={ref => (this.inputs["char" + index] = ref)}
              />
            )
          )}
        </div>
        {isError && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
}

export { MultiInput };
