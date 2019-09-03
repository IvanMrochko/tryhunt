import * as yup from "yup";

/**
 * Restore password start
 */
type RestorePassStart = {
  nationalId: number;
};

const restorePassStartSchema = yup.object().shape<RestorePassStart>({
  nationalId: yup.number().required("Invalid format")
});

export { RestorePassStart, restorePassStartSchema };
