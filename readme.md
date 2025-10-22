# User Authentication Service (Express API)

This service provides core functionality for user management, including registration and authentication, built on Node.js and Express.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (or other supported database configured in your project)

### Installation

```bash
# Clone the repository
git clone [YOUR_REPO_URL]
cd [project-name]

# Install dependencies
npm install


# Start the server (assuming you use a tool like nodemon or standard node command)
npm start
# or
node server.js


Method,Path,Description
POST,/users/register,Creates a new user account.


Field,Type,Description,Validation
email,string,The user's unique email address.,Required. Must be a valid email format.
password,string,The user's account password.,Required. Minimum length of 6 characters.
fullname,object,An object containing the user's name components.,Required.
fullname.firstname,string,The user's first name.,Required. Minimum length of 3 characters.
fullname.lastname,string,"The user's last name (optional in validation, but used).",Optional.
```
{
    "email": "jane.doe@example.com",
    "password": "secure-password-123",
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    }
}


Field,Type,Description
token,string,The JWT authentication token for the newly registered user.
user,object,The created user document (may exclude the hashed password).

example  
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "651f8a84c680f4a21d1e4c7e",
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "createdAt": "2023-10-06T15:00:00.000Z"
    }
}


error responce 
{
    "errors": [
        {
            "type": "field",
            "msg": "Password must be atleast 6 characters long",
            "path": "password",
            "location": "body",
            "value": "12345"
        }
    ]
}