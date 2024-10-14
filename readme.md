# Wanderlust Web Application

Wanderlust is a web application designed to help users capture and share their travel experiences. Whether it's a weekend getaway or an adventurous journey, Wanderlust allows users to create diaries, add descriptions, and attach images to document their memorable moments.

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Create .env File](#create-env-file)
  - [Run the Application](#run-the-application)
  - [Open in Browser](#open-in-browser)
- [Routes](#routes)
  - [GET `/diaries`](#get-diaries)
  - [GET `/diaries/:id`](#get-diariesid)
  - [POST `/diaries`](#post-diaries)
  - [PUT `/diaries/:id`](#put-diariesid)
  - [DELETE `/diaries/:id`](#delete-diariesid)



## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv
- morgan

## Getting Started

To run the Wanderlust application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```
2.
    **Create a `.env` file in the root directory and add the following:**
    ```
    Port=<your-port-number>
    DATABASE_URL=<your-mongodb-connection-url>
    ```
3.
    **Clone the repository:**
    ```
        npm start
    ```
5.
    **Open your web browser and go to http://localhost:####**

 ## Routes

| Method | Endpoint | Description                                        |
| ------ | ------------------ |------------------------------------------|
| GET    | `/diaries`         | Get all diaries                          |
| GET    | `/diaries/:id`     | Get a specific diary by ID               |
| POST   | `/diaries`         | Create a new diary                       |
| PUT    | `/diaries/:id`     | Update a specific diary by ID            |
| DELETE | `/diaries/:id`     | Delete a specific diary by ID            |



### GET `/diaries`

- **Description:** Retrieve all diaries.
- **Example Response:**
  ```json
  [
    {
      "_id": "someId",
      "name": "Trip to Mountains",
      "description": "An amazing journey to the mountains",
      "date": "2024-01-05T12:00:00Z",
      "data": "base64-encoded-image-data",
      "pin": 1234
    },
    // ... other diaries
  ]
  ```





### GET `/diaries/:id`

- **Description:** Retrieve a specific diary by ID.

**Example Response:**
  ```json
  [
    {
      "_id": "someId",
      "name": "Trip to Mountains",
      "description": "An amazing journey to the mountains",
      "date": "2024-01-05T12:00:00Z",
      "data": "base64-encoded-image-data",
      "pin": 1234
    },
  ]
```
### POST `/diaries`

- **Description:** Create a new diary.

 **Request Body:**

  ```json
  [
    {
    "name": "New Adventure",
    "description": "Exciting journey to new places",
    "date": "2024-01-10T12:00:00Z",
    "data": "base64-encoded-image-data",
    "pin": 5678
    }
  ]
```
**Example Response:**

```json
[
    {
    "_id": "newId",
    "name": "New Adventure",
    "description": "Exciting journey to new places",
    "date": "2024-01-10T12:00:00Z",
    "data": "base64-encoded-image-data",
    "pin": 5678
    }
]
```


### PUT  `/diaries/:id`

- **Description:** Update a specific diary by ID

 **Request Body:**
  ```json
  [
    {
    "name": "Updated Adventure",
    "description": "An updated description",
    "date": "2024-01-15T12:00:00Z",
    "data": "base64-encoded-updated-image-data",
    "pin": 9999
    }
  ]
```
**Example Response:**

```json
[
    {
    "_id": "someId",
    "name": "Updated Adventure",
    "description": "An updated description",
    "date": "2024-01-15T12:00:00Z",
    "data": "base64-encoded-updated-image-data",
    "pin": 9999
    }
]
```

### PUT  `/diaries/:id`

- **Description:** Update a specific diary by ID

 **Request Body:**
  ```json
  {
    "message": "Diary successfully deleted"
  }
  ```
