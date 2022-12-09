import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Tareas';

  msg = '';

  employees = [
    {'name': 'HTML', description: 'crear página html con etiquetas div para cada sección', email: 'ana@hotmail.com'},
    {'name': 'CSS', description: 'agregar ruta de los estilos en la página con sus estilos', email: 'jose@email.com'},
    {'name': 'JS', description: 'crear la programación con los scripts de javascript', email: 'eder@email.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addE():void{
    this.employees.push(this.model);
    this.msg = 'campo agregado'
  }

  deleteE(i: any):void{
    var answer = confirm('Deseas eliminar tarea?');
    if(answer){
    this.employees.splice(i, 1);
    this.msg = 'campo eliminado';
  }
  }

  myValue: any;
  editE(i: any):void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.description = this.employees[i].description;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateE():void{
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i==j){
        this.employees[i]=this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void{
    this.msg='';
  }
}
