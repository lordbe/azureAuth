import React from 'react';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import Examplecomponetn from "./examplecomponetn"
// import Useracount from "./useracount"

  function Cnx() {
    const config = {
      auth: {
        clientId: "dce9546a-f808-440b-97df-a632542683b7",
        authority: "https://login.microsoftonline.com/d47f94f9-c2b2-4509-840c-d19cd63c7ba8", // Replace with your tenant instance
        redirectUri: "https://azure-auth-nine.vercel.app/", //"http://localhost:8080/redirect", // Replace with your redirect URI
        scopes: ["user.read"], // Scopes for the desired Microsoft Graph access
        
      },
      cache: {
        cacheLocation: "sessionStorage", // or "localStorage"
      },
    };
      
      const msalInstance = new PublicClientApplication(config);
    return (
      <MsalProvider instance={msalInstance}>
        {/* Your React application components */}
        <Examplecomponetn />     
      </MsalProvider>
    );
  }
  
  export default Cnx;

//  function Cnxgraph() {
//   return (
//     <div className="cnxgraph">
//       <header className="App-header">        
//           Cnx Graph        
//       </header>
//     </div>
//   );
// }

// export default Cnxgraph;
