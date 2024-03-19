import { RoleType } from '../../user/models/enums/role-type.enum';

export interface PayloadToken {
  role: RoleType;
  sub: string;
}

export interface SecretJWT {
  secret: string | undefined;
}
