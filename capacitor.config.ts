import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.redir',
  appName: 'redir',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
