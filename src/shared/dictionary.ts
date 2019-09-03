import * as path from "object-path";

/**
 * Dictionary model
 */
type Dictionary<T = number, N = string> = {
  /**
   * Entry id
   */
  id: T;
  /**
   * Entry caption
   */
  name: N;
  /**
   * Is has sub entries
   */
  isHasChildren? : boolean;
};

const asDictionary = (id: string, name: string) => (source: any[]) => {
  return source.map(item => ({
    id: path.get(item, id),
    name: path.get(item, name)
  }));
};

export { asDictionary, Dictionary };
