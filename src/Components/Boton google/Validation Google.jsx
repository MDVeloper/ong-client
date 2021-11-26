import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
    console.log(response);
  }

export default function GoogleValidation () {

    console.log(responseGoogle)

    return(
        <GoogleLogin
        clientId="327141230491-tv4dtbdv3t6484fr4eq02p8cvgq8i92j.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
    )
}