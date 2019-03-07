import React from 'react';
import styled, {css} from 'styled-components';
import { WeeklyForecast } from './WeeklyForecast';
import Subwrapper from './styles/WrapperContent';
import {
  HaydayMain,
  Hayday,
  HaydayHeader,
  TemperatureDetailsMain,
  TemperatureDetailsElement,
  IconMain,
  Icon,
  ForecastMain,
  WeatherDiv,
  WeatherSubDiv } from './styles/HomepageContent';

interface State {
  lat?: number;
  lng?: number;
  summary: string;
  summary_hourly: string;
  temperature: number;
  wind: number;
  humidity: number;
  visibility: number;
  darkSkyIcon: string;
  fetchingState: boolean;
  weeklyForecast: object;
}

export class HomePage extends React.Component<{}, State> {
  constructor(props:any) {
    super(props);
    this.greatDayForHay = this.greatDayForHay.bind(this);
  }
  public state: State = {
    lat: 0,
    lng: 0,
    summary: '',
    temperature: 0,
    wind: 0,
    humidity: 0,
    visibility: 0,
    summary_hourly: '',
    darkSkyIcon: 'planet-earth',
    fetchingState: true,
    weeklyForecast: {
      summary: '',
      data: []
    }
  }

    componentDidMount = () => {

    var getPosition = () => {
      return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition( function(position) {
        resolve(position.coords);
        setPosition(position.coords.latitude, position.coords.longitude);
        fetchWeather();
        }, (err) => {
          reject(err);
        });
    });
    };
    const setPosition = (lat: number, lng: number) => {
      this.setState({ lat, lng });
    };
    getPosition();
    var fetchWeather = () => {
      var chicago = '41.881832,-87.623177';
      var apiKey = '2641106b5602141c883cbc0840a05dd7';
      fetch(`https://cors.io/?https://api.darksky.net/forecast/${apiKey}/${this.state.lat},${this.state.lng}`)
      .then( response => {
        response.json().then( (data) => {
          this.setState({
            summary: data.currently.summary,
            temperature: data.currently.temperature,
            wind: data.currently.windSpeed,
            humidity: data.currently.humidity,
            visibility: data.currently.visibility,
            summary_hourly: data.hourly.summary,
            darkSkyIcon: data.currently.icon,
            weeklyForecast: data.daily,
            fetchingState: false
          });
        })
      });
    };
  };
  greatDayForHay = () => {
    var almostNotWorth = "It\'s almost not worth thinkin about";
    var bundleUp = "Better bundle up";
    var dayForHay = "It\'s a great day for hay!"

    let temperature = this.state.temperature;
    if(temperature! > 50) {
      return dayForHay;
    } else if(temperature! <= 30) {
      return bundleUp;
    } else {
      return almostNotWorth;
    }
  }

  public render() {
    const {
      lat,
      lng,
      summary,
      temperature,
      wind,
      visibility,
      summary_hourly,
      humidity,
      darkSkyIcon,
    } = this.state;
    return (
      <Subwrapper>
        <TemperatureDetailsMain>
          <TemperatureDetailsElement> Wind: { wind } </TemperatureDetailsElement>
          <TemperatureDetailsElement> Humidity: { humidity } </TemperatureDetailsElement>
          <TemperatureDetailsElement> Visibility: { visibility } + mi </TemperatureDetailsElement>
        </TemperatureDetailsMain>
        <ForecastMain>
          <Icon>
            <IconMain isFetching={ this.state.fetchingState || false } src={require(`./../assets/${darkSkyIcon}.png`)}></IconMain>
          </Icon>
          <WeatherDiv> 
            { temperature!.toString().split('').slice(0,2)}<span>&#176;</span> { summary } 
          </WeatherDiv>
          <WeatherSubDiv> { summary_hourly } </WeatherSubDiv>
        </ForecastMain>
        <HaydayMain>
          <HaydayHeader> Hayday? </HaydayHeader>
          <Hayday>
            {this.greatDayForHay()}
          </Hayday>
        </HaydayMain>
        <WeeklyForecast weeklyForecast={this.state.weeklyForecast}/>
      </Subwrapper>
    )
  }
}

export default HomePage
