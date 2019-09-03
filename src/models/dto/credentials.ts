import * as yup from "yup";

/**
 * Auth credentials
 */
type Credentials = {
  nationalId: number;
  password: string;
};

const credentialsSchema = yup.object().shape<Credentials>({
  nationalId: yup.number().required("Natinal Id is required"),
  password: yup.string().required("Password is required")
});

export { Credentials, credentialsSchema };
