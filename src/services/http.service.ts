import axios from "axios";
import * as queryString from "query-string";
import { Response } from "@models";

type RequestParams = {
  /**
   * Url
   */
  url: string;
  /**
   * Http method
   */
  method?: "GET" | "POST" | "PUT" | "DELETE" | "UPDATE";
  /**
   * Request data
   */
  data?: any;
  /**
   * Base request url
   */
  baseUrl?: string;
  /**
   * Headers
   */
  headers?: any;
};

type Handlers = {
  /**
   * Handle 401 error
   */
  unAuthorized?: (response) => any;
};

/**
 * Http service
 */
class Http {
  /**
   * Init
   */
  public constructor(
    private baseUrl?: string,
    private handlers: Handlers = {}
  ) {}
  /**
   * Send request
   */
  public request = async <R = any>({
    data = {},
    method = "GET",
    url,
    headers = {}
  }: RequestParams): Promise<Response<R>> => {
    const token = localStorage.getItem("token");

    try {
      let result;

      try {
        result = await axios({
          method,
          baseURL: this.baseUrl,
          headers: {
            ...headers,
            ...(token ? { Authorization: "Bearer " + token } : {})
          },
          url:
            method == "GET" && Object.keys(data).length > 0
              ? `${url}?${queryString.stringify(data)}`
              : url,
          data: method == "GET" ? undefined : data
        } as any);
      } catch (error) {
        result = error.response;

        if (result.status == 401) {
          this.handlers.unAuthorized(result);

          throw new Response({
            data: null,
            errors: {},
            message: "Your session expired or you are unauthorized",
            status: false
          });
        }
      }

      if (!result.data) {
        throw new Response({
          data: null,
          errors: {},
          message: result.statusText,
          status: false
        });
      }

      const response = new Response(result.data);

      if (!response.status) {
        throw response;
      }

      return response;
    } catch (error) {
      if (error instanceof Response) {
        throw error;
      }

      throw new Response({
        message: error.message,
        status: false
      });
    }
  };
}

export { Http };
