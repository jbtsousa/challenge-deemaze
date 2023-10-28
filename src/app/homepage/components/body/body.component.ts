import { Component } from '@angular/core';
import { WeatherService } from '../weather-card/service/weather.service';
import { WeatherCardComponent } from '../weather-card/weather-card.component';
@Component({
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  weather: any;

  public weatherMapped: Array<any> = [];

  constructor(private _weatherService: WeatherService) {}
  ngOnInit() {
    this._weatherService.getData().subscribe((res) => {
      this.weather = res;

      let i = 0;
      //Mapping
      this.weather.daily.time.forEach((day: any) => {
        this.weatherMapped.push({
          date: day,
          temp_max: this.weather.daily.temperature_2m_max[i],
          temp_min: this.weather.daily.temperature_2m_min[i],
          code: this.weather.daily.weathercode[i],
        });
        i++;
      });
    });
  }
}
