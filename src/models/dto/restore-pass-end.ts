import * as yup from "yup";

/**
 * Restore password end
 */
type RestorePassEnd = {
  nationalId: number;
};

const RestorePassEndSchema = yup.object().shape<RestorePassEnd>({
  nationalId: yup.number().required("Id Number is required")
});

export { RestorePassEnd, RestorePassEndSchema };
