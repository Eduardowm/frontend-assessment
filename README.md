# Real Estate App

This is a Real Estate web application built using React.js. The app allows users to browse and view property listings, as well as view detailed information about each property.

## Features

### Listing Page
- The listing page displays a list of available properties.
- Users can filter properties by number of bedrooms, bathrooms, parking spaces, and price range.
- The filtered properties are fetched from an external JSON URL.

### Listing Details Page
- The listing details page provides detailed information about a selected property.
- Users can view the property title, price, location, date listed, image, and description.
- There is an option to save the property for future reference.
- Users can also contact the agent for inquiries about the property.

## Architecture

### Frontend
- The frontend of this application is built using React.js.
- React components are used to create reusable UI elements, ensuring a modular and maintainable codebase.
- React Router is used for client-side routing, enabling navigation between different pages of the application.

### Backend
- The application utilizes a proxy server deployed on Heroku to handle CORS (Cross-Origin Resource Sharing) issues when fetching data from external APIs.
- The proxy server intercepts requests from the frontend and forwards them to the desired external JSON URL.
- Upon receiving the response from the external API, the proxy server modifies the response headers to allow cross-origin requests.

### Data Flow
1. Users interact with the frontend interface, such as filtering properties or selecting a property for detailed view.
2. The frontend sends requests to the proxy server deployed on Heroku.
3. The proxy server forwards these requests to the external JSON URL, fetching the property data.
4. Upon receiving the response from the JSON URL, the proxy server modifies the response headers and sends the data back to the frontend.
5. The frontend renders the fetched property data, allowing users to view listings and details.

## Getting Started

To run the application locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory and install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open your browser and visit `http://localhost:3000` to view the application.

## Author

- **Eduardo Werpp** - [Eduardowm](github.com/eduardowm)

## License

This project is licensed under the MIT License.
