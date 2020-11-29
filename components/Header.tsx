import { signIn, signOut, useSession } from 'next-auth/client';

function Button({ session, signOut, signIn }) {
  // The simplest way to see if a user is logged in is to check if the session exists by calling useSession() from next-auth. If it does, you present the user with the option to log out using the signOut() function. If it does not, you present the user with a login button that ties into the signIn() function you used on the Unauthorized component.
  return session ? (
    <button className="btn btn-secondary" onClick={signOut}>
      Logout
    </button>
  ) : (
    <button className="btn btn-primary" onClick={signIn}>
      Login
    </button>
  );
}

export default function Header() {
  const [session, loading] = useSession();

  return (
    <div className="row mb-4">
      <div className="col-lg-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Home
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="dashboard">
                  Movies
                </a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {<Button session={session} signIn={signIn} signOut={signOut} />}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
