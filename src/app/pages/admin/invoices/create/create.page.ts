import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Invoice} from '../../../../interfaces/invoice';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  @ViewChild('content') content: ElementRef;
  invoice: Invoice;

  parts: number;
  labour: number;
  gst: number;

  constructor(
  ) {
  }

  makePDF() {
    const doc = new jsPDF();
    doc.addHTML(this.content.nativeElement, () => {
      doc.save('invoice.pdf');
    });
  }

  ngOnInit() {
  }

}
