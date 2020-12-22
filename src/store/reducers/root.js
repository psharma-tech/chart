import chartData from './../../utility/chartData';

const filter = type => chartData.records.map(data => [data.date, data[type]]);

const reducer = (state, actions) => {
    //No Manipulation of state hence it can simply fetch data slices
    switch (actions.type) {
        case 'clickThruRate':
        case 'sales':
        case 'pageViews':
        case 'orders':
            return { name: [actions.type], data: filter(actions.type) };
        default:
            return { name: 'clickThruRate', data: filter('clickThruRate') };
    }

}

export default reducer;