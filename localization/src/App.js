import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'
import {useState,useEffect} from 'react';

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
var defaultLocale = navigator.language;
console.log('default:',defaultLocale);
console.log('sorgu:',localStorage.getItem("locale"));
function App() {
  defaultLocale = localStorage.getItem("locale") ? localStorage.getItem("locale") : defaultLocale;
  
  const [locale, setLocale] = useState(defaultLocale);

  useEffect (()=> {
  console.log('locale:',locale);
    localStorage.setItem("locale", locale);
  } , [locale]);
  
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]} >
        <p>
          <FormattedMessage id="title"/>
          <br></br>
          <FormattedMessage id='description'></FormattedMessage>
        </p>
        <br/>
        <br/>
        <button onClick={()=> setLocale("tr-TR")}>TR</button>
        <button onClick={()=> setLocale("en-US")}>EN</button>
    </IntlProvider>
    </div>
  );
}

export default App;
