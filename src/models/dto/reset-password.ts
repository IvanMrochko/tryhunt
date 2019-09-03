import * as yup from "yup";

/**
 * Reset Password
 */
type ResetPassword = {
  password: string;
  repeatPassword: string;
};

const resetPasswordSchema = yup.object().shape<ResetPassword>({
  password: yup
    .string()
    .label("NewPassword")
    .required("New Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .label("RepeatPassword")
    .required("Repeat Password is required")
});

export { ResetPassword, resetPasswordSchema };
