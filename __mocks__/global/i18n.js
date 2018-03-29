import langs from '../../app/langs';

export default () => {
  const mockFn = () => (
    ({
      t: jest.fn(translation => (
        langs.en[translation]
      ))
    })
  );

  global.I18n = jest.mock('react-native-i18n', mockFn);
};
