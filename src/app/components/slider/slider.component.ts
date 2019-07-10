import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Declaramos las variables de jQuery

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() { 

  	this.autor = {
  		nombre: "Francisco Gomez",
  		website: "Facebook",
  		youtube: "Saeros"
  	}
  }

  ngOnInit() {
  	$("#logo").click(function(e){
  		e.preventDefault();
  		$("header").css("background","green")
  				   .css("height", "50px");
  	});

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

  lanzar(event){
  	this.conseguirAutor.emit(this.autor);
  }

}
