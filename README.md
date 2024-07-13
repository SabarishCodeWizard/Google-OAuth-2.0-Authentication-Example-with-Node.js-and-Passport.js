

# Google OAuth Example

This is a simple Node.js application that demonstrates Google OAuth 2.0 authentication using Passport.js. The application allows users to log in with their Google account, displays their profile information, and provides the ability to log out.

## Features

- Google OAuth 2.0 authentication using Passport.js.
- Session management with cookie-session.
- Simple UI for logging in and logging out.
- Display user profile information after logging in.

## Prerequisites

- Node.js installed on your machine.
- A Google Cloud project with OAuth 2.0 credentials.

## Getting Started

https://sabarishcodewizard.github.io/Google-OAuth-2.0-Authentication-Example-with-Node.js-and-Passport.js/

### 1. Clone the repository

```bash
https://github.com/SabarishCodeWizard/Google-OAuth-2.0-Authentication-Example-with-Node.js-and-Passport.js.git
cd <folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Google OAuth 2.0 credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or select an existing one).
3. Navigate to **APIs & Services > Credentials**.
4. Click on **Create credentials** and select **OAuth 2.0 Client IDs**.
5. Set up the OAuth consent screen.
6. Configure the OAuth client with the following details:
   - **Authorized JavaScript origins**: `http://localhost:3000`
   - **Authorized redirect URIs**: `http://localhost:3000/google/callback`
7. After creating the credentials, you will get a **Client ID** and **Client Secret**.

### 4. Create a `.env` file

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Replace `your_google_client_id` and `your_google_client_secret` with the credentials obtained from the Google Cloud Console.

### 5. Start the application

```bash
node index.js
```

### 6. Access the application

Open your browser and navigate to `http://localhost:3000/`.

## Project Structure

- `index.js`: Main application file that sets up the Express server and routes.
- `passport-setup.js`: Configuration file for Passport.js with Google OAuth strategy.
- `index.html`: Simple HTML file for the frontend UI.

## Routes

- `GET /`: Displays the home page with Google Sign-In button or user info if logged in.
- `GET /google`: Redirects the user to Google for authentication.
- `GET /google/callback`: Handles the callback after Google authentication.
- `POST /logout`: Logs out the user and clears the session.
- `GET /user`: Retrieves the logged-in user's profile information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Passport.js](http://www.passportjs.org/) for authentication.
- [Google Cloud](https://cloud.google.com/) for OAuth 2.0 credentials.

---

### Example Screenshot


```markdown
## Example Screenshot

![Google OAuth Example](./path_to_image/image.png)
```
