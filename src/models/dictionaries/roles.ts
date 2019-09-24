type Role = {
  name: string;
  isSystem: boolean;
};

type Roles = {
  [key: string]: Role;
};

export { Roles };
