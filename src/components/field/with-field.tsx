import * as React from "react";
import { Field, FieldProps, connect, FormikProps, Formik } from "formik";
import * as path from "object-path";
import { DisabledContext } from "../providers";
//import { useTranslation } from "react-i18next";

function withField<T = any>(Component: T) {
  const ToRender: any = Component;
  const Result = connect((props: any) => {
    const { formik, ...other } = props as { formik: FormikProps<any> };
    //const { t } = useTranslation();
    const error = formik.errors[props.name];

    return (
      <DisabledContext.Consumer>
        {isDisabled => {
          return (
            <ToRender
              {...other}
              value={path.get(formik.values, props.name)}
              isDisabled={
                formik.isSubmitting || other["isDisabled"] || isDisabled
              }
              isError={formik.submitCount >= 1 && formik.errors[props.name]}
              error={
                props.name in formik.errors
                  ? (error as string).startsWith("schema.")
                    ? (error as any)
                    : error
                  : undefined
              }
              onChange={formik.setFieldValue}
            />
          );
        }}
      </DisabledContext.Consumer>
    );
  });

  return (Result as any) as T;
}
export { withField };
