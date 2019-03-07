import React from 'react';
import styled, {css} from 'styled-components';
import Subwrapper from './styles/Subwrapper';
import ForecastHeader from './styles/ForecastHeader';
import {SidebarMain, SidebarElements} from './styles/ForecastHeaderSidebar';
import { IconContainer, IconWrapper, HomepageSubDiv, HomepageDiv } from './styles/IconContainer';

interface State {
  lat?: number;
  lng?: number;
  summary?: string;
  summary_hourly?: string;
  temperature?: number;
  wind?: number;
  humidity?: number;
  visibility?: number;
  darkSkyIcon?: string;
  fetchingState?: boolean;
}

export class HomePage extends React.Component<{}, State> {
constructor(props:any) {
  super(props);

}
    public state: State = {
      lat: 32,
      lng: -41,
      summary: '',
      temperature: 0,
      wind: 0,
      humidity: 0,
      visibility: 0,
      summary_hourly: '',
      darkSkyIcon: 'planet-earth',
      fetchingState: true
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
      fetch(`https://cors.io/?https://api.darksky.net/forecast/460f6001173b06e5a3c01f1c30cf60df/${this.state.lat},${this.state.lng}`)
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
            fetchingState: false
          });
        })
      });
    };
  };

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
    // const { isFetching } = this.props;
    return (
      <Subwrapper>
        <SidebarMain>
          <SidebarElements> Wind: { wind } </SidebarElements>
          <SidebarElements> Humidity: { humidity } </SidebarElements>
          <SidebarElements> Visibility: { visibility } + mi </SidebarElements>
        </SidebarMain>
        <ForecastHeader>
          <IconWrapper>
            <IconContainer isFetching={ this.state.fetchingState || false } src={require(`./../assets/${darkSkyIcon}.png`)}></IconContainer>
          </IconWrapper>
            <HomepageDiv> { temperature!.toString().split('').slice(0,2)}<span>&#176;</span> { summary } </HomepageDiv>
            <HomepageSubDiv> { summary_hourly } </HomepageSubDiv>
        </ForecastHeader>
      </Subwrapper>
    )
  }
}

export default HomePage
