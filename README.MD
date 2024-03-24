assign-mentor
﻿

GET
mentor/get
localhost:8000/mentor/get
﻿

[
    {
        "_id": "65ffc0cfbbe26c618719f0cd",
        "name": "Rupen",
        "email": "rupen@gmail.com",
        "mobile": "145874112",
        "students": [
            "65ffc2937f0ff5fa088b70b3",
            "65ffc3087f0ff5fa088b70b5"
        ],
        "__v": 3
    },
    {
        "_id": "65ffc1abb7c1a4e50cbf7ee9",
        "name": "Swathi",
        "email": "swathi@gmail.com",
        "mobile": "145874112",
        "students": [],
        "__v": 0
    },
    {
        "_id": "65ffc1dfb7c1a4e50cbf7eeb",
        "name": "rohit",
        "email": "rohit@gmail.com",
        "mobile": "145874112",
        "students": [],
        "__v": 0
    },
    {
        "_id": "65ffc1fab7c1a4e50cbf7eed",
        "name": "kavin",
        "email": "kavin@gmail.com",
        "mobile": "145874112",
        "students": [
            [
                "65ffc3087f0ff5fa088b70b5",
                "65ffc31d7f0ff5fa088b70b7",
                "65ffc32e7f0ff5fa088b70b9"
            ]
        ],
        "__v": 1
    },
    {
        "_id": "65ffc20bb7c1a4e50cbf7eef",
        "name": "diya",
        "email": "diya@gmail.com",
        "mobile": "145874112",
        "students": [],
        "__v": 0
    }
]

Query Params
GET
student/get
localhost:8000/student/get
﻿


[
    {
        "_id": "65ffc2937f0ff5fa088b70b3",
        "name": "raj",
        "email": "raj@gmail.com",
        "mobile": "1425142222",
        "mentor": "65ffc0cfbbe26c618719f0cd",
        "__v": 0
    },
    {
        "_id": "65ffc3087f0ff5fa088b70b5",
        "name": "priya",
        "email": "priya@gmail.com",
        "mobile": "1425142222",
        "mentor": "65ffc1fab7c1a4e50cbf7eed",
        "__v": 0
    },
    {
        "_id": "65ffc31d7f0ff5fa088b70b7",
        "name": "rithvik",
        "email": "rithvik@gmail.com",
        "mobile": "1425142222",
        "mentor": "65ffc1fab7c1a4e50cbf7eed",
        "__v": 0
    },
    {
        "_id": "65ffc32e7f0ff5fa088b70b9",
        "name": "riththi",
        "email": "riththi@gmail.com",
        "mobile": "1425142222",
        "mentor": "65ffc1fab7c1a4e50cbf7eed",
        "__v": 0
    }
]

POST
student/create
localhost:8000/student/create
﻿

Body
raw (json)
json
{
    "name":"riththi",
    "email":"riththi@gmail.com",
    "mobile":1425142222,
    "mentor":""
}
POST
mentor/create
localhost:8000/mentor/create
﻿


Body
raw (json)
json
{
   "name":"diya",
   "email":"diya@gmail.com",
   "mobile":"145874112",
   "students":[]
}
POST
student/assignmentor
localhost:8000/student/assign_mentor
﻿

Body
raw (json)
json
{
    "student_id":"65ffc3087f0ff5fa088b70b5",
    "mentor_id":"65ffc0cfbbe26c618719f0cd"
}


POST
mentor/assignstudent
localhost:8000/mentor/assign_student
﻿



Body
raw (json)
json
{
    "student_list":["65ffc3087f0ff5fa088b70b5","65ffc31d7f0ff5fa088b70b7","65ffc32e7f0ff5fa088b70b9"],
    "mentor_id":"65ffc1fab7c1a4e50cbf7eed"
}

GET
mentor/mentorlist
localhost:8000/mentor/mentorlist
﻿

Body
raw (json)
json
{
    "mentor_id":"65ffc0cfbbe26c618719f0cd"
}