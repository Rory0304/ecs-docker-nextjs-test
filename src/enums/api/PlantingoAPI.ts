export namespace PlantingoAPI {
  export enum HeaderKey {
    CONTENT_TYPE = 'Content-Type',
    AUTHORIZATION = 'Authorization',
    LANGUAGE_CODE = 'Language-Code',
  }

  export enum HttpStatusCode {
    // 2xx
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,

    // 4xx
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    GONE = 410,
    I_AM_TEAPOT = 418,
    UNPROCESSABLE_ENTITY = 422,

    // 5xx
    INTERNAL_SERVER_ERROR = 500,
  }

  export enum Version {
    V1 = 'v1',
  }
}
