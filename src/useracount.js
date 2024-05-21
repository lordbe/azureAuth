import { useAccount } from "@azure/msal-react";

function Useracount() {
  const account = useAccount();

  if (account) {
    return (
      <div>
        <p>Welcome, {account.username}</p>
        {/* Access other user claims from the account object */}
      </div>
    );
  }

  return <p>Please sign in to see your information.</p>;
}

export default Useracount;