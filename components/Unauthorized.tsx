// The Unauthorized component simply presents the user with a message that they reached a protected part of the site without being authenticated and routes them to the appropriate provider.
// This function will navigate the user to a list of providers that you implemented previously. The user will then be able to click on that provider and be taken to their login screen.
import { signIn } from 'next-auth/client';

export default function Unauthorized() {
  return (
    <div className="row">
      <div className="col-lg-10 col-offset-1">
        <p>
          Hey There, looks like you reached an area you don't have access to.
        </p>

        <p> Please sign in here.</p>

        <p>
          {' '}
          <button className="btn btn-secondary" onClick={signIn}>
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
