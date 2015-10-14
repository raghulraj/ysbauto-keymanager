# ysbauto-keymanager

A utility to write and read keys to and from api server

## Installation

 ```
 npm install ysbauto-keymanager
 ```

## Params
 ```
 (host,sauceuser)
 
 host: API hostname
 sauceuser: username
 ```
## API Request & Response:
```
 SetKey API: An API method which will generate a new sauce api key

 Request: http://localhost:8080/api/setkey?user=xxxx

 Response:
 
 {
  "setkey": "xxxx-xxxxxxxxx-xxxxxx-xxxxxxxx",
  "serverInformation": {
    "serverName": "YSB QE API Server",
    "apiVersion": "0.0.1",
    "requestDuration": 2289,
    "currentTime": 1434488268553
  }
}
```

```
 GetKey API: An API method which will read new sauce api key

 Request: http://localhost:8080/api/getkey?user=xxxx

 Response:
 
 {
  "getkey": "xxxx-xxxxxxxxx-xxxxxx-xxxxxxxx",
  "serverInformation": {
    "serverName": "YSB QE API Server",
    "apiVersion": "0.0.1",
    "requestDuration": 2289,
    "currentTime": 1434488268553
  }
}
```

## Release History

* 0.0.1 Initial release
* README.md update
