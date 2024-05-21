// ExampleComponent.js
import { useMsal } from '@azure/msal-react';
let xUser="";
function Examplecomponetn() {
  const { instance, accounts } = useMsal();
  
  const handleLogin = async () => {
    const loginResponse = await instance.loginPopup();
    xUser = `Welcome, ${loginResponse.account.name}`;
    let xaco = accounts.length;
    console.log('User logged in:', loginResponse.account);
  };

  return (
    <div>
      <button onClick={handleLogin}>RUN RUN</button>
      <div>
        <p> {accounts.length <= 0? "": accounts[0].name}</p>        
      </div>
    </div>
  );
}

export default Examplecomponetn;