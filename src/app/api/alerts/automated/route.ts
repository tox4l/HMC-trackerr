import { NextResponse } from 'next/server';
import { sendAutomatedAlerts, getAlertStatistics } from '@/lib/alertScheduler';

export const runtime = 'nodejs';

/**
 * POST /api/alerts/automated
 * Triggers automated alert sending
 * This endpoint should be called by a cron job (e.g., daily at 8 AM)
 */
export async function POST(request: Request) {
  try {
    // Optional: Add authentication/authorization here
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Send automated alerts
    const result = await sendAutomatedAlerts();
    const statistics = getAlertStatistics();

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      alerts: {
        sent: result.sent,
        failed: result.failed
      },
      statistics
    });
  } catch (error) {
    console.error('Error sending automated alerts:', error);
    return NextResponse.json(
      { error: 'Failed to send automated alerts', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/alerts/automated
 * Get alert statistics without sending
 */
export async function GET() {
  try {
    const statistics = getAlertStatistics();
    
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      statistics
    });
  } catch (error) {
    console.error('Error getting alert statistics:', error);
    return NextResponse.json(
      { error: 'Failed to get alert statistics' },
      { status: 500 }
    );
  }
}