import * as React from "react";
import { Field } from "src/components/field";
import { withFormik } from "formik";
import { withStyles } from "@shared";
import { Button, Tabs, Tab } from "@components";
import { Form, FormikProps } from "formik";
import * as moment from "moment";
/**
 *  Components
 */

class Component extends React.Component<any> {
  /**
   * Kit state
   */
  public state = {
    isChecked: false,
    isSwitched: false,
    radio: 1,
    text: "",
    files: [],
    textArea: "",
    multiInput: "",
    file: null,
    multiSelect: [],
    currentRow: null
  };

  /**
   * Setter
   */
  public onChange = (name, value) => this.setState({ [name]: value });
  /**
   * On settings click open menu
   */
  public openMenu = (id: number) => {
    const { currentRow } = this.state;
    this.setState({ currentRow: id });
  };
  /**
   * Hide menu on click outside
   */
  public hide = () => {
    this.setState({ currentRow: null });
  };
  /**
   * Get remaining time
   */
  public duration = end => {
    const currentDate = moment();
    const endDate = moment(end, "DD-MM-YYYY");
    const months = endDate.diff(currentDate, "months");
    currentDate.add(months, "months");
    const days = endDate.diff(currentDate, "days");
    const remainingMonths = months === 0 ? "" : `${months}m`;
    const remainingDays = days === 0 ? "" : `${days}d`;
    let remaining = `${remainingMonths}  ${remainingDays}`;
    if (currentDate > endDate) {
      remaining = "Ended";
    }
    return remaining;
  };
  /**
   * Get track length
   */
  public trackLength = (start, end) => {
    const startDateMoment = moment(start, "DD-MM-YYYY");
    const endDateMoment = moment(end, "DD-MM-YYYY");
    const currentDateMoment = moment();
    const startDate = +startDateMoment;
    const endDate = +endDateMoment;
    const diff = +currentDateMoment.diff(startDateMoment);
    const percentage =
      Math.round(100 - (100 * diff) / (endDate - startDate)) + "%";
    console.log(percentage);
    return { width: percentage };
  };
  render() {
    const { styles } = this.props;
    const {
      isChecked,
      radio,
      isSwitched,
      text,
      textArea,
      file,
      files,
      multiInput,
      multiSelect,
      currentRow
    } = this.state;

    return (
      <section className={styles.container}>
        <Form>
          <Field.Text name="email" isRequired placeholder="Email" />
          <Field.Text name="passwort" isRequired placeholder="Password" />
          <Field.TextArea name="textArea" label="Area" />
          <Field.Checkbox label="Checkbox" name="checkbox" />
          <Field.Switch label="Switch" name="switch" value={true} />
          <Field.Select
            placeholder={"Select Country"}
            value={multiSelect}
            name={"multiSelect"}
            options={[
              { id: "country1", name: "United Arab Emirates" },
              { id: "country2", name: "Afghanistan" },
              { id: "country3", name: "Angola" },
              { id: "country4", name: "Austria" },
              { id: "country5", name: "Belarus" },
              { id: "country6", name: "Brazil" },
              { id: "country7", name: "Canada" },
              { id: "country8", name: "Croatia " },
              { id: "country9", name: "Denmark" },
              { id: "country10", name: "Estonia" }
            ]}
            onChange={this.onChange}
          />
          <Field.Date name="date" />

          <Button
            className={styles.submit}
            type="submit"
            // isDisabled={isSubmiting}
          >
            Primary
          </Button>
          <Button
            className={styles.submit}
            type="submit"
            theme="secondary"
            // isDisabled={isSubmiting}
          >
            Secondary
          </Button>
          <Button theme="error">Warning</Button>
        </Form>
      </section>
    );
  }
}

const Components: typeof Component = (withFormik<any, any>({
  mapPropsToValues: ({
    initialValues: { email = "", password = "", isRememberMe = false } = {}
  }) => ({
    email,
    password,
    isRememberMe
  }),
  handleSubmit: (values, { props: { onSubmit }, ...bag }) => {
    onSubmit(values, bag);
  }
})(withStyles(require("./components.scss"))(Component) as any) as any) as any;

export { Components };
