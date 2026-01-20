'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react';

function Box(props: any) {
    return (
        <mesh {...props}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={props.color || "orange"} />
        </mesh>
    );
}

// Placeholder for actual models until we have GLTF assets
export function VehicleViewer({ type, color: customColor }: { type: 'car' | 'ambulance' | 'helicopter' | string, color?: string }) {
    const defaultColor = type === 'ambulance' ? '#ef4444' : type === 'helicopter' ? '#3b82f6' : '#10b981';
    const color = customColor || defaultColor;

    return (
        <div className="h-[400px] w-full bg-black/20 rounded-xl overflow-hidden glass border border-white/10">
            <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Box color={color} />
                    </Stage>
                    <OrbitControls autoRotate enableZoom={false} />
                </Suspense>
            </Canvas>
        </div>
    );
}
