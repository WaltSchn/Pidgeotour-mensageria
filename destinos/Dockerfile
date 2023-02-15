FROM openjdk:17-jdk-alpine
WORKDIR /app
VOLUME /tmp
COPY target/destinos-*.jar app.jar
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]