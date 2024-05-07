import { StageType } from '@enums/env';

export namespace EnvironmentManager {
  export const getStage = (): StageType => {
    const stage = process.env.NEXT_PUBLIC_STAGE;

    switch (stage) {
      case StageType.local:
        return StageType.local;

      case StageType.development:
        return StageType.development;

      case StageType.production:
      default:
        return StageType.production;
    }
  };

  export const isDevEnvironment = () => {
    return getStage() === StageType.development;
  };

  export const isProdEnvironment = () => {
    return getStage() === StageType.production;
  };

  export const getBaseUrl = (): string => {
    const stage = getStage();

    switch (stage) {
      case 'local':
        return 'http://localhost:3000';

      case 'development':
        return `https://${process.env.NEXT_PUBLIC_PLANTINGO_WEB_DEV_DOMAIN}`;

      case 'production':
      default:
        return `https://${process.env.NEXT_PUBLIC_DOMAIN}`;
    }
  };
}
