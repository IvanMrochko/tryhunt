import { Field, FieldProps, connect } from "formik";
import * as React from "react";
import * as path from "object-path";

/**
 * Wrap component with field api
 */
const withField = function <T>(source: T) {
  const Source: any = source;

  return (connect(({ formik, ...props }) => {
    const error = path.get(formik.errors, props["name"]);
    const isSubmited = formik.submitCount > 0;

    return (
      <Source
        onChange={formik.setFieldValue}
        isError={isSubmited && error}
        value={path.get(formik.values, props["name"])}
        error={error}
        {...props}
      />
    );
  }) as any) as typeof source;
};

/**
 * Form controls props for reuse
 */
type FormControlProps<V = string> = {
  /**
   * Field error
   */
  error?: string | JSX.Element;
  /**
   * Is has error
   */
  isError?: boolean;
  /**
   * Control label
   */
  label?: React.ReactNode;
  /***
   * Is form control disabled
   */
  isDisabled?: boolean
  /**
   * Change handler
   */
  onChange?: (name: string, value: V) => any;
  /**
   * Control value
   */
  value?: V;
  /**
   * Form control name
   */
  name?: string;
  /**
   * Is value required
   */
  required ?: boolean;
};

export { withField, FormControlProps };
