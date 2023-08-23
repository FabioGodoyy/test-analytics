"use client"
import Image from 'next/image'
import { Analitycs } from './components/analytics'
import AnalyticsReport from './components/teste'
// import YourComponent from './components/analyticsChart'
// import { gapi } from 'gapi-script';

export default function Home() {
  // var VIEW_ID = '403732426';

  // // Query the API and print the results to the page.
  // if (typeof window !== "undefined") {
  //   gapi.client.request({
  //     path: '/v4/reports:batchGet',
  //     root: 'https://analyticsreporting.googleapis.com/',
  //     method: 'POST',
  //     body: {
  //       reportRequests: [
  //         {
  //           viewId: VIEW_ID,
  //           dateRanges: [
  //             {
  //               startDate: '7daysAgo',
  //               endDate: 'today'
  //             }
  //           ],
  //           metrics: [
  //             {
  //               expression: 'ga:sessions'
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   }).then("displayResults", console.error.bind(console));
  // }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-arround p-24">
     <h1>Hello World!</h1>
     <Analitycs />
     <AnalyticsReport />
     {/* <YourComponent /> */}
    </main>
  )
}
