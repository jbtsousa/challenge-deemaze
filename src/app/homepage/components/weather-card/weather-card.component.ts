import { Component, Input } from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent {
  @Input() day: Date | undefined;
  @Input() tempMax: number = 0;
  @Input() tempMin: number = 0;
  @Input() weatherCode: number = 0;

  public temperature: number | undefined;


//Weather Codes to determine type of card
  isSunny(weatherCode: number): boolean {
    return weatherCode === 0;
  }
  isGloomy(weatherCode: number): boolean {
    return weatherCode === 1 || weatherCode === 2 || weatherCode === 3;
  }

  isWindy(weatherCode: number): boolean {
    return weatherCode === 61 || weatherCode === 63 || weatherCode === 65;
  }

  isRainy(weatherCode: number): boolean {
    return weatherCode === 80 || weatherCode === 81 || weatherCode === 82;
  }
  isSnowy(weatherCode: number): boolean {
    return weatherCode === 77 || weatherCode === 85 || weatherCode === 86;
  }
}
