import { connect, FormikProps } from "formik";
import { useEffect } from "react";

class FormikManager<V> {
  /**
   * Bind form value
   */
  public bind(formik: FormikProps<V>) {
    this.formik = formik;
  }

  /**
   * Unbind form
   */
  public unBind() {
    this.formik = null;
  }
  /**
   * Formik instance
   */
  private formik: FormikProps<V> = null;

  /**
   * Get form
   */
  public get form() {
    return this.formik || null;
  }
}

/**
 * Bind form component
 */
const BindForm = connect<{
  bind?: ((formik: FormikProps<any>) => any) | FormikManager<any>;
  unBind?: Function;
}>(({ formik, bind, unBind }) => {
  useEffect(() => {
    if (bind) {
      if (bind instanceof FormikManager) {
        bind.bind(formik);

        return () => bind.bind(formik);
      } else {
        bind(formik);

        return () => bind(formik);
      }
    }
  }, [formik]);

  useEffect(
    () => () => {
      if (unBind) {
        unBind();
      }

      if (bind && bind instanceof FormikManager) {
        bind.unBind();
      }
    },
    []
  );

  return null;
});

export * from "./with-field";
export { BindForm, FormikManager };
