import { Component } from '@angular/core';

interface JourneyEntry {
  id: string;
  date: string;
  title: string;
  summary: string;
  details: string[];
}

@Component({
  selector: 'app-journey',
  templateUrl: './journey.html',
  styleUrl: './journey.css',
})
export class JourneyComponent {
  readonly entries: JourneyEntry[] = [
    {
      id: 'mechatronics-degree',
      date: '2019 — 2023',
      title: 'B.E. Mechatronics Engineering · Sona College of Engineering',
      summary: 'Bachelor of Engineering',
      details: [
        'Built a foundation in mechatronics engineering and learned how different engineering systems work together.',
        'Stayed active in sports and extracurricular activities alongside academic studies.',
        'Conducted programs through several college clubs and collaborated with fellow students to bring activities together.',
        'Developed teamwork, communication, and planning skills through these experiences.',
      ],
    },
    {
      id: 'ltimindtree-internship',
      date: 'DEC 2022 — FEB 2023',
      title: 'Internship · LTIMindtree',
      summary: 'Intern Trainee',
      details: [
        'Engineered backend modules using Java OOP principles and Spring Boot during my internship.',
        'Designed responsive Angular interfaces and integrated them seamlessly with backend REST APIs.',
        'Streamlined data access by implementing Spring-based database operations.',
        'Delivered complete CRUD functionality, enabling end-to-end data creation, retrieval, updates, and deletion.',
      ],
    },
    {
      id: 'ltm-software-engineer',
      date: 'JUN 2024 — PRESENT',
      title: 'Software Engineer · LTM',
      summary:
        'Backend and Frontend Development, Production Support, and Application Stabilization',
      details: [
        'Developed and enhanced backend features using Java and Spring Boot in a full-time development role.',
        'Built and maintained REST APIs that supported key application functionality.',
        'Collaborated with the team to fix defects, improve code quality, and deliver features on schedule.',
        'Managed deployments and routine maintenance to keep production environments running smoothly.',
        'Identified and analyzed production bugs, tracing issues to their root cause.',
        'Worked closely with the development team to resolve critical issues and make the application more stable.',
        'Monitored application health and responded to incidents to reduce downtime and improve reliability.',
        'Bridged support and development by sharing production insights that led to permanent fixes.',
      ],
    },
  ];

}
