# Keycloak Theme with Vue 3 and Typescript

- You need to have docker installed on your development environment
- Follow the instructions bellow to run this theme


### 1. Dockerfile

```
FROM jboss/keycloak:16.1.0

RUN sed -i -E "s/(<staticMaxAge>)2592000(<\/staticMaxAge>)/\1\-1\2/" /opt/jboss/keycloak/standalone/configuration/standalone.xml
RUN sed -i -E "s/(<cacheThemes>)true(<\/cacheThemes>)/\1false\2/" /opt/jboss/keycloak/standalone/configuration/standalone.xml
RUN sed -i -E "s/(<cacheTemplates>)true(<\/cacheTemplates>)/\1false\2/" /opt/jboss/keycloak/standalone/configuration/standalone.xml

```


### 2. docker-compose.yml

```
version: "3"

volumes:
  postgres_data:
    driver: local

services:
  postgres:
    image: postgres:9.6
    container_name: ck-theme_postgres
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  keycloak:
    build: .
    container_name: ck-theme_keycloak
    environment:
      DB_VENDOR: POSTGRES
      DB_ADDR: postgres
      DB_DATABASE: keycloak
      DB_USER: keycloak
      DB_SCHEMA: public
      DB_PASSWORD: password
      KEYCLOAK_USER: admin
      KEYCLOAK_PASSWORD: password
    ports:
      - 8080:8080
    depends_on:
      - postgres
```



### 3. Create file: disable-theme-cache.cli


```
embed-server --std-out=echo --server-config=standalone-ha.xml
/subsystem=keycloak-server/theme=defaults/:write-attribute(name=cacheThemes,value=false)
/subsystem=keycloak-server/theme=defaults/:write-attribute(name=cacheTemplates,value=false)
/subsystem=keycloak-server/theme=defaults/:write-attribute(name=staticMaxAge,value=-1)
stop-embedded-server
```


### 4. Run keycloak server

```
docker compose up
```

### 5. Create new realm
  For ex: http://localhost:8080/auth/admin/master/console/#/realms/test/theme-settings


### 6. Copy actual themes folder

```
docker cp ck-theme_keycloak:/opt/jboss/keycloak/themes .
```


### 7. Add local theme

```
keycloak:
...
    ports: 
      - 8080:8080
    volumes:
      - ./disable-theme-cache.cli:/opt/jboss/startup-scripts/disable-theme-cache.cli
      - ./themes:/opt/jboss/keycloak/themes
      ...
```

### 8. Keycloak VueJs theme
```
npm install
```
then 
```
npm run build 
```
or
```
npm run dev
```
for development server

### If you want reset keycloak settings:

```
docker-compose down --volumes
```
or for all volumes
```
docker-compose down --rmi all --volumes
```
