import React from 'react'
import HeatMap from '@uiw/react-heat-map';
const data = [
    { date: '2022/01/01', count: 9 },
    { date: '2022/01/02', count: 10 },
    { date: '2022/01/03', count: 9 },
    { date: '2022/01/04', count: 18 },
    { date: '2022/01/05', count: 4 },
    { date: '2022/01/06', count: 8 },
    { date: '2022/01/07', count: 10 },
    { date: '2022/01/08', count: 10 },
    { date: '2022/01/09', count: 5 },
    { date: '2022/01/10', count: 13 },
    { date: '2022/01/11', count: 16 },
    { date: '2022/01/12', count: 9 },
    { date: '2022/01/13', count: 7 },
    { date: '2022/01/14', count: 9 },
    { date: '2022/01/15', count: 10 },
    { date: '2022/01/16', count: 9 },
    { date: '2022/01/17', count: 17 },
    { date: '2022/01/18', count: 4 },
    { date: '2022/01/19', count: 10 },
    { date: '2022/01/20', count: 7 },
    { date: '2022/01/21', count: 6 },
    { date: '2022/01/22', count: 12 },
    { date: '2022/01/23', count: 18 },
    { date: '2022/01/24', count: 3 },
    { date: '2022/01/25', count: 13 },
    { date: '2022/01/26', count: 3 },
    { date: '2022/01/27', count: 14 },
    { date: '2022/01/28', count: 7 },
    { date: '2022/01/29', count: 6 },
    { date: '2022/01/30', count: 10 },
    { date: '2022/01/31', count: 12 },
    { date: '2022/02/01', count: 17 },
    { date: '2022/02/02', count: 9 },
    { date: '2022/02/03', count: 5 },
    { date: '2022/02/04', count: 2 },
    { date: '2022/02/05', count: 1 },
    { date: '2022/02/06', count: 4 },
    { date: '2022/02/07', count: 5 },
    { date: '2022/02/08', count: 20 },
    { date: '2022/02/09', count: 18 },
    { date: '2022/02/10', count: 13 },
    { date: '2022/02/11', count: 16 },
    { date: '2022/02/12', count: 8 },
    { date: '2022/02/13', count: 2 },]

    const value = data.map((datas)=>({...datas,content:"Sample"}))

const Heatmap = () => {
  return (<>
  <div>
    <HeatMap value={value} startDate={new Date(data[0]?.date)}/>
  </div>
  </>)
}

export default Heatmap