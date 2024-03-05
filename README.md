<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

# Nestjs-Store-2024
## App Details

This project is a simple store application designed for development and educational purposes. It serves as a practical example of how to build and deploy a full-stack application using some of the most popular technologies and services available today. The main goal is to demonstrate a real-world application scenario, showcasing authentication, database integration, and session management, all while leveraging free tiers of cloud-hosted services for deployment.

### Features and Technologies

- **Nest.js**: Utilizes Nest.js, a progressive Node.js framework, for building efficient and scalable server-side applications.
- **MongoDB**: Incorporates MongoDB as the database solution, with data hosted on MongoDB Atlas, MongoDB's fully-managed cloud database.
- **Google OAuth 2.0**: Implements authentication using Google OAuth 2.0, allowing users to sign in with their Google accounts.
- **Session Management**: Manages user sessions with cookies stored in the client's browser, demonstrating session creation, storage, and retrieval in a secure manner.
- **Free Cloud Deployment**: Designed to be deployed on free tier cloud hosts and services, specifically adaptable.io for the Nest.js backend and MongoDB Atlas for the database. This approach showcases how to launch and maintain a web application with minimal costs.

### Deployment Strategy

The application is structured to be easily deployable on platforms offering free tiers, making it an ideal project for developers looking to experiment with full-stack development and deployment without incurring costs. Here's why it's optimized for free tier deployment:

- **Minimal Resource Requirements**: The app is designed to run within the resource limits of free tier hosting services, ensuring that developers can maintain the application without financial investment.
- **Adaptable.io**: The backend is deployable on adaptable.io, a platform that supports Nest.js applications, providing an effortless deployment process.
- **MongoDB Atlas**: Utilizes MongoDB Atlas' free tier for database services, offering a seamless integration and management experience for the application's data storage needs.

### Educational Purpose

Beyond serving as a functional application, this project is intended as an educational tool. Developers can explore the codebase to learn about:

- Integrating Google OAuth for authentication in web applications.
- Session management best practices, especially in the context of security and user experience.
- Deploying applications using modern, cloud-based platforms and services.
- Working with MongoDB in a cloud environment for data storage and retrieval.

This project is perfect for developers looking to gain hands-on experience with these technologies or instructors seeking a comprehensive example to illustrate modern web development and deployment practices.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js (version 18 or above recommended). You can download it from [nodejs.org](https://nodejs.org/).

- **Google Cloud Platform Account**:
    1. Visit the [Google Cloud Console](https://console.cloud.google.com/) to create a new project or use an existing one.
    2. Navigate to the **Credentials** section in the **APIs & Services** dashboard.
    3. Click on **Create Credentials** and select **OAuth client ID**.
    4. Configure the OAuth consent screen if prompted. You will need to create an OAuth consent screen app and specify the Authorized domains, including `adaptable.app`. Under "Your non-sensitive scopes," add the following scopes: `./auth/userinfo.email` and `./auth/userinfo.profile`.
    5. For the OAuth client ID, set the **Authorized JavaScript origins** to `http://localhost:5000` and your backend URL.
    6. Add **Authorized redirect URIs** as `http://localhost:5000/auth/google/callback` and the corresponding URI for your deployed backend (if applicable).

- **MongoDB Cloud Atlas**:
    1. Sign up or log in to [MongoDB Cloud Atlas](https://www.mongodb.com/cloud/atlas) and create a new cluster.
    2. Once your cluster is ready, navigate to the **Database Access** section under **Security** and create a new database user with read and write permissions to any database.
    3. In the **Network Access** section, add an IP address to whitelist connections from your development machine (and any servers you'll be deploying your application to).
    4. Go to **Clusters**, click on **Connect** for your cluster, choose **Connect your application**, and copy the connection string provided. Remember to replace `<password>` with the password of the database user you created earlier.

- **Adaptable Deployment** (if deploying to Adaptable.app):
  Ensure that your OAuth consent screen app's authorized domains include any domains you'll use with Adaptable.app, following their documentation for setting up custom domains if necessary.

## Setup

To set up this project locally, follow these steps:

1. **Clone the repository**

```bash
   git clone https://github.com/shmuelyos/nestjs-store-2024.git
```

Install dependencies

```bash
    pnpm install
```

Configure Environment Variables

## Configure Environment Variables

To configure the application to run correctly and connect to external services, you need to set up environment variables. Create a `.env` file in the root directory of your project and fill it with the necessary configurations:


```bash
    PORT=5000
    GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    MONGODB_URI=mongodb+srv://Username:Password@your_cluster_url/Name_of_your_DB
    FRONTEND_URL=http://localhost:3000
    CALLBACK_URL=http://localhost:5000/auth/google/callback 
    NODE_ENV=development
    SESSION_SECRET=your_session_secret
    SESSION_EXPIRATION=86400000 # 24 hours in milliseconds
    SAME_SITE=None
    HTTP_ONLY=true
    SECURE=true
    COOKIE_DOMAIN=localhost
```


### Details

- `PORT`: The port your server will listen on. Change `5000` if you need your server to run on a different port.
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: These are obtained from your Google Developer Console as part of setting up OAuth 2.0 credentials. Replace `your_google_client_id` and `your_google_client_secret` with the actual values provided by Google.
- `MONGODB_URI`: Your MongoDB connection string. Replace `USERNAME`, `PASSWORD`, and `DB_NAME` with your MongoDB Atlas username, password, and the database name you wish to connect to, respectively.
- `FRONTEND_URL`: The URL where your frontend application is hosted. This is used for CORS configuration to allow requests from your frontend to your backend.
- `CALLBACK_URL`: The URL where Google will redirect to after successful authentication. Make sure it matches the one configured in the Google Developer Console.
- `NODE_ENV`: The environment the application is running in. Common values are `development`, `production`, etc.
- `SESSION_SECRET`: A secret key for signing the session. Use a long, random string to improve security.
- `SESSION_EXPIRATION`: The duration, in milliseconds, for how long the session should stay valid. `86400000` represents 24 hours.
- `SAME_SITE`: Controls whether cookies are sent with cross-site requests. `None`, `Lax`, or `Strict` are valid values. Adjust based on your application's requirements and browser compatibility.
- `HTTP_ONLY`: Set to `true` to prevent client-side JavaScript from accessing the cookie.
- `SECURE`: Set to `true` if your application is served over HTTPS. For local development over HTTP, this should be `false`.
- `COOKIE_DOMAIN`: The domain of the cookie. Typically, this is set to your application's domain. For local development, `localhost` is common.

Remember to replace placeholders with actual values relevant to your setup. Do not share your `.env` file or disclose sensitive information like your `GOOGLE_CLIENT_SECRET`.


## Running the Application
To run this application, execute:

```bash
pnpm start:dev
```
This command will start your backend server on http://localhost:5000 (or whatever port you've specified in your .env
file).


