# FRC Team 5431 Titan Robotic's Website.

This is the official website of **Titan Robotics, FRC Team 5431**, developed using:
- ⚡ **Frontend**: [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/)
- 🔧 **Backend**: [Express.js](https://expressjs.com/)

## Who We Are

**Titan Robotics** is a FIRST Robotics Competition team based in **Plano, Texas**. Since our founding in 2015, we’ve focused on:
- 🤖 Building innovative robots for FRC competitions
- 👥 Developing student leaders and engineering skills
- 🧠 Solving real-world problems through collaboration
- 🌍 Giving back to the community and promoting the values of **FIRST**


We help host different events like NTX, volunteer at city events like the Plano Baloon Festival, and help grow our next generation by hosting a FLL competition event year on year on our campus.

Learn more about FIRST: [firstinspires.org](https://www.firstinspires.org/)

## Self-Hosting Guide

To run the project locally or on a server using Docker Compose:

### Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- A [Gmail](www.gmail.com) Account

### Generating A Gmail SMTP Password

To get an email sent for the "Contact Us" Page, you will need to setup some sort of SMTP server or service. This project uses Gmail's SMTP service which any Gmail account has access to.

To allow your backend to send emails through Gmail (such as from the **Contact Us** page), you'll need to generate a Gmail **App Password** — a special 16-character password used for SMTP access.

> ⚠️ **Important:** You must have **2-Step Verification enabled** on your Google account before you can generate an App Password.

#### ✅ Steps to Generate an App Password

1. **Go to your Google Account security page**
[https://myaccount.google.com/security](https://myaccount.google.com/security)

2. **Enable 2-Step Verification** (if not already enabled)
   - Scroll down to **"Signing in to Google"**
   - Click **"2-Step Verification"**
   - Follow the instructions to complete the setup

3. **Generate an App Password**
   - After enabling 2FA, go back to the **Security** tab
   - Click **"App passwords"**  (You may be prompted to log in again)
   - Under **"Select app"**, choose **Mail**
   - Under **"Select device"**, choose **Other (Custom name)** → Type `FRC Website` or anything you like
   - Click **Generate**

4. **Copy the 16-character password**  
   - It will look like: `abcd efgh ijkl mnop`
   - Use this password in your `/backend/.env` file:
### Environment Variables

Environment Variables are a common way to modify how the app will run as well as to hide secrets (for instance the gmail api key that is used for the backend).

#### The enviromental variables used in the project:

**.env**

In the root you will need to make a ".env" file. This will have two variables, a `FRONTEND_PORT` and `BACKEND_PORT`
For Instance, 
```
# /.env
FRONTEND_PORT=3000
BACKEND_PORT=3001
```

**/frontend/.env**

In the frontend folder you will have another `.env` folder. This will have one variable, a `HOST`. This will specify the allowed host for Vite. If you don't wish to host it for others, leave blank and it will be accessible through localhost.

Ex.
```
# /frontend/.env
FRONTEND_PORT=3000
BACKEND_PORT=3001
```

**/backend/.env**

Lastly, in the backend folder you will again make a `.env` file. This will have two variables, a `EMAIL_USER` and `EMAIL_PASS`. Input in the email and app password you made for Gmail's SMTP server.

Ex.
```
# /backend/.env
EMAIL_USER="blank@gmail.com"
EMAIL_PASS="abcd efgh ijkl mnop"
```

-- TODO -- 
DOCKER INFOMATION SECTION! 
MORE THOUROUGH EXPLANATION 