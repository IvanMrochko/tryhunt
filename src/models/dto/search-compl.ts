import * as yup from "yup";

/**
 * Search complaint
 */
type SearchComplaintLogin = {
  complaintNumber: number;
};

const searchComplaintSchemaLogin = yup.object().shape<SearchComplaintLogin>({
  complaintNumber: yup.number().required("Complaint number is required")
});

export { SearchComplaintLogin, searchComplaintSchemaLogin };
