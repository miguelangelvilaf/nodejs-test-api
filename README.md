# Node.js Test API with Docker

A Node.js application for testing API methods deployed with Docker.

## Getting Started

The goal of this example is to show you how to get a Node.js application into a Docker container. The guide is intended for development, and not for a production deployment. The guide also assumes you have a working Docker installation and a basic understanding of how a Node.js application is structured.

### Prerequisites

You must have installed the following software:

```
- Docker
- Text editor (Atom, Sublime Text, Visual Studio Code, Notepad, ...)
- Terminal
```

### Build the Docker image

Go to the directory that has your <code>Dockerfile</code> and run the following command to build the Docker image. The <code>-t</code> flag lets you tag your image so it's easier to find later using the <code>docker images</code> command:


```
docker build -t <your username>/node-web-app .
```

Your image will now be listed by Docker:

```
$ docker images

# Example
REPOSITORY                      TAG        ID              CREATED
node                            carbon     1934b0b038d1    5 days ago
<your username>/node-web-app    latest     d64d3505b0d2    1 minute ago
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Running your image with <code>-d</code> runs the container in detached mode, leaving the container running in the background. The <code>-p</code> flag redirects a public port to a private port inside the container. Run the image you previously built:

```
docker run -p 8080:8080 -d <your username>/node-web-app
```

Print the output of your app:

```
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:8080
```

If you need to go inside the container you can use the exec command:

```
# Enter the container
$ docker exec -it <container id> /bin/bash
```

## Test

To test your app, get the port of your app that Docker mapped:

```
$ docker ps

# Example
ID            IMAGE                                COMMAND    ...   PORTS
ecce33b30ebf  <your username>/node-web-app:latest  npm start  ...   8080->8080
```

In the example above, Docker mapped the 8080 port inside of the container to the port 8080 on your machine.

Now you can call your app using <code>curl</code> or <code>Postman</code>:

```
$ curl -i localhost:49160

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-M6tWOb/Y57lesdjQuHeB1P/qTV0"
Date: Mon, 13 Nov 2017 20:53:59 GMT
Connection: keep-alive

{"name":"<your username>/node-web-app","version":"1.0.0","description":"Test a POST request","error":"You're using GET method"}
```

## Built With

* [Node.js](http://nodejs.org/)
* [Docker](https://www.docker.com/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Authors

* **Miguel Vila**
* Documentation from Node.js (https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## License

This project is licensed under the Apache 2.0 License
