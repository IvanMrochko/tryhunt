class Response<D = any> {
  /**
   * Operation status
   */
  public status: boolean = true;
  /**
   * Errors map
   */
  public errors : {
    [x: string] : string;
  } = {}
  /**
   * Response message
   */
  public message : string = '';
  /**
   * Response dataА
   */
  public data: D = null;
  /**
   * Init
   */
  public constructor(payload : Partial<Response<D>>) {
    Object.assign(this, payload);
  }
}

export { Response };
