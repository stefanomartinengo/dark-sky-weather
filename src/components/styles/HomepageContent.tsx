import styled, { keyframes } from 'styled-components';

//================================================================================
// HEADER
//================================================================================

export const HeaderMain = styled.div`
    width: 100%;
    height: 60px;
    background: #333333;
    color: #FFFFFF;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderElements = styled.div`
    font-size: 24px;
    font-family: Lato;
`;

//================================================================================
// MAIN FORECAST DISPLAY
//================================================================================

export const ForecastMain = styled.div`
    &:div {
        margin: 15px;
    }
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: black;
    font-size: 24px;
`;

//================================================================================
// FORECAST DETAILS
//================================================================================
export const TemperatureDetailsMain = styled.div`
    display: flex;
    flex-direction: row;
    flex: 3;
    padding:8px;
    justify-content: space-around;
    width: 65%;
    box-shadow: 1px 2px 5px gray;
    margin: 0px auto 45px auto;
    color: #333333;
    font-size: 16px;
`;
export const TemperatureDetailsElement = styled.div`
    font-size: 16px;
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const HaydayMain = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 200px;
    margin: auto;
    font-size: 16px;
    text-align: center;
`;

export const HaydayHeader = styled.div`
    width: 80%;
    padding-top: 20px;
    font-size: 24px;
    border-top: 1px solid gray;
`;

export const Hayday = styled.div`
    width: 80%;
    margin-top: 20px;
    font-size: 18px;
    padding-bottom: 25px;
    border-bottom: 1px solid gray;
    font-style: italic;
`;

//================================================================================
// WEATHER ICON
//================================================================================

const loadingKeyframes = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(54000deg);
    }
`;
// ICON CONTAINER
export const IconMain = styled.img<{ isFetching: boolean }>`
    display: flex;
    height: 100px;
    width: 100px;
    animation-name: ${props => props.isFetching ? loadingKeyframes : ''};
    animation-duration: 90s;
    margin: auto;
`;
// icon wrapper
export const Icon = styled.div`
    margin-bottom:25px;
`;

//================================================================================
// WEATHER WEEKLY FORECAST
//================================================================================

export const WeatherWeeklyMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const WeatherWeeklyBody = styled.div`
    align-items: center;
    text-align: center;
`;

export const WeatherWeeklyHeader = styled.h2`
    text-align: center;
    margin-bottom: 25px;
    font-size: 24px;
`;

export const WeatherWeeklySummary = styled.h3`
    font-style: italic;
    font-size: 16px;
`;

export const WeeklyWeatherIcon = styled.img`
    height: 50px;
    width: 50px;
`;

export const WeeklyWeatherBar = styled.div`
    display: flex;
    text-align: center;
    margin: 45px auto;
    width: 90%;
    height: 100px;
`;

//================================================================================
// WEATHER DAILY FORECAST
//================================================================================

export const DailyWeatherTile = styled.div`
&:last-child {
    border-right: 1px solid #333333;
}
    height:120px;
    width: 50px;
    display: flex;
    padding: 0px 5px;
    position: relative;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #333333;
    font-size: 20px;
`;

export const DailyWeatherTileIcon = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 30px;
`;

export const DailyWeatherTileMinMaxMain = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    height: 35px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 50px;
`;

export const MaxTempDiv = styled.div`
    flex: 1;
    font-size: 24px;
    display: flex;
    flex-direction: column;
`;

export const TempDivHeader = styled.div`
    font-size: 24px;
    /* margin-bottom: 10px; */
`;

export const TempDivSubheader = styled.div`
    font-size: 12px;
`;

export const MinTempDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const DailyWeatherTileMinMax = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 25px;
`;

export const TileMain = styled.div`
    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
`;

//================================================================================
// CUSTOM ELEMENTS
//================================================================================
// homepagediv
export const WeatherDiv = styled.div`
    font-size: 24px;
`;
// homepagesubdiv
export const WeatherSubDiv = styled.div`
    margin-top:10px;
    font-style: italic;
    font-size: 16px;
`;