FROM node:18-alpine

WORKDIR /app
COPY ./ ./
CMD npm run build

FROM nginx

COPY --from=0 /app/dist /usr/share/nginx/html/
