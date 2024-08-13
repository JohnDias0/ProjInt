import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-intentions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './intentions.component.html',
  styleUrl: './intentions.component.css'
})
export class IntentionsComponent {
  campos: { [key: string]: string } = {};
  maxCampos: number = 8; 
  @ViewChildren('campo') campoRefs!: QueryList<ElementRef>;

  constructor() {
    this.campos['Falecidos até 30 dias'] = '';
    this.campos['Falecidos com mais de 30 dias'] = '';
    this.campos['Intenções de saúde'] = '';
    this.campos['Aniversários'] = '';
    this.campos['Ação de graças'] = '';
  }

  onSubmit() {
    const valores: { [key: string]: string } = {};
    this.campoRefs.forEach(ref => {
      const input = ref.nativeElement as HTMLInputElement;
      valores[input.name] = input.value;
    });
    console.log(valores);
  }

  addField() {
    if (Object.keys(this.campos).length >= this.maxCampos) {
      alert('Você já atingiu o limite máximo de campos.');
      return;
    }

    const fieldName = prompt('Digite o nome do novo campo:');
    if (fieldName && !this.campos[fieldName]) {
      this.campos[fieldName] = '';
    } else  {
      alert('Campo com esse nome já existe.');
    }
  }

  getCampoKeys(): string[] {
    return Object.keys(this.campos);
  }
}
