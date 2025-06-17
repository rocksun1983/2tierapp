# Use nginx base image
FROM nginx:alpine

# Copy custom Nginx config if you have it
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all files in current directory into nginx html directory
COPY . /usr/share/nginx/html

