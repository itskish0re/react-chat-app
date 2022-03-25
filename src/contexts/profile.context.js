import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import {
  // serverTimestamp,
  ref,
  onValue,
  // onDisconnect,
  // set,
  off
} from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from '../misc/firebase';

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let userRef;
    // let userStatusRef;

    const authUnsub = onAuthStateChanged(auth, (authObj) => {
      if (authObj) {
        userRef = ref(database,`/profiles/${authObj.uid}`);
        onValue(userRef, (snap) => {
          const { name, createdAt } = snap.val();
          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(data);
          setIsLoading(() => false);
        });
      } else {
        if (userRef) {
          off(userRef);
        }
        setProfile(null);
        setIsLoading(() => false);
      }
    });
    return () => {
      authUnsub();
      if (userRef) {
        off(userRef);
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);

