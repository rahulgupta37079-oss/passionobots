// Comprehensive Course Data with Detailed Curriculum

export const coursesData = [
  {
    id: 1,
    slug: "robotics-fundamentals",
    name: "Robotics Fundamentals Internship",
    price: "₹4,999",
    originalPrice: "₹9,999",
    duration: "2 Months",
    level: "Beginner",
    mode: "Online + Hands-on Projects",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    description: "Master robotics fundamentals with hands-on projects and get industry-recognized certification",
    shortDesc: "Learn robotics basics, electronics, and programming with real-world projects",
    
    highlights: [
      "Build 5+ Real Robotics Projects",
      "2 Industry Certificates",
      "Live Mentorship Sessions",
      "Placement Assistance",
      "Premium Arduino & Raspberry Pi Kit Included",
      "Lifetime Course Access"
    ],
    
    certificates: [
      "Robotics Fundamentals Completion Certificate",
      "Project Internship Certificate from PassionBots"
    ],
    
    curriculum: {
      month1: {
        title: "Month 1: Foundations & Basic Robotics",
        weeks: [
          {
            week: 1,
            title: "Introduction to Robotics",
            topics: [
              {
                name: "What is Robotics?",
                subtopics: [
                  "History and Evolution of Robotics",
                  "Types of Robots (Industrial, Service, Mobile)",
                  "Applications in Real World",
                  "Career Opportunities in Robotics"
                ]
              },
              {
                name: "Electronics Basics",
                subtopics: [
                  "Voltage, Current, and Resistance",
                  "Ohm's Law and Circuit Analysis",
                  "Series and Parallel Circuits",
                  "Reading Circuit Diagrams"
                ]
              },
              {
                name: "Components Introduction",
                subtopics: [
                  "Resistors, Capacitors, Diodes",
                  "LEDs and Buttons",
                  "Breadboard Usage",
                  "Multimeter Basics"
                ]
              }
            ],
            project: "LED Blinking Circuit"
          },
          {
            week: 2,
            title: "Arduino Programming",
            topics: [
              {
                name: "Arduino Platform",
                subtopics: [
                  "Arduino UNO Board Architecture",
                  "Digital and Analog Pins",
                  "Power Supply Options",
                  "IDE Setup and Configuration"
                ]
              },
              {
                name: "C/C++ for Arduino",
                subtopics: [
                  "Variables and Data Types",
                  "Functions and Control Structures",
                  "Loops (for, while, do-while)",
                  "Conditional Statements"
                ]
              },
              {
                name: "Digital I/O",
                subtopics: [
                  "digitalWrite() and digitalRead()",
                  "pinMode() Configuration",
                  "Pull-up and Pull-down Resistors",
                  "Debouncing Techniques"
                ]
              }
            ],
            project: "Traffic Light System"
          },
          {
            week: 3,
            title: "Sensors & Actuators",
            topics: [
              {
                name: "Sensor Technology",
                subtopics: [
                  "Types of Sensors (Analog vs Digital)",
                  "Ultrasonic Distance Sensor (HC-SR04)",
                  "IR Sensors and Line Following",
                  "Temperature Sensors (LM35, DHT11)"
                ]
              },
              {
                name: "Actuators",
                subtopics: [
                  "DC Motors Fundamentals",
                  "Servo Motors (SG90)",
                  "Motor Driver (L298N)",
                  "PWM Control Techniques"
                ]
              },
              {
                name: "Sensor Integration",
                subtopics: [
                  "Analog Input Reading",
                  "Serial Monitor Debugging",
                  "Sensor Calibration",
                  "Data Filtering Techniques"
                ]
              }
            ],
            project: "Obstacle Avoiding Robot"
          },
          {
            week: 4,
            title: "Robot Mechanics & Assembly",
            topics: [
              {
                name: "Mechanical Design",
                subtopics: [
                  "Robot Chassis Design Principles",
                  "Wheel Configuration (2WD, 4WD)",
                  "Center of Gravity",
                  "Material Selection"
                ]
              },
              {
                name: "Motor Control",
                subtopics: [
                  "H-Bridge Motor Driver Theory",
                  "Direction and Speed Control",
                  "Motor Encoder Basics",
                  "PID Control Introduction"
                ]
              },
              {
                name: "Power Management",
                subtopics: [
                  "Battery Types and Selection",
                  "Voltage Regulators",
                  "Power Distribution",
                  "Safety Considerations"
                ]
              }
            ],
            project: "Line Following Robot"
          }
        ]
      },
      month2: {
        title: "Month 2: Advanced Robotics & Projects",
        weeks: [
          {
            week: 5,
            title: "Wireless Communication",
            topics: [
              {
                name: "Bluetooth Technology",
                subtopics: [
                  "HC-05/HC-06 Bluetooth Modules",
                  "Serial Communication Protocol",
                  "AT Commands Configuration",
                  "Android App Integration"
                ]
              },
              {
                name: "WiFi & IoT",
                subtopics: [
                  "ESP8266 WiFi Module",
                  "HTTP Requests",
                  "IoT Platform Introduction",
                  "Remote Control Basics"
                ]
              },
              {
                name: "RF Communication",
                subtopics: [
                  "NRF24L01 Module",
                  "Radio Frequency Basics",
                  "Long Range Communication",
                  "Transceiver Programming"
                ]
              }
            ],
            project: "Bluetooth Controlled Robot"
          },
          {
            week: 6,
            title: "Advanced Sensors",
            topics: [
              {
                name: "IMU Sensors",
                subtopics: [
                  "Accelerometer and Gyroscope",
                  "MPU6050 Integration",
                  "Orientation Detection",
                  "Kalman Filter Basics"
                ]
              },
              {
                name: "Vision Systems",
                subtopics: [
                  "Camera Modules Overview",
                  "Image Processing Basics",
                  "Color Detection",
                  "Object Tracking Fundamentals"
                ]
              },
              {
                name: "Environmental Sensors",
                subtopics: [
                  "Gas Sensors (MQ Series)",
                  "Sound Sensors",
                  "Light Sensors (LDR, BH1750)",
                  "Multi-sensor Integration"
                ]
              }
            ],
            project: "Gesture Controlled Robot"
          },
          {
            week: 7,
            title: "Autonomous Navigation",
            topics: [
              {
                name: "Path Planning",
                subtopics: [
                  "Grid-based Navigation",
                  "Obstacle Detection Logic",
                  "Decision Making Algorithms",
                  "State Machine Implementation"
                ]
              },
              {
                name: "Localization",
                subtopics: [
                  "Dead Reckoning",
                  "Encoder-based Positioning",
                  "GPS Module Integration",
                  "Map Building Basics"
                ]
              },
              {
                name: "Advanced Control",
                subtopics: [
                  "PID Tuning Methods",
                  "Velocity Control",
                  "Trajectory Following",
                  "Smooth Motion Planning"
                ]
              }
            ],
            project: "Autonomous Maze Solver"
          },
          {
            week: 8,
            title: "Final Project & Certification",
            topics: [
              {
                name: "Project Design",
                subtopics: [
                  "Requirement Analysis",
                  "System Architecture Design",
                  "Component Selection",
                  "Project Planning and Timeline"
                ]
              },
              {
                name: "Implementation",
                subtopics: [
                  "Prototyping and Testing",
                  "Debugging Techniques",
                  "Performance Optimization",
                  "Documentation Best Practices"
                ]
              },
              {
                name: "Presentation Skills",
                subtopics: [
                  "Technical Documentation",
                  "Demo Preparation",
                  "Project Presentation",
                  "Q&A Handling"
                ]
              }
            ],
            project: "Final Internship Project (Student's Choice)"
          }
        ]
      }
    },
    
    instructor: {
      name: "Dr. Rajesh Kumar",
      designation: "Senior Robotics Engineer",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      credentials: [
        "PhD in Robotics from IIT Delhi",
        "Ex-Amazon Robotics Team Lead",
        "Published 15+ Research Papers",
        "Mentored 2000+ Students"
      ]
    },
    
    companies: [
      { name: "Amazon Robotics", logo: "Amazon" },
      { name: "ABB Robotics", logo: "ABB" },
      { name: "KUKA", logo: "KUKA" },
      { name: "Fanuc", logo: "Fanuc" },
      { name: "Boston Dynamics", logo: "Boston" }
    ],
    
    testimonials: [
      {
        name: "Amit Sharma",
        role: "Engineering Student",
        college: "BITS Pilani",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
        text: "This robotics course changed my career! Built my first autonomous robot and got placed at Amazon. The hands-on approach and mentorship were exceptional."
      },
      {
        name: "Priya Patel",
        role: "Robotics Enthusiast",
        college: "IIT Bombay",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 5,
        text: "Best investment ever! The curriculum is well-structured and the projects are industry-relevant. Won first prize in national robotics competition!"
      }
    ],
    
    whyChoose: [
      "Industry-Standard Arduino & Raspberry Pi Kits",
      "1-on-1 Doubt Solving Sessions",
      "Real-time Project Feedback",
      "Job-Ready Skills in 2 Months",
      "Build Portfolio-Worthy Projects",
      "Access to Premium Learning Resources"
    ]
  }
];

export const getCourseBySlug = (slug: string) => {
  return coursesData.find(course => course.slug === slug);
};

export const getAllCourses = () => {
  return coursesData.map(course => ({
    id: course.id,
    slug: course.slug,
    name: course.name,
    price: course.price,
    duration: course.duration,
    level: course.level,
    image: course.image,
    description: course.description,
    shortDesc: course.shortDesc
  }));
};
