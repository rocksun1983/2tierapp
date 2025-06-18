# 2tierapp
A containerized **Two-Tier Web Application** This app consisting of a frontend (built with HTML/CSS/JS) and a backend API (Node.js with MongoDB). The app is designed for easy deployment using **Docker** and **GitHub Actions** and can be pushed to **Docker Hub** or **AWS ECR**.

---

## 🔧 Features

- Frontend served via **NGINX**
- Backend powered by **Node.js & Express**
- MongoDB for data persistence (can use Atlas or local container)
- Dockerized services for consistency across environments
- CI/CD pipeline with **GitHub Actions**
- Deployable to AWS ECR or Docker Hub

---

## 📦 Tech Stack

| Tier       | Technology            |
|------------|------------------------|
| Frontend   | HTML, CSS, JavaScript, NGINX |
| Backend    | Node.js, Express.js    |
| Database   | MongoDB (Docker or Atlas) |
| DevOps     | Docker, Docker Compose, GitHub Actions |

---

## 🐳 Docker Setup

### Build the Images

```bash
docker-compose build
Run the Containers
bash
Copy
Edit
docker-compose up -d
Stop Containers
bash
Copy
Edit
docker-compose down
🧪 Local Development
Clone the repository:

bash
Copy
Edit
git clone https://github.com/rocksun1983/2tierapp.git
cd 2tierapp
Configure environment variables in .env if needed

Run:

bash
Copy
Edit
docker-compose up --build
🚀 CI/CD with GitHub Actions
This project includes a GitHub Actions workflow to:

Build the Docker image

Log in to Docker Hub using secrets

Push to Docker Hub on every commit to main

Secrets required:

DOCKER_USERNAME

DOCKER_PASSWORD

Workflow file: .github/workflows/docker-build.yml

🛠 AWS ECR Deployment 
To deploy to AWS ECR:

Create a public ECR repo

Configure AWS credentials

Update the GitHub Actions workflow for AWS login & push

Add GitHub secrets:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS_REGION

📁 Project Structure
markdown
Copy
Edit
2tierapp/
├── frontend/
│   └── Dockerfile
├── backend/
│   └── Dockerfile
├── docker-compose.yml
└── .github/
    └── workflows/
        └── docker-build.yml
✍️ Author
Peter Sunday (@rocksun1983)
