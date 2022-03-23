import React from "react";
import { Icon } from "@rsuite/icons"
import {
  Container,
  Grid,
  Row,
  Panel,
  Col,
  Button,
  toaster,
  Notification } from 'rsuite';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo
} from 'firebase/auth';
import { auth, database } from '../misc/firebase';
import { ref, serverTimestamp, set } from 'firebase/database';

const googlesvg = (prop) => {
  return (
  <svg {...prop}
       width="16"
       height="16"
       viewBox="0 0 640 640">
    <path d="M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z"/>
  </svg>
  )
}

const SignIn = () => {
  const signInWithProvider = async (provider) => {
      const credential = await signInWithPopup(auth, provider);
      const userMeta = getAdditionalUserInfo(credential);

      if(userMeta.isNewUser){
        await set(ref(database,`/profiles/${credential.user.uid}`),{
          name: credential.user.displayName,
          createdAt: serverTimestamp(),
        });
      }
  }
  const onGoogleSignIn = () => {
    signInWithProvider(new GoogleAuthProvider()).then(() => {
      toaster.push(<Notification>Signed in</Notification>, {
        type: 'success',
        placement: 'topCenter'
      });
    }).catch((err) => {
      toaster.push(<Notification>{err.message}</Notification>, {
        type: 'error',
        placement: 'topCenter'
      });
    });
  }

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to chat App</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>
              <div className="mt-3">
                <Button block color="green" onClick={onGoogleSignIn} >
                <span style={{'margin': '0 3px','alignContent': 'center'}}><Icon as={googlesvg}/></span>
                  Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default SignIn;