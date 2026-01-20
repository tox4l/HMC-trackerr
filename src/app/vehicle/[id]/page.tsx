import { notFound } from 'next/navigation';
import { getVehicles } from '@/lib/db';
import { VehicleDetailsClient } from '@/components/VehicleDetailsClient';


export default async function VehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const vehicles = await getVehicles();
  const vehicle = vehicles.find(v => v.id === resolvedParams.id);

  if (!vehicle) {
    notFound();
  }

  return <VehicleDetailsClient vehicle={vehicle} />;
}
