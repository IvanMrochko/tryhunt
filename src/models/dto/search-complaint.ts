import * as yup from "yup";

/**
 * Search complaint
 */
type SearchComplaint = {
  complainNumber: string;
  procedure: number;
  case: number;
  instalation: number;
};

const searchComplaintSchema = yup.object().shape<SearchComplaint>({
  complainNumber: yup
    .string()
    .label("complainNumber")
    .required("Complaint number is required"),
  procedure: yup
    .number()
    .label("Procedure")
    .required("Procedure number is required"),
  case: yup
    .number()
    .label("Procedure")
    .required("Procedure number is required"),
  instalation: yup
    .number()
    .label("Procedure")
    .required("Procedure number is required")
});

export { SearchComplaint, searchComplaintSchema };
