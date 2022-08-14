export type RootStackParams = {
  OnboardingScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  MainScreen: undefined;
  CartScreen: undefined;
  CategoryScreen: {categoryTitle: string; categoryId: string};
  ProductScreen: {productId: string};
  SizeGuideScreen: {productId: string};
};

export type BottomTabsParams = {
  HomeScreen: undefined;
  ExploreScreen: undefined;
  OrdersScreen: undefined;
  ProfileScreen: undefined;
};
