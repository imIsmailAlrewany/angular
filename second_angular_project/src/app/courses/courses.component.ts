import { Component } from '@angular/core'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses: any[] = [
    {
      id: 101,
      name: 'JavaScript for beginners',
      author: 'John Heikels',
      duration: 48,
      type: 'Free',
      price: 0.0,
      rating: 3.5,
      image: '../../assets/js.jpg',
      description:
        'In this course you will learn the fundamentals, This course is purely designed for you bro...',
    },
    {
      id: 102,
      name: 'Angular for beginners',
      author: 'John Heikels',
      duration: 48,
      type: 'Premium',
      price: 21,
      rating: 3.5,
      image: '../../assets/angular.jpg',
      description:
        'In this course you will learn the fundamentals, This course is purely designed for you bro...',
    },
    {
      id: 103,
      name: 'React for beginners',
      author: 'John Heikels',
      duration: 48,
      type: 'Premium',
      price: 50,
      rating: 3.5,
      image: '../../assets/react.jpg',
      description:
        'In this course you will learn the fundamentals, This course is purely designed for you bro...',
    },
    {
      id: 104,
      name: 'Advanced JavaScript Course',
      author: 'John Heikels',
      duration: 48,
      type: 'Free',
      price: 0.0,
      rating: 3.5,
      image: '../../assets/js01.jpg',
      description:
        'In this course you will learn the fundamentals, This course is purely designed for you bro...',
    },
    {
      id: 105,
      name: 'Advanced Angular Course',
      author: 'John Heikels',
      duration: 48,
      type: 'Free',
      price: 0.0,
      rating: 3.5,
      image: '../../assets/angular02.jpg',
      description:
        'In this course you will learn the fundamentals, This course is purely designed for you bro...',
    },
    {
      id: 106,
      name: 'Advanced React Course',
      author: 'John Heikels',
      duration: 48,
      type: 'Premium',
      price: 100,
      rating: 3.5,
      image: '../../assets/react01.jpg',
      description:
        'In this course you will learn the fundamentals, This course is purely designed for you bro...',
    },
    {
      id: 107,
      name: 'Angular with .Net Course',
      author: 'John Heikels',
      duration: 48,
      type: 'Premium',
      price: 129,
      rating: 3.5,
      image: '../../assets/angular03.jpg',
      description:
        'In this course you will learn the fundamentals, This course is purely designed for you bro...',
    },
    {
      id: 108,
      name: 'UX Design Course',
      author: 'John Heikels',
      duration: 48,
      type: 'Free',
      price: 0.0,
      rating: 3.5,
      image: '../../assets/ux.jpg',
      description:
        'In this course you will learn the fundamentals, This course is purely designed for you bro...',
    },
    {
      id: 109,
      name: 'Advanced UX Design Course',
      author: 'John Heikels',
      duration: 48,
      type: 'Premium',
      price: 49,
      rating: 3.5,
      image: '../../assets/ux01.jpg',
      description:
        'In this course you will learn the fundamentals, This course is purely designed for you bro...',
    },
  ];

  getTotalCourses() {
    return this.courses.length;
  }
  getFreeCourses: number = this.courses.filter(
    (course) => course.type === 'Free',
  ).length;
  getPremiumCourses() {
    return this.courses.filter((course) => course.type === 'Premium').length;
  }

  radioButtonValue: string = 'All';
  searchValue: string = '';

  radioSelection(data: string) {
    this.radioButtonValue = data;
  }

  filterSearchWithValue(value: string) {
    this.searchValue = value;
    console.log(this.searchValue);

  }
}
