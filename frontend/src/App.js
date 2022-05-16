import './App.css';
//Import the function to the `create-react-app` project
import { getSiteInfo } from '@yarn-monorepo/framework';

export default function App() {
  //Define a variable to get the values
  let siteInfo = getSiteInfo();
  return (
    <div className="App">
      {/*Output the site title and subtitle to the screen*/}
      <header className="App-header">
        <h1>{siteInfo.title}</h1>
        <p>{siteInfo.sub}</p>
      </header>
    </div>
  );
}
