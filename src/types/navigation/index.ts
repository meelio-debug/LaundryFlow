export type RootStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Main: undefined;
};

export type OnboardingStackParamList = {
  Welcome: undefined;
  Features: undefined;
  Location: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  Verification: { email: string };
};

export type MainTabParamList = {
  Home: undefined;
  Providers: undefined;
  Orders: undefined;
  Profile: undefined;
};
