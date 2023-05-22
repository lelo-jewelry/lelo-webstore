# Use the official Minio Docker image as the base image
FROM minio/minio

# Set the environment variables
# ENV MINIO_ACCESS_KEY=myaccesskey
# ENV MINIO_SECRET_KEY=mysecretkey
ENV MINIO_ROOT_USER=${MINIO_USER}
ENV MINIO_ROOT_PASSWORD=${MINIO_PASSWORD}

# Create a data directory
RUN mkdir /data

# Expose port 9001 for Minio server
EXPOSE 9001

# Start Minio server
CMD ["server", "/data", "--console-address", ":9090", "--address", ":9001"]