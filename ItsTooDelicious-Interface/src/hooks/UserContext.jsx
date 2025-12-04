import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserData = (userInfo) => {
    setUserInfo(userInfo);
    localStorage.setItem('itsTooDelicious:userData', JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem('itsTooDelicious:userData');
  };

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem(
      'itsTooDelicious:userData',
    );

    if (userInfoLocalStorage) {
      setUserInfo(JSON.parse(userInfoLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('O useUser deve apresentar um contexto válido!');
  }

  return context;
};
