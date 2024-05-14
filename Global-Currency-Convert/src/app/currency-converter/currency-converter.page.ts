import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from '../services/currency.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.page.html',
  styleUrls: ['./currency-converter.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CurrencyConverterPage implements OnInit {
  rates: any;
  amount: number = 0;
  fromCurrency: string = '';
  toCurrency: string = '';
  convertedAmount: number = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getRates().subscribe((data) => {
      console.log('### response', data);
      this.rates = data.rates;
    });
  }

  convertCurrency() {
    if (this.fromCurrency && this.toCurrency && this.amount) {
      const rate = this.rates[this.toCurrency] / this.rates[this.fromCurrency];
      this.convertedAmount = this.amount * rate;
    }
  }
}
