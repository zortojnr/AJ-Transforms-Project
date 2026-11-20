interface ArchitecturalFallbackSVGProps {
  activeStageIndex: number;
}

export function ArchitecturalFallbackSVG({
  activeStageIndex,
}: ArchitecturalFallbackSVGProps) {
  // Architectural 2D schematic representing Fragmentation -> Understanding -> Alignment -> Optimisation
  const stageConfigs = [
    // 0: Fragmentation
    [
      { x: 64, y: 58, w: 86, h: 48, rot: -14, fill: '#1B2B44', stroke: '#8994A3' },
      { x: 210, y: 42, w: 62, h: 92, rot: 11, fill: '#ECE8DF', stroke: '#B69A70' },
      { x: 316, y: 92, w: 94, h: 44, rot: -8, fill: '#B69A70', stroke: '#F5F3EE' },
      { x: 96, y: 186, w: 108, h: 46, rot: 9, fill: '#182842', stroke: '#B69A70' },
      { x: 264, y: 204, w: 76, h: 66, rot: -16, fill: '#ECE8DF', stroke: '#8994A3' },
      { x: 184, y: 132, w: 72, h: 42, rot: 6, fill: '#223554', stroke: '#8994A3' },
    ],
    // 1: Understanding (Exploded Axonometric Diagnostic)
    [
      { x: 84, y: 52, w: 92, h: 36, rot: 0, fill: '#1B2B44', stroke: '#B69A70' },
      { x: 204, y: 52, w: 112, h: 36, rot: 0, fill: '#ECE8DF', stroke: '#8994A3' },
      { x: 84, y: 126, w: 140, h: 44, rot: 0, fill: '#223554', stroke: '#8994A3' },
      { x: 252, y: 126, w: 92, h: 44, rot: 0, fill: '#B69A70', stroke: '#F5F3EE' },
      { x: 112, y: 208, w: 96, h: 44, rot: 0, fill: '#ECE8DF', stroke: '#B69A70' },
      { x: 232, y: 208, w: 112, h: 44, rot: 0, fill: '#1B2B44', stroke: '#8994A3' },
    ],
    // 2: Alignment (Converged Orthogonal Grid)
    [
      { x: 96, y: 74, w: 110, h: 46, rot: 0, fill: '#1B2B44', stroke: '#B69A70' },
      { x: 214, y: 74, w: 110, h: 46, rot: 0, fill: '#ECE8DF', stroke: '#B69A70' },
      { x: 96, y: 128, w: 72, h: 72, rot: 0, fill: '#B69A70', stroke: '#F5F3EE' },
      { x: 176, y: 128, w: 148, h: 72, rot: 0, fill: '#223554', stroke: '#8994A3' },
      { x: 96, y: 208, w: 110, h: 42, rot: 0, fill: '#ECE8DF', stroke: '#8994A3' },
      { x: 214, y: 208, w: 110, h: 42, rot: 0, fill: '#1B2B44', stroke: '#B69A70' },
    ],
    // 3: Optimisation (Unified Interlocking Monolith)
    [
      { x: 108, y: 78, w: 100, h: 52, rot: 0, fill: '#1B2B44', stroke: '#B69A70' },
      { x: 210, y: 78, w: 102, h: 52, rot: 0, fill: '#ECE8DF', stroke: '#B69A70' },
      { x: 108, y: 132, w: 204, h: 36, rot: 0, fill: '#B69A70', stroke: '#F5F3EE' },
      { x: 108, y: 170, w: 130, h: 64, rot: 0, fill: '#223554', stroke: '#B69A70' },
      { x: 240, y: 170, w: 72, h: 64, rot: 0, fill: '#ECE8DF', stroke: '#B69A70' },
      { x: 108, y: 236, w: 204, h: 18, rot: 0, fill: '#182842', stroke: '#B69A70' },
    ],
  ];

  const blocks = stageConfigs[activeStageIndex] ?? stageConfigs[0];

  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-[#101B2D] select-none"
      role="img"
      aria-label={`Architectural schematic showing transformation stage ${activeStageIndex + 1} of 4`}
    >
      <svg
        viewBox="0 0 420 320"
        className="w-full h-full max-w-[460px] max-h-[360px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Architectural datum grid */}
        <g stroke="#24344D" strokeWidth="1">
          <line x1="40" y1="60" x2="380" y2="60" />
          <line x1="40" y1="160" x2="380" y2="160" />
          <line x1="40" y1="260" x2="380" y2="260" />
          <line x1="108" y1="30" x2="108" y2="290" />
          <line x1="210" y1="30" x2="210" y2="290" />
          <line x1="312" y1="30" x2="312" y2="290" />
        </g>

        {/* Cross-axis structural datum lines */}
        {activeStageIndex >= 1 && (
          <g stroke="#B69A70" strokeOpacity="0.4" strokeDasharray="3 4" strokeWidth="1">
            <line x1="210" y1="42" x2="210" y2="278" />
            <line x1="72" y1="160" x2="348" y2="160" />
          </g>
        )}

        {/* Structural Blocks */}
        {blocks.map((block, idx) => (
          <g
            key={idx}
            transform={`rotate(${block.rot} ${block.x + block.w / 2} ${block.y + block.h / 2})`}
            className="transition-all duration-500 ease-out"
          >
            <rect
              x={block.x}
              y={block.y}
              width={block.w}
              height={block.h}
              fill={block.fill}
              stroke={block.stroke}
              strokeWidth="1.25"
            />
          </g>
        ))}

        {/* Champagne Gold datum anchor nodes in Alignment/Optimisation */}
        {activeStageIndex >= 2 && (
          <g fill="#B69A70">
            <circle cx="108" cy="78" r="2.5" />
            <circle cx="312" cy="78" r="2.5" />
            <circle cx="108" cy="254" r="2.5" />
            <circle cx="312" cy="254" r="2.5" />
          </g>
        )}
      </svg>
    </div>
  );
}
