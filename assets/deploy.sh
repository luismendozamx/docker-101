IMAGE_NAME="luismendozamx/node-docker:latest"

# login
docker login -u luismendozamx -p myPassword

#build image
docker build -t $IMAGE_NAME .

# run tests
docker run --rm $IMAGE_NAME npm run test

# push image
docker push $IMAGE_NAME
