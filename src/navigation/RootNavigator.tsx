import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from '../store/useAuthStore';
import { useRoleStore } from '../store/useRoleStore';

import { AuthStack } from './AuthStack';
import { BuyerTabNavigator } from './BuyerTabNavigator';

export const RootNavigator = () => {
  const { isAuthenticated } = useAuthStore();
  const { activeRole } = useRoleStore();

  const renderRoleNavigator = () => {
    switch (activeRole) {
      case 'buyer':
      default:
        return <BuyerTabNavigator />;
    }
  };

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthStack /> : renderRoleNavigator()}
    </NavigationContainer>
  );
};