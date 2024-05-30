# Mentor-Student API
 The Mentor-Student Relationship Management API is a comprehensive solution designed to streamline the administration of mentor-student relationships. It offers a suite of features for creating and managing mentors and students, assigning relationships, and retrieving information.
## Quick Start Guide
Our API server is conveniently hosted at: https://mentorandstudent-api-mongodb.onrender.com
## Key API Endpoints
#### 1. Create Mentor (POST): crearte a new mentor.
 - Endpoint: api/creatementor
#### 2. Create Student (POST): create a new student.
 - Endpoint: /api/createstudent
#### 3. Assign Student to Mentor (POST): Link a student to a mentor.
 - Endpoint: /api/assignStudent/:Mentorid/:Studentid
#### 4. Assign or Change Mentor for Student (PUT): Assign a new mentor to a student.
 - Endpoint: /api/changementor/:Studentid/:newMentorid
#### 5. Get All Students for a Mentor (GET): Retrieve  list of all students from specific mentor.
 - Endpoint: /api/getallstudent/frommentor/:mentorid
#### 6. Get Previously Assigned Mentor for a Student (GET): Access student's previously assigned mentor.
 - Endpoint: /api/prementor/:studentId

## Detailed Documentation
  - For an better understanding of our API and its usage, we recommend referring to our comprehensive Postman Documentation.
  ### API Cocumentation link :https://documenter.getpostman.com/view/29008830/2sA3Qv7qfy

