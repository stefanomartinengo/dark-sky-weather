import React from 'react';
import { DailyWeatherTile, DailyWeatherTileIcon, DailyWeatherTileMinMaxMain, TileMain, MaxTempDiv, MinTempDiv, TempDivSubheader, TempDivHeader } from './styles/HomepageContent';

interface State {
}

interface Props {
    dayToLoad?: any
}

export default class DailyForecast extends React.Component<Props, {}> {
    constructor(props:any) {
        super(props);
    }
    

public render() {
    console.log(this.props, 'props')
    return (
        <React.Fragment>
            <DailyWeatherTile>
                <TileMain>
                    <DailyWeatherTileIcon src={require(`./../assets/${this.props.dayToLoad.icon}.png`)} />
                    { this.props.dayToLoad.dayOfWeek }
                </TileMain>
                <DailyWeatherTileMinMaxMain>
                    <MaxTempDiv>
                        <TempDivHeader> max </TempDivHeader>
                        <TempDivSubheader>{ this.props.dayToLoad.tempHigh }<span>&#176;</span></TempDivSubheader>
                    </MaxTempDiv>
                    <MinTempDiv>
                        <TempDivHeader> min </TempDivHeader>
                        <TempDivSubheader>{ this.props.dayToLoad.tempLow }<span>&#176;</span></TempDivSubheader> </MinTempDiv>
                </DailyWeatherTileMinMaxMain>
            </DailyWeatherTile>
        </React.Fragment>
        )
    }
};