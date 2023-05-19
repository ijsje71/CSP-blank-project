import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ContentSecurityPolicyApplication',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
