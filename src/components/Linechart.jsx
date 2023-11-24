import { ResponsiveLine } from '@nivo/line';


const Linechart = () => {

    const data = [
        {
          id: 'Last Week',
          data: [
            { x: 26, y: 200 },
           
          ],
        },
        {
          id: 'This Week',
          data: [
            { x: 0, y: 5 },
           
          ],
        },
        
        
      ];

  return (
    <div className='chart' style={{ width: '500px', height: '380px' }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: 'linear', min: 0, max: 'auto' }}
      yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Month',
        legendOffset: 36,
        legendPosition: 'middle'
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Total Users',
        legendOffset: -40,
        legendPosition: 'middle'
    }}
      enableGridX={true}
      enableGridY={true}
      colors={{ scheme: 'blues' }}
      lineWidth={4}
      enablePoints={true}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
            anchor: 'top-right',
            direction: 'row',
            justify: false,
            translateX: 50,
            translateY: -30,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 120,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    />
    </div>
  );
};

export default Linechart;