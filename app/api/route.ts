import { NextResponse } from 'next/server'
import {google} from "googleapis"
 
export async function GET() {
 const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+lxQewBJCxUg2\njddidptdmzblg+fULG2WdbdErbQ0iJSlMgf1d36H0dHsTyS1WVcql9BDSYvq+I5I\n3hH35d85P2ibWAbJkIZSltREzkIx7wtmyZyV/bOwu/3e1mPb9dShZnRG/rNZA+Z5\n7/st8koj1N6juq8tD5OXYw3irbU+BFcaohqrObRoVRhb1OyzJIqp+JZW53as7J/U\nH8wo9hlS4tlj/ehqEiNNACDnat3RLM83X7y7rvoYjdeWF90o/48V+svc7i/UASHB\n7oKscX0/D8XTXlPjBWTVfZ4kwL4JMgHZM2sI9kqSZQQi4pMvUIDxaWhGbX1U7Dvo\neu3vcX7xAgMBAAECggEAAxaWCc3N8Drk13F1FH4BFFWSTjgwTYucv9UGVEXGR2Na\nUBvNEjap97RvBNxM3gsce9NpxyMOBGsJWFNZbZ1kSaWKvU/v6DfJONWDiydNS//6\nqofIyWbUEMUgw3eHttg3QbzUC12YvoJKdLClSjcWxOJLWPbTyfkztj6fSnoUO/Ts\nLDx1yxpzXAWojKonUzKBfdVQtxi7yajbvqrxYS6HuXadRecxC23ziwJGZ1GLk5h2\noBm9PqxgIZn/0tTw1km/2ysGSOKOOSMqVGlmd6iWMzUpYa3gJs2GrgjHl2eMVfpG\n7hFrNb9kFB6fwDHXcLkJylo6HGTXuO5C/GOWy3+4gwKBgQDh87lfyaKINwIza76Q\ngUvL8wj50DWPK6IZCqXVQhKZBmX6i031sQkCP7e6G6+FrpGjPF9/0o7AXhFK9xQy\n2KtX+bxhOMlyiqYuHfwriSZMlLKEnspeTTFbpZdCnanpBkhFWbmSo0Pv1KTftE/c\nRZznDmzZdnLf2yjaByPo0XmjOwKBgQDX73/ooosX922VkJvY1HAkwsK1eyLJrCY3\nfFKs+9CQtdt8R1jqvP9AeDUIni6IVScK/XG7xPh+9Kx0UE9SIUg2i3U4S+GXogto\nAeQ/6XmulqWj+r69EBPE1Ddykw6ywYEDaP1RHcyAOaWEnHmPFhS7dNAfoeTbNcAq\nS1djj6nrwwKBgDXOCdiLdU6mermv8IMMpvX7+6kxMW/UXhdEd9TelPsnkOUmgvv8\nmj6U2bVRnmxg84FBgSQ5CZE5VTjauU6aVcLvTzJ/iUjjR0s4DLJ5SEt4JUJ7ZYkr\nLJO8TNaqIKnCuzb4dL48bpMPuesjTtkPIpvKzZTDJfu0fnfct2pbZ3G9AoGBAL5x\ndBXwhUw15GgsicbKVb2WJ7N3Tk8fjPUSqLf3vxJh0ZniMwGUfmqVmfBn0hJbR3vh\n2xUHu0H8+Lv8uHhu8glpJZDpG6VoPTcVtADKIY9hPeVJmD+WlljZ8a0TFbuB/g7L\n4d5QsbPFI725Y1xW1SIe/A9p8TWESl8C46fjZLGRAoGAWsFAglG47GZImY5J2Ggz\nnd1V75K4cTMLs8DHYsVWkttoOQjkVzdi35+ahRHdrnwSDWLlby6K07ypUM7Jp0bv\n3u/epauYhuZuA5DReF10yDf6dDfqnmtOTq0Fwj4uBMTcDJbBiBHaP8RuFibDRGtt\nsvj2d6k1r/ykTwiPRnKUWuA=\n-----END PRIVATE KEY-----\n"
 const CLIENT_EMAIL = "google-analytics@analytics-01-396813.iam.gserviceaccount.com"
 const scopes = "https://www.googleapis.com/auth/analytics.readonly"
 const VIEW_ID = "403732426"

 const jwt = new google.auth.JWT(
    CLIENT_EMAIL,
    "",
    PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes
 )

 try {
    await jwt.authorize();

    const response = await google.analytics("v3").data.ga.get({
        auth: jwt,
        ids: "ga:" + VIEW_ID,
        "start-date": "30daysAgo",
        "end-date": "today",
        metrics: "ga:pageviews",
    });
    console.log(response.data);
    return NextResponse.json({ response })
 } catch (error) {
    console.log(error)
    return NextResponse.json({error})
 }
 
 
}