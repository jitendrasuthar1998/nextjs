export const dynamic = "force-static"

// data will be cached for every 10 seconds.

export const revalidate = 10

export async function GET() {
    return Response.json({time: new Date().toLocaleTimeString()});
}