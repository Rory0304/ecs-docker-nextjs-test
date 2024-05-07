import { TemporaryStorageKey } from '@constants/keys';
import { Language } from '@enums/localization';
import Cookies from 'js-cookie';

export const getLocale = () => {
  return (Cookies.get(TemporaryStorageKey.NEXT_LOCALE) as Language) || Language.en;
};
