import './App.css';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import {useState} from 'react';

const messages = {
  "tr-TR":{
    "title":"Merhaba Dunya",
    "description":"Bu bir test metin"
  },
  "en-US":{
    "title":"Hello World",
    "description":"This is a test text"
  }
}
function App() {
  
  const [lang, setLang] = useState("tr-TR");
  
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]} >
      <p>
        <FormattedMessage
          id="title"
        />
        <br></br>
        <FormattedMessage id='description'></FormattedMessage>
      </p>
      <br/>
      <br/>
      <button onClick={()=> setLang("tr-TR")}>TR</button>
      <button onClick={()=> setLang("en-US")}>EN</button>
    </IntlProvider>
    </div>
  );
}

export default App;
