# API DOCUMENTATION

### Link deploy : https://raflirach.herokuapp.com/

## _access_token_
you need access_token for access the api, you can obtain access_token by access https://raflirach.herokuapp.com/token or you can use : 
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJhZmxpcmFjaCIsImlhdCI6MTYxNTM3MjQxNX0.mDMs7pRNc9ihIi5bty7Fm4z2A2ZzX6l6FTljCDcm7Nk
```


## _Endpoint_
- `GET /token`
- `GET /users`
- `GET /users/{id}`
- `GET /users/account/{accountNumber}`
- `GET /users/identity/{identityNumber}`
- `POST /users`
- `PUT /users/{id}`
- `DELETE /users/{id}`

**GET TOKEN**
----

* **URL**

  /token

* **Method**

  `GET`

* **Success Response:** <br />
  **Code:** 200 <br />
  **Content:**
  ```
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InJhZmxpcmFjaCIsImlhdCI6MTYxNTM3NDU2NH0.SFATwBd0YAa-XRNP-wH3hcowrtJg0jhAsvMqfw-ec3Y"
  }
  ```

  **Code:** 500 <br />
  **Content:**
  ```
  {
    "status": "Error",
    "error": <internal server error>
  }
  ```

**Show List User**
----
* **URL**

  /users

* **Method**

  `GET`

* **Request Headers**

  ```
  {
    access_token : <your access_token>
  }
  ```

* **Success Response:** <br />
  **Code:** 200 <br />
  **Content:**
  ```
  [
    {
        "_id": "604898a72838f34c1e116de6",
        "userName": "raflirach",
        "accountNumber": "123456788",
        "emailAddress": "rafli@mail.com",
        "identityNumber": "320120603950002"
    },
    {
        "_id": "60489a9d8844cc4f05c16361",
        "userName": "agus",
        "accountNumber": "123333112",
        "emailAddress": "agus@mail.com",
        "identityNumber": "320120603950009"
    }
  ]
  ```

* **Failed Response:** <br />
  **Code:** 403 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "invalid access_token"
  }
  ```
  **Code:** 500 <br />
  **Content:**
  ```
  {
    "status": "Error",
    "error": <internal server error>
  }
  ```
  <br/>

**GET USER BY ID**
----
* **URL**

  /users/{id}

* **Method**

  `GET`

* **Request Headers**

  ```
  {
    access_token : <your access_token>
  }
  ```

* **Success Response:** <br />
  **Code:** 200 <br />
  **Content:**
  ```
  {
    "_id": "604898a72838f34c1e116de6",
    "userName": "raflirach",
    "accountNumber": "123456788",
    "emailAddress": "rafli@mail.com",
    "identityNumber": "320120603950002"
  }
  ```

* **Failed Response:** <br />
  **Code:** 403 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "invalid access_token"
  }
  ```
  **Code:** 404 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "data not found"
  }
  ```
  **Code:** 500 <br />
  **Content:**
  ```
  {
    "status": "Error",
    "error": <internal server error>
  }
  ```
  <br />

**GET USER BY ACCOUNT NUMBER**
----
* **URL**

  /users/account/{accountNumber}

* **Method**

  `GET`

* **Request Headers**

  ```
  {
    access_token : <your access_token>
  }
  ```

* **Success Response:** <br />
  **Code:** 200 <br />
  **Content:**
  ```
  {
    "_id": "604898a72838f34c1e116de6",
    "userName": "raflirach",
    "accountNumber": "123456788",
    "emailAddress": "rafli@mail.com",
    "identityNumber": "320120603950002"
  }
  ```

* **Failed Response:** <br />
  **Code:** 403 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "invalid access_token"
  }
  ```
  **Code:** 404 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "data not found"
  }
  ```
  **Code:** 500 <br />
  **Content:**
  ```
  {
    "status": "Error",
    "error": <internal server error>
  }
  ```
  <br />

**GET USER BY IDENTITY NUMBER**
----
* **URL**

  /users/identity/{identityNumber}

* **Method**

  `GET`

* **Request Headers**

  ```
  {
    access_token : <your access_token>
  }
  ```

* **Success Response:** <br />
  **Code:** 200 <br />
  **Content:**
  ```
  {
    "_id": "604898a72838f34c1e116de6",
    "userName": "raflirach",
    "accountNumber": "123456788",
    "emailAddress": "rafli@mail.com",
    "identityNumber": "320120603950002"
  }
  ```

* **Failed Response:** <br />
  **Code:** 403 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "invalid access_token"
  }
  ```
  **Code:** 404 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "data not found"
  }
  ```
  **Code:** 500 <br />
  **Content:**
  ```
  {
    "status": "Error",
    "error": <internal server error>
  }
  ```
  <br />

**POST USER**
----
* **URL**

  /users

* **Method**

  `POST`

* **Request Headers**

  ```
  {
    access_token : <your access_token>
  }
  ```

* **Request Body**
  ```
  {
    "userName": "raflirach",
    "accountNumber": "123456788",
    "emailAddress": "rafli@mail.com",
    "identityNumber": "320120603950002"
  }
  ```

* **Success Response:** <br />
  **Code:** 201 <br />
  **Content:**
  ```
  {
    "_id": "604898a72838f34c1e116de6",
    "userName": "raflirach",
    "accountNumber": "123456788",
    "emailAddress": "rafli@mail.com",
    "identityNumber": "320120603950002"
  }
  ```

* **Failed Response:** <br />
  **Code:** 400 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "identityNumber 320120603950002 already registered"
  }
  ```
  **Code:** 403 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "invalid access_token"
  }
  ```
  **Code:** 500 <br />
  **Content:**
  ```
  {
    "status": "Error",
    "error": <internal server error>
  }
  ```
  <br />

**EDIT USER**
----
* **URL**

  /users/{id}

* **Method**

  `PUT`

* **Request Headers**

  ```
  {
    access_token : <your access_token>
  }
  ```

* **Request Body**
  ```
  {
    "userName" : "raflirach",
    "accountNumber" : "123123122",
    "emailAddress" : "rafli@mail.com",
    "identityNumber" : "320120603950002"
  }
  ```

* **Success Response:** <br />
  **Code:** 200 <br />
  **Content:**
  ```
  {
    "userName": "raflirach",
    "accountNumber": "123123122",
    "emailAddress": "rafli@mail.com",
    "identityNumber": "320120603950002",
    "_id": "604898a72838f34c1e116de6"
  }
  ```

* **Failed Response:** <br />
  **Code:** 400 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "identityNumber 320120603950002 already registered"
  }
  ```
  **Code:** 403 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "invalid access_token"
  }
  ```
  **Code:** 404 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "data not found"
  }
  ```
  **Code:** 500 <br />
  **Content:**
  ```
  {
    "status": "Error",
    "error": <internal server error>
  }
  ```
  <br />

**DELETE USER**
----
* **URL**

  /users/{id}

* **Method**

  `DELETE`

* **Request Headers**

  ```
  {
    access_token : <your access_token>
  }
  ```

* **Success Response:** <br />
  **Code:** 200 <br />
  **Content:**
  ```
  {
    "message": "user deleted successfully"
  }
  ```

* **Failed Response:** <br />
  **Code:** 403 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "invalid access_token"
  }
  ```
  **Code:** 404 <br />
  **Content:**
  ```
  {
    "status": "error",
    "message": "data not found"
  }
  ```
  **Code:** 500 <br />
  **Content:**
  ```
  {
    "status": "Error",
    "error": <internal server error>
  }
  ```
  <br />