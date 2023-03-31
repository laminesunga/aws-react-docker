FROM node:lts-alpine as build

# ARG REACT_APP_USERPOOLID
# ARG REACT_APP_CLIENTID
# ARG REACT_APP_APIURL

# ENV REACT_APP_USERPOOLID $REACT_APP_USERPOOLID
# ENV REACT_APP_CLIENTID $REACT_APP_CLIENTID
# ENV REACT_APP_APIURL $REACT_APP_APIURL



WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build

#production environment

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html/
COPY --from=build /app//nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 3001
CMD ["nginx", "-g","daemon off;"]


