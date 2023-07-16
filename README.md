# Wiki API

The Wiki API is a RESTful API that allows you to access and manage articles in a wiki-like system. It provides endpoints for creating, retrieving, updating, and deleting articles. This API can be integrated into your applications to enable wiki functionality.

## Installation

To use the Wiki API, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/tanvirkamble/wiki-API.git
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Add the following environment variables and provide their respective values:
     ```
     MONGODB_URL=your_mongodb_connection_string
     PORT=3000
     ```

4. Start the server:

   ```
   npm start
   ```

5. The API will be available at `http://localhost:3000` (or the specified port).

Alternatively, you can access the hosted version of the API at: [https://tanvir-wiki-api.onrender.co](https://tanvir-wiki-api.onrender.com)

## API Endpoints

The Wiki API provides the following endpoints:

- `GET /articles`: Retrieves all articles.
- `POST /articles`: Creates a new article.
- `GET /articles/:articleTitle`: Retrieves a specific article by title.
- `PUT /articles/:articleTitle`: Updates a specific article by title.
- `DELETE /articles/:articleTitle`: Deletes a specific article by title.

### Filtering Articles

You can filter the articles by adding query parameters to the `/articles` endpoint URL. The available filters are as follows:

- **Filter by title**: Use the `title` query parameter to filter articles by their title. For example, to get all articles with the title "Introduction", you can make a GET request to `/articles?title=Introduction`.

### Examples

#### Retrieve all articles

Send a GET request to `/articles` to retrieve all articles.

```
GET /articles
```

Response:

```
[
  {
    "_id": "61234ab12cd345678ef9012",
    "title": "Sample Article",
    "content": "This is a sample article."
  },
  {
    "_id": "7890ab12cd345678ef901234",
    "title": "Another Article",
    "content": "This is another article."
  }
]
```

#### Create a new article

Send a POST request to `/articles` with the article details in the request body to create a new article.

```
POST /articles
Content-Type: application/json

{
  "title": "New Article",
  "content": "This is a new article."
}
```

Response:

```
{
  "_id": "9012ab12cd345678ef901234",
  "title": "New Article",
  "content": "This is a new article."
}
```

#### Retrieve a specific article

Send a GET request to `/articles/:articleTitle` to retrieve a specific article by title.

```
GET /articles/sample-article
```

Response:

```
{
  "_id": "61234ab12cd345678ef9012",
  "title": "Sample Article",
  "content": "This is a sample article."
}
```

#### Update a specific article

Send a PUT request to `/articles/:articleTitle` with the updated article details in the request body to update a specific article by title.

```
PUT /articles/sample-article
Content-Type: application/json

{
  "title": "Updated Article",
  "content": "This is an updated article."
}
```

Response:

```
{
  "_id": "61234ab12cd345678ef9012",
  "title": "Updated Article",
  "content": "This is an updated article."
}
```

#### Delete a specific article

Send a DELETE request to `/articles/:articleTitle` to delete a specific article by title.

```
DELETE /articles/sample-article
```

Response:

```
Article deleted successfully.
```

## Live Demo

To see a live demo of the API in action, visit the [API](https://tanvir-wiki-api.onrender.com/articles).

## Contributing

Contributions to the Wiki API are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

Feel free to modify and use the code for your own projects.
