import { useSelector, useDispatch } from 'react-redux';

import drawChart from './utility/chart';

function App() {
  const dispatch = useDispatch();
  const chartPrep = useSelector(state => state);

  drawChart(chartPrep.data, chartPrep.name);
  return (
    <>
      <select defaultValue='clickThruRate' onChange={(event) => { dispatch({ type: event.target.value }) }}>
        <option value="clickThruRate" >page rec clickthru rate</option>
        <option value="sales">overall sales</option>
        <option value="pageViews">page views</option>
        <option value="orders">overall orders</option>
      </select>
      <div id="chart_div"></div>
    </>
  );
}

export default App;
