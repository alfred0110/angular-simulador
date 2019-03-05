import { Component, OnInit, ɵConsole } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import Keyboard from "simple-keyboard";

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: [    
    './referencia.component.css']  
})
export class ReferenciaComponent implements OnInit {
  servicioId: number;
  value = "";
  keyboard: Keyboard;


  constructor(private appService:AppService) { }

  ngOnInit() {
    this.servicioId = this.appService.global.servicioId;
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  establecerReferencia(ref:string){
    this.appService.global.referencia = ref;
  }

  onChange = (input: string) => {
    this.value = input;
    this.establecerReferencia(input)
  };

  onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);  

  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };
}
