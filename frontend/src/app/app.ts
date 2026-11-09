import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from './models/student';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'University Management';
  students: Student[] = [];
  
  // Propriétés pour l'ajout
  name: string = '';
  email: string = '';
  level: string = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  // Récupérer tous les étudiants
  getStudents(): void {
    this.studentService.getStudents().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Erreur :', error);
      }
    );
  }

  // Ajouter un étudiant
  addStudent(): void {
    const newStudent: Student = {
      name: this.name,
      email: this.email,
      level: this.level
    };

    this.studentService.addStudent(newStudent).subscribe(
      (student) => {
        this.students.push(student);
        // Vider les champs
        this.name = '';
        this.email = '';
        this.level = '';
      },
      (error) => {
        console.error('Erreur lors de l\'ajout :', error);
      }
    );
  }

  // Supprimer un étudiant
  deleteStudent(id?: string): void {
    if (!id) return;

    this.studentService.deleteStudent(id).subscribe(
      () => {
        this.students = this.students.filter(s => s._id !== id);
      },
      (error) => {
        console.error('Erreur lors de la suppression :', error);
      }
    );
  }
}