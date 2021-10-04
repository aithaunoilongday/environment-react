import React, { useEffect, useState } from 'react';
import { PublicNavigation } from 'Navigations/publicNavigation';
import { PrivateNavigation } from 'Navigations/privateNavigation';
import { User } from 'Types';
import { configs } from 'Configs';

export const Navigator = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const getToken = localStorage.getItem(configs.localStorage);
    if (getToken) {
      const parseAuth: User = JSON.parse(getToken);
      if (parseAuth.token.length && parseAuth.useId.length) {
        setActive(true);
      }
    }
  }, []);

  if (!active) {
    return <PublicNavigation />;
  }

  return <PrivateNavigation />;
};
