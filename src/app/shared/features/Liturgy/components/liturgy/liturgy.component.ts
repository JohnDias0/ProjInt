import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import LiturgyService from '../../Services/LiturgyService';
import { routes } from '../../../../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liturgy',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './liturgy.component.html',
  styleUrls: ['./liturgy.component.css']
})
export class LiturgyComponent implements OnInit {
  myForm!: FormGroup;
  @Input() InputData: { dom: number, horario: number } = { dom: 0, horario: 0 };

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      data: [''],
      horario: ['']
    });

    this.myForm.get('data')?.valueChanges.subscribe(value => {
      this.handleInputChange('date', value);
    });

    this.myForm.get('horario')?.valueChanges.subscribe(value => {
      this.handleInputChange('horario', value);
    });
  }

  handleInputChange(inputType: string, inputValue: any) {
    if (inputType === 'date') {
      try {
        const data = new Date(inputValue);
        const diaDaSemana = data.getDay();
        const diaDoMes = data.getDate();

        const isSunday = diaDaSemana === 0;

        if (!isSunday) {
          throw new Error('A data selecionada não é um domingo. Verifique novamente.');
        }

        let contadorDomingos = 0;
        for (let dia = 1; dia <= diaDoMes; dia++) {
          const dataTemp = new Date(data.getFullYear(), data.getMonth(), dia);
          if (dataTemp.getDay() === 0) {
            contadorDomingos++;
          }
        }
        this.InputData.dom = contadorDomingos;

      } catch (error) {
        console.log(error);
      }
    }
    if (inputType === 'horario') {
      try {
        switch (inputValue) {
          case '7:30':
            this.InputData.horario = 0;
            break;
          case '10:00':
            this.InputData.horario = 1;
            break;
          case '19:00':
            this.InputData.horario = 2;
            break;
          default:
            throw new Error('Horário não especificado corretamente');
        }
        console.log(this.InputData)
      } catch (error) {
        console.log(error);
      }
    }
  }

  async handleSubmit(){
    try {
      console.log(this.InputData.dom, this.InputData.horario)
      await LiturgyService(this.InputData.dom, this.InputData.horario)
      this.router.navigate(['/intencoes']);
    } catch (error) {
      console.error(error)      
    }

  }
}
