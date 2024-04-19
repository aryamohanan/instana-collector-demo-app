# Use an official Node.js runtime as the base image
FROM node:21

COPY --from=icr.io/instana/aws-fargate-nodejs:latest /instana /instana
RUN /instana/setup.sh
ENV NODE_OPTIONS="--import=/instana/node_modules/@instana/aws-fargate/esm-register.mjs"

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["node", "app.mjs"]



# steps to deploy in k8
# docker build -t my-express-app-aryas:v1 .
# minikube docker-env
# eval $(minikube docker-env)

# kubectl apply -f deployment.yaml
# kubectl apply -f service.yaml
# kubectl port-forward deployment/my-express-app-aryas 3000:3000
# http://localhost:3000

