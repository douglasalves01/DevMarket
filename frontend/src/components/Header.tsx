import { useAuth0 } from '@auth0/auth0-react';

function Header() {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>

          <li>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
          {/* Adicione mais itens de menu conforme necessário */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
