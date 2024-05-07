export namespace UserSiteEnums {
  export enum UserSiteLight {
    DIRECT = 'DIRECT',
    INDIRECT = 'INDIRECT',
    MEDIUM = 'MEDIUM',
    GROW = 'GROW',
    LOW = 'LOW',
  }

  export const getAllUserSiteLightKeys = Object.values(UserSiteLight);
}
