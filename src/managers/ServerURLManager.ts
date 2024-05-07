import { PlantingoAPI } from '@enums/api';
import { EnvironmentManager } from '@managers/EnvironmentManager';

class ServerURLManager {
  plantingoAPI(version: PlantingoAPI.Version): string {
    let baseURL: string;
    if (EnvironmentManager.isProdEnvironment()) {
      baseURL = 'https://api.plantingo.com';
    } else {
      baseURL = 'https://api-dev.plantingo.com';
    }

    return `${baseURL}/${version}`;
  }
}

const serverURLManager = new ServerURLManager();

export default serverURLManager;
