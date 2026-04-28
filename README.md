# Phonebook API

🔗 **[Live Swagger Documentation](https://phonebook-api-backend-v92w.onrender.com/api-docs)**

## Project Description

**Phonebook API** is a contact management service that allows users to securely store and organize their contact lists. Users can create new contacts, manage their statuses, and upload profile pictures for both themselves and their contacts.

### Key Features:

- **User Registration & Authorization:** Secure JWT-based authentication.
- **Email Verification:** Account confirmation via automated emails.
- **Profile Management:** Capability to upload and update user avatars.
- **Contact Management:** Create, edit, and delete contacts (including name, phone number, and "Favorite" status).
- **Media Support:** Upload photos for specific contacts.
- **Subscription Tiers:** Manage user statuses (Standard, Pro, Vip).

## Tech Stack

- **Core:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT & Bcrypt
- **File Storage:** Cloudinary
- **Sendler email:** Brevo
- **Validation:** Joi
- **Documentation:** Swagger UI
- **Other:** Docker

## Getting Started

### 1. **Clone the repository:**

```bash
   git clone https://github.com/Dmytro1117/phonebook-api_node.js.git
```

### 2. **Install dependencies:**

```bash
   npm install
```

### 3. **Configure Environment Variables:**

Create a `.env` file in the root directory:

```env
PORT=8080
BASE_URL=your_deployed_frontend_or_localhost
DB_HOST=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
API_KEY_BREVO=your_brevo_key
CLOUDINARY_NAME=name
CLOUDINARY_KEY=key
CLOUDINARY_SECRET=secret
```

### 4. **Run the application:**

```bash
npm run dev
```

The app will be available at http://localhost:8080
