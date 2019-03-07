import React from 'react';
import DailyForecast from './DailyForecast';
import styled, {css} from 'styled-components';
import Subwrapper from './styles/WrapperContent';
import {
    WeatherWeeklyMain,
    WeatherWeeklyHeader,
    WeatherWeeklyBody,
    WeatherWeeklySummary,
    WeeklyWeatherBar } from './styles/HomepageContent';

interface State {
    weeklyForecastWithDates?: any;
}

interface Props {
    weeklyForecast?: any;
}

export class WeeklyForecast extends React.Component<Props, State> {
    constructor(props:any) {
        super(props);
        this.createDayTiles = this.createDayTiles.bind(this);
    }

    public state: State = {
        weeklyForecastWithDates: []
    }

    componentWillReceiveProps<nextProps>(nextProps:any) {
        if(nextProps.weeklyForecast.data.length > 0) {
            this.getDaysOfWeek(nextProps.weeklyForecast.data);
        }
    }

    createDayTiles = () => {
        return this.state.weeklyForecastWithDates.map( (day:object, i:number) => {
            return <DailyForecast key={i} dayToLoad={day} />
        })
    }

    getDaysOfWeek(weeklyForecast:object[]) {
        var setDay = (seconds:any) => {
            var d = new Date(0);
            d.setUTCSeconds(seconds);
            return d.toString().substr(0,3);
        };
        var updatedWeeklyForecast = weeklyForecast.map( (day:any) => ({
            icon: day.icon,
            tempLow: day.temperatureMin,
            tempHigh: day.temperatureHigh,
            dayOfWeek: setDay(day.time)
        }));
        this.setState({ weeklyForecastWithDates: updatedWeeklyForecast });
    }

public render() {
    return (
        <WeatherWeeklyMain>
            <WeatherWeeklyHeader> Next Week </WeatherWeeklyHeader>
            <WeatherWeeklyBody>
                <WeatherWeeklySummary> { this.props.weeklyForecast.summary } </WeatherWeeklySummary>
                <WeeklyWeatherBar>
                    { this.createDayTiles() }
                </WeeklyWeatherBar>
            </WeatherWeeklyBody>
        </WeatherWeeklyMain>
        )
    }
};