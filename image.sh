docker build -t service .

docker run -d -p 3003:3003 --rm --name sizes service

