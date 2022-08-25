import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import MainTemplate from 'templates/main';
import useAuth from 'lib/context/auth-context';
import { User } from 'lib/types/user';

import styles from './styles.module.scss';

/**
 * The `%PASCAL_CASE%` page is used to display the %SENTENCE_CASE% page of the application.
 * @returns {JSX.Element}
 */
export const %PASCAL_CASE%: NextPage = () => {
  const auth = useAuth();

  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    // Check if a user is logged in
    setUser(auth?.getUser());
  }, [auth]);

  return (
    <MainTemplate user={user}>
        <div className={styles['%KEBAB_CASE%']}>
          Your content goes here.
        </div>
    </MainTemplate>
  );
};

%PASCAL_CASE%.displayName = '%PASCAL_CASE%';

export default %PASCAL_CASE%;
