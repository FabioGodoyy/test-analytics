// import { useEffect, useState } from 'react';
// import { gapi } from 'gapi-script';
// import { Chart } from 'react-google-charts';
// const YourComponent = () => {
//   const [visitsData, setVisitsData] = useState<any>([]);
//   const [sourcesData, setSourcesData] = useState<any>([]);
//   const [pagesData, setPagesData] = useState<any>([]);
//   const TRACKING_ID = "G-RLZM9C37KW";
//   useEffect(() => {
//     gapi.analytics.ready(function () {
//       // Autenticação e autorização
//       gapi.analytics.auth.authorize({
//         'serverAuth': {
//           'access_token': "G-RLZM9C37KW"
//         }
//       });
//       // Configurações comuns
//       const commonConfig = {
//         query: {
//           'start-date': '30daysAgo',
//           'end-date': 'yesterday'
//         },
//       };
//       // Buscar dados de visitas
//       const visitsQuery = Object.assign({}, commonConfig.query, {
//         metrics: 'ga:sessions',
//         dimensions: 'ga:date'
//       });
//       gapi.analytics.data.ga.get({
//         ...visitsQuery,
//         ids: `ga:p403732426` // Substituir pelo ID da vista do Google Analytics
//       }).then((response: any) => {
//         const data = response.rows.map((row: any) => [row[0], parseInt(row[1])]);
//         setVisitsData([['Data', 'Sessões'], ...data]);
//       });
//       // Buscar dados de fontes de tráfego
//       const sourcesQuery = Object.assign({}, commonConfig.query, {
//         metrics: 'ga:sessions',
//         dimensions: 'ga:source',
//         'max-results': 10,
//         sort: '-ga:sessions'
//       });
//       gapi.analytics.data.ga.get({
//         ...sourcesQuery,
//         ids: `ga:${TRACKING_ID}` // Substituir pelo ID da vista do Google Analytics
//       }).then((response: any) => {
//         const data = response.rows.map((row: any) => [row[0], parseInt(row[1])]);
//         setSourcesData([['Origem', 'Sessões'], ...data]);
//       });
//       // Buscar dados de páginas mais acessadas
//       const pagesQuery = Object.assign({}, commonConfig.query, {
//         metrics: 'ga:pageviews',
//         dimensions: 'ga:pagePath',
//         'max-results': 10,
//         sort: '-ga:pageviews'
//       });
//       gapi.analytics.data.ga.get({
//         ...pagesQuery,
//         ids: `ga:${TRACKING_ID}` // Substituir pelo ID da vista do Google Analytics
//       }).then((response: any) => {
//         const data = response.rows.map((row: any) => [row[0], parseInt(row[1])]);
//         setPagesData([['Página', 'Visualizações'], ...data]);
//       });
//     });
//   }, []);
//   return (
//     <>
//       <div id="visits-chart-container">
//         <Chart
//           width={'100%'}
//           chartType="LineChart"
//           loader={<div>Carregando gráfico...</div>}
//           data={visitsData}
//           options={{
//             title: 'Visitas nos últimos 30 dias',
//           }}
//         />
//       </div>
//       <div id="sources-chart-container">
//         <Chart
//           width={'100%'}
//           chartType="PieChart"
//           loader={<div>Carregando gráfico...</div>}
//           data={sourcesData}
//           options={{
//             title: 'Origens de Tráfego',
//           }}
//         />
//       </div>
//       <div id="pages-table-container">
//         <Chart
//           width={'100%'}
//           chartType="Table"
//           loader={<div>Carregando tabela...</div>}
//           data={pagesData}
//           options={{
//             title: 'Páginas Mais Acessadas',
//           }}
//         />
//       </div>
//     </>
//   );
// };
// export default YourComponent;