import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import BrainModel from './BrainModel';

export default function Scene3D() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <BrainModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}