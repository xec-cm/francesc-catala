# Francesc Català-Moll - Personal Website

This is the source code for my personal website, built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and TypeScript.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/           # Static assets
├── src/
│   ├── components/   # UI Components (Hero, Projects, etc.)
│   ├── layouts/      # Page layouts
│   ├── pages/        # Route definitions
│   └── data/         # Content data (JSON)
└── package.json
```

## 🧞 Development Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build your production site to `./dist/`     |
| `npm run preview` | Preview your build locally                  |

## 🚢 Deployment

The site is deployed using a Docker-based pipeline with automated CI/CD via GitHub Actions.

### Architecture

-   **Web Server**: Nginx (Alpine) serving the static Astro build.
-   **Reverse Proxy**: Traefik (handles SSL/TLS automatically via Let's Encrypt).
-   **Auto-Updates**: Watchtower (checks for new images and updates containers).
-   **Registry**: Docker Hub.

### CI/CD Pipeline

The project includes a GitHub Action (`.github/workflows/docker-publish.yml`) that triggers on push to `master`.

1.  **Build**: Compiles the Astro site.
2.  **Containerize**: Builds a Docker image.
3.  **Push**: Pushes the image to Docker Hub (`francesccatala/francesc-catala:latest`).

**Required Secrets:**
To enable the pipeline, add these secrets to your GitHub Repository:
-   `DOCKER_USERNAME`: Your Docker Hub username.
-   `DOCKER_PASSWORD`: Your Docker Hub access token or password.

### Production Setup (AWS/VPS)

To deploy on a fresh server (e.g., AWS EC2, DigitalOcean Droplet):

1.  **Install Docker & Docker Compose**:
    Ensure your server has Docker installed.

2.  **Configure Environment Variables**:
    Create a `.env` file on your server with required variables:

    ```bash
    # Copy the example file
    cp .env.example .env
    
    # Edit with your actual values
    nano .env
    ```

    Required variables:
    -   `WEB3FORMS_ACCESS_KEY`: Your Web3Forms API key for contact form functionality.

3.  **Deploy**:
    Copy the `docker-compose.yml` file to your server and run:

    ```bash
    docker-compose up -d
    ```

    This will start:
    -   **Traefik**: Listening on ports 80 and 443.
    -   **Web App**: Pulled from Docker Hub.
    -   **Watchtower**: Monitoring for updates.

4.  **Automatic Updates**:
    Watchtower checks for new images every minute. When you push code to GitHub, the Action builds a new image, and Watchtower automatically pulls it and restarts the web container on your server.

### Configuration

-   **Domain**: Configured in `docker-compose.yml` (Traefik labels) and `astro.config.mjs`.
-   **SSL**: Managed automatically by Traefik (Let's Encrypt). Ensure port 80 and 443 are open in your firewall.
