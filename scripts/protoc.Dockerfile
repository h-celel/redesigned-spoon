FROM node:18-buster

WORKDIR /wd

RUN npm install request -g
RUN npm config set unsafe-perm true
RUN npm install protoc-gen-grpc -g
RUN npm install protoc-gen-grpc-web -g

CMD protoc-gen-grpc -I /input /input/**/*.proto --js_out=import_style=commonjs:/output --grpc-web_out=import_style=commonjs,mode=grpcwebtext:/output