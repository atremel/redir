import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.redir',
  appName: 'redir',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    allowNavigation: [
      "redirectmeto.com"
    ]
  }
};

export default config;
