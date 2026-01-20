
import { AddVehicleForm } from '@/components/AddVehicleForm';
import { Reveal } from '@/components/ui/Reveal';

export default function NewVehiclePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto py-12">
        <Reveal>
          <AddVehicleForm />
        </Reveal>
      </div>
    </div>
  );
}