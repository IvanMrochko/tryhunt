import * as yup from "yup";

/**
 * Change Temporary Pass credentials
 */
type ChangeTempPass = {
  newPass: string;
  repeatPass: string;
};

const changeTempPassSchema = yup.object().shape<ChangeTempPass>({
  newPass: yup
    .string()
    .label("Password")
    .required("Password is required"),
  repeatPass: yup
    .string()
    .label("Password")
    .required("Password is required")
});

export { ChangeTempPass, changeTempPassSchema };
