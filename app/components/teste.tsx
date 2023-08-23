import React, { useEffect, useState } from 'react';

export default function AnalyticsReport() {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const VIEW_ID = '403732426';
        const startDate = '7daysAgo';
        const endDate = 'today';
        const metrics = 'ga:sessions';

        const response = await fetch(
          `https://analyticsreporting.googleapis.com/v4/reports:batchGet`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer 354171984201-ni58p9migigh3a28vndv9g4rs0orl5po.apps.googleusercontent.com`,
            },
            body: JSON.stringify({
              reportRequests: [
                {
                  viewId: VIEW_ID,
                  dateRanges: [{ startDate, endDate }],
                  metrics: [{ expression: metrics }],
                },
              ],
            }),
          }
        );

        const data = await response.json();
        setReportData(data);
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    };

    fetchReport();
  }, []);

  return (
    <div>
      <h1>Hello Analytics Reporting</h1>
      <pre>{JSON.stringify(reportData, null, 2)}</pre>
    </div>
  );
}