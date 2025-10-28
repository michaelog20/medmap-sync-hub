import { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { InteractiveSphere } from './InteractiveSphere';

interface Feature {
  title: string;
  description: string;
  color: string;
  position: [number, number, number];
}

const features: Feature[] = [
  {
    title: "Medication Aggregation",
    description: "Capture medications any way that works for you — barcode scan, bottle photo (OCR), CSV upload of pharmacy printouts, or manual entry.",
    color: "#3b82f6",
    position: [-3, 2, 0]
  },
  {
    title: "Automatic Safety Checks",
    description: "Real-time drug–drug interaction checks, drug–condition flags, and allergy alerts with patient-friendly explanations.",
    color: "#10b981",
    position: [0, 2, 0]
  },
  {
    title: "Interoperable Export: FHIR + PDF",
    description: "Export FHIR-compliant files for EHR import or download printable PDFs with provenance metadata and version ID.",
    color: "#8b5cf6",
    position: [3, 2, 0]
  },
  {
    title: "Refill Reminders & Adherence Supports",
    description: "Set refill schedules and receive configurable reminders. Optional adherence logging captures taken/missed events.",
    color: "#f59e0b",
    position: [-3, -1, 0]
  },
  {
    title: "Versioning & Audit Trail",
    description: "Every change is recorded: who made it, when, and what changed. Version history simplifies reconciliation.",
    color: "#06b6d4",
    position: [0, -1, 0]
  },
  {
    title: "Clinician & Pharmacist Tools",
    description: "Lightweight clinician view for receiving shared lists with clear flags. CSV/FHIR export options for easy ingestion.",
    color: "#ec4899",
    position: [3, -1, 0]
  }
];

export const FeatureSpheres = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSphereClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[700px]"
      onMouseLeave={handleMouseLeave}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        {features.map((feature, index) => (
          <InteractiveSphere
            key={index}
            position={feature.position}
            color={feature.color}
            isActive={activeIndex === index}
            isDimmed={activeIndex !== null && activeIndex !== index}
            onClick={() => handleSphereClick(index)}
          />
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Feature text overlay */}
      {activeIndex !== null && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="bg-background/90 backdrop-blur-sm border border-primary/30 rounded-lg p-6 max-w-md mx-4 scroll-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {features[activeIndex].title}
            </h3>
            <p className="text-foreground/90 leading-relaxed">
              {features[activeIndex].description}
            </p>
          </div>
        </div>
      )}

      {/* Instruction text */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-muted-foreground text-sm">
          Click on any sphere to learn more • Hover away to reset
        </p>
      </div>
    </div>
  );
};
