# Getting Started

```bash
$ npm install --save @dominantlab/clt-blockchain-sdk
```

* node.js 

```js
const {SDK} = require('@dominantlab/clt-blockchain-sdk')

const sdk = new SDK({
  ip: "127.0.0.1",
  port: 8545,
  user: '',
  password: ''
});

(async () => {
  const createdAccount = await sdk.accounts.create()
  console.log(createdAccount)
})()

```

```json
{ 
  "prvKey": "4aca257c4e1f71689569183b532754080c683d42e5e769509d444c1dd77ae58df69750cf915757745fa8789ac68240f62bf9ec29a7c9b6f06483c562c767c06d",
  "pubKey": "f69750cf915757745fa8789ac68240f62bf9ec29a7c9b6f06483c562c767c06d",
  "address": "ce10901367d2612278313dadd1dc308d8364d53a4039b47d97ee78ccd6fd7ef3",
  "encrypt": [Function: encrypt] 
}
```

* react 

```js
import {SDK}  from '@dominantlab/clt-blockchain-sdk'
// let {SDK} = require('./SDK')

function App() {
  useEffect(() => {
    (async() => {
      let sdk = new SDK({})
      // console.log(sdk)
      const password = 'password'
      const createdAccount = await sdk.accounts.create()
      const { encrypted } = sdk.accounts.encrypt(createdAccount.prvKey, password)
      const decryptPrvKey = sdk.accounts.decrypt(encrypted, password)
      const recoveryAddress = sdk.accounts.privateKeyToAccount(decryptPrvKey)
      
      console.log(createdAccount)
      console.log(encrypted)
      console.log(recoveryAddress)
    })()
  }, [])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
```

```json
{ 
  "prvKey": "4aca257c4e1f71689569183b532754080c683d42e5e769509d444c1dd77ae58df69750cf915757745fa8789ac68240f62bf9ec29a7c9b6f06483c562c767c06d",
  "pubKey": "f69750cf915757745fa8789ac68240f62bf9ec29a7c9b6f06483c562c767c06d",
  "address": "ce10901367d2612278313dadd1dc308d8364d53a4039b47d97ee78ccd6fd7ef3",
  "encrypt": [Function: encrypt] 
}
```

* html 

```html
<!DOCTYPE html>
<html>
  <script src="./node_modules/@dominantlab/clt-blockchain-sdk/build"></script>

  <body>
    <script>
      (async () => {
        let sdk = new SDK.SDK({})
        const password = 'password'
        const createdAccount = await sdk.accounts.create()
        const { encrypted } = sdk.accounts.encrypt(createdAccount.prvKey, password)
        const decryptPrvKey = sdk.accounts.decrypt(encrypted, password)
        const recoveryAddress = sdk.accounts.privateKeyToAccount(decryptPrvKey)
        
        console.log(createdAccount)
        console.log(encrypted)
        console.log(recoveryAddress)
      })()
     
    </script>
  </body>
</html>
```