import * as yup from "yup";

/**
 * Registration credentials
 */
type Registration = {
  region: string;
  userType: string;
  namearab: string;
  nameeng: string;
  phoneNumber: string;
  roles: string;
  powers: string;
};

const registrationSchema = yup.object().shape<Registration>({
  region: yup
    .string()
    .label("Region")
    .required("Region is required"),
  userType: yup
    .string()
    .label("Usertype")
    .required("Usertype is required"),
  namearab: yup
    .string()
    .label("Namearab")
    .required("Namearab is required"),
  nameeng: yup
    .string()
    .label("Nameeng")
    .required("Nameeng is required"),
  phoneNumber: yup
    .string()
    .label("Mobnumber")
    .required("Mobnumber is required"),
  roles: yup
    .string()
    .label("Roles")
    .required("Roles is required"),
  powers: yup
    .string()
    .label("Powers")
    .required("Powers is required")
});

export { Registration, registrationSchema };
