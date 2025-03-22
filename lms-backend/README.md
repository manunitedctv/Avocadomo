# Avocadomo LMS Backend

Backend service for the Avocadomo Learning Management System built with Spring Boot.

## Prerequisites

- Java 17 or higher
- SQL Server
- Maven

## Setup Instructions

1. Copy `application.properties.example` to `application.properties` and update the database configuration:
   ```bash
   cp src/main/resources/application.properties.example src/main/resources/application.properties
   ```

2. Update the database credentials in `application.properties`

3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

The backend API will be available at: http://localhost:8081

## API Documentation

### Authentication
- POST `/api/auth/login` - User login
- POST `/api/auth/register` - User registration

### Notes
- GET `/api/notes` - Get all notes
- POST `/api/notes` - Create a new note
- GET `/api/notes/{id}` - Get a specific note
- PUT `/api/notes/{id}` - Update a note
- DELETE `/api/notes/{id}` - Delete a note

### Courses
- GET `/api/courses` - Get all courses
- POST `/api/courses` - Create a new course
- GET `/api/courses/{id}` - Get a specific course
- PUT `/api/courses/{id}` - Update a course
- DELETE `/api/courses/{id}` - Delete a course

## Database Schema

The application uses SQL Server with the following main entities:
- Users
- Notes
- Courses
- CourseEnrollments

## Development

### Project Structure
```
src/
├── main/
│   ├── java/
│   │   └── com/avocadomo/lms/
│   │       ├── config/      # Configuration classes
│   │       ├── controller/  # REST controllers
│   │       ├── model/       # Entity classes
│   │       ├── repository/  # JPA repositories
│   │       ├── service/     # Business logic
│   │       └── util/        # Utility classes
│   └── resources/
│       └── application.properties
└── test/                    # Test classes
```

### Building the Project
```bash
./mvnw clean install
```

### Running Tests
```bash
./mvnw test
``` 