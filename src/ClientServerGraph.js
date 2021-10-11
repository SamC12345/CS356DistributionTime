import React from 'react';
import { ResponsiveLine } from 'nivo';

const data = [
  {
    id: 'japan',
    color: 'hsl(136, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 205,
      },
      {
        x: 'helicopter',
        y: 43,
      },
      {
        x: 'boat',
        y: 145,
      },
      {
        x: 'train',
        y: 158,
      },
      {
        x: 'subway',
        y: 233,
      },
      {
        x: 'bus',
        y: 74,
      },
      {
        x: 'car',
        y: 122,
      },
      {
        x: 'moto',
        y: 49,
      },
      {
        x: 'bicycle',
        y: 184,
      },
      {
        x: 'horse',
        y: 78,
      },
      {
        x: 'skateboard',
        y: 18,
      },
      {
        x: 'others',
        y: 57,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(150, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 78,
      },
      {
        x: 'helicopter',
        y: 9,
      },
      {
        x: 'boat',
        y: 144,
      },
      {
        x: 'train',
        y: 47,
      },
      {
        x: 'subway',
        y: 293,
      },
      {
        x: 'bus',
        y: 163,
      },
      {
        x: 'car',
        y: 84,
      },
      {
        x: 'moto',
        y: 41,
      },
      {
        x: 'bicycle',
        y: 88,
      },
      {
        x: 'horse',
        y: 214,
      },
      {
        x: 'skateboard',
        y: 188,
      },
      {
        x: 'others',
        y: 41,
      },
    ],
  },
];

const numClients = [1, 2, 4, 8, 16, 32, 64, 128, 256];
const fileSize = 2000;
const uploadRateServer = 10;
const uploadRateClient = 1;
const downloadRateClient = 2;

export const ClientServerGraph = () => {
  const clientServerData = {
    id: 'Client Server Data',
    color: 'hsl(136, 70%, 50%)',
    data: numClients.map(numClients => {
      return {
        x: numClients,
        y: Math.max(
          (numClients * fileSize) / uploadRateServer,
          fileSize / downloadRateClient
        ),
      };
    }),
  };

  const peerToPeerData = {
    id: 'Peer To Peer Data',
    color: 'hsl(150, 70%, 50%)',
    data: numClients.map(numClients => {
      return {
        x: numClients,
        y: Math.max(
          fileSize / uploadRateServer,
          fileSize / downloadRateClient,
          (numClients * fileSize) /
            (numClients * uploadRateClient + uploadRateServer)
        ),
      };
    }),
  };

  return (
    <ResponsiveLine
      data={[clientServerData, peerToPeerData]}
      margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
      xScale={{ type: 'linear' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Number of Clients',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Minimum Distribution Time',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={20}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
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
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
