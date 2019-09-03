import { Api } from "./api";
import { Http } from "./http.service";
import { enviroments } from "src/enviroments";
import { ArgumentTypes } from "@shared";

type Config = {
  /**
   * Http service init arguments
   */
  http?: any[];
};
/**
 * Services union
 */
class Services {
  /**
   * Primary api
   */
  public api: Api = new Api(new Http(...this.config.http));
  /**
   * Configuration for http server
   */
  public constructor(private config: Config = { http: [] }) {}
}

export { Services, Api };
