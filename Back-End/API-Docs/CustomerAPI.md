# Customer API Documentation #

Returns JSON data about a single user.

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /api/customers | Get All Customer Information | |
| GET    | /api/users/{id} |Get Customer By customerID | |
| POST    | /api/customers | Add A New Customer | [JSON](#addUser)|

- **URL**

  /users/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`

- **Error Response:**

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`


## Sample - JSON Request Bodys

##### <a id="addUser">Add New Customer -> /api/customers</a>
```json
{
    "firstName": "Tom",
    "lastName": "Teddy",
    "dateOfBirth": "2008-05-17T00:00:00.000+00:00",
    "gender": "male",
    "allergy": "Walking",
    "location": "London",
    "accountVerified": true,
}
```
