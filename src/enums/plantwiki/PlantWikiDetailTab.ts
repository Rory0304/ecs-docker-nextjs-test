export namespace PlantWikiDetailTab {
  export enum Key {
    Water = 'water',
    LightAndLocation = 'lightAndLocation',
    Temperature = 'temperature',
    Humidity = 'humidity',
    Fertilize = 'fertilize',
    Characteristic = 'characteristic',
    ToxicTo = 'toxicTo',
  }

  export const getAllTabs = Object.values(Key);

  export const getTabDisplayText = (tab: Key) => {
    switch (tab) {
      case Key.Water:
        return 'Water';

      case Key.LightAndLocation:
        return 'Light & Location';

      case Key.Temperature:
        return 'Temperature';

      case Key.Humidity:
        return 'Humidity';

      case Key.Fertilize:
        return 'Fertilize';

      case Key.Characteristic:
        return 'Characteristic';

      case Key.ToxicTo:
        return 'Toxic To';
    }
  };
}
