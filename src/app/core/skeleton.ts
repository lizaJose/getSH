import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  templateUrl: './sqkqleton.html'
  //styleUrl: '../../../styles.scss',
})
export class PageComponent {


  // =============================
  // CONTENT
  // =============================

  itemOne = `
command example

another command
  `;


  itemTwo = `
command example
  `;


  itemThree = `
command example
  `;


  itemFour = `
command example
  `;


  // =============================
  // ACTIONS
  // =============================

  back() {
    // Add navigation logic here
  }


  copy(text: string) {
    navigator.clipboard.writeText(text);
  }

}
