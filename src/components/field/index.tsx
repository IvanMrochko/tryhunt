import { connect } from "formik";
import { Button } from "../button";
import * as React from "react";
import { withField } from "./with-field";
import { TextField } from "../text-field";
import { Checkbox } from "../checkbox";
import { Switch } from "../switch";
import { TextArea } from "../text-area";
import { Radio } from "../radio";
import { FileUpload } from "../file-upload";
import { Select } from "../select";
import { MultiInput } from "../multi-input";
//import { MultiUpload } from "../multi-upload";
//import { Phone } from "../phone";
import { DisabledContext } from "../providers";
import { DatePicker } from "../date-picker";
//import { Autocomplete } from "../autocomplete";
import { Slider } from "../slider";
/**
 * Field variations
 */
const Field = {
  Text: withField(TextField),
  TextArea: withField(TextArea),
  Checkbox: withField(Checkbox),
  Switch: withField(Switch),
  Radio: withField(Radio),
  File: withField(FileUpload),
  Select: withField(Select),
  //Autocomplete: withField(Autocomplete),
  Multi: withField(MultiInput),
  //Phone: withField(Phone),
  Date: withField(DatePicker),
  Slider: withField(Slider),
  Button: connect(({ formik: { isSubmitting }, ...rest }) => (
    <DisabledContext.Consumer>
      {isDisabled => {
        return (
          <Button
            isDisabled={isDisabled || rest["isDisabled"] || isSubmitting}
            {...rest}
          />
        );
      }}
    </DisabledContext.Consumer>
  )) as any
  //MultiUpload: withField(MultiUpload)
};

export { Field };
