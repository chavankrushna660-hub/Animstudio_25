// @ts-nocheck
import React from 'react';
import { 
  Pointer, 
  Paintbrush, 
  Trash2, 
  Scissors, 
  PenTool, 
  MapPin, 
  CircleDot, 
  GitFork, 
  Layers, 
  Maximize2, 
  Minimize2, 
  Crop, 
  Compass, 
  Pipette, 
  Palette, 
  Zap, 
  GitCommit,
  LayoutGrid, 
  Sparkles, 
  Box, 
  ZoomIn, 
  Share2, 
  Sliders, 
  Activity, 
  Move, 
  Spline, 
  Flame,
  MousePointer2,
  Target,
  Wand2,
  PenSquare,
  Crosshair,
  Route,
  Grid,
  Lock,
  Anchor,
  Droplets,
  ArrowRightLeft,
  Workflow,
  Network,
  Disc,
  SlidersHorizontal,
  Copy,
  Ruler,
  Maximize,
  Scan,
  Grid3x3
} from 'lucide-react';

interface ToolbarProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function Toolbar({
  activeTool,
  setActiveTool,
  collapsed,
  setCollapsed,
}: ToolbarProps) {
  const tools = [
    { id: 'SEL', label: 'Select (SEL)', icon: MousePointer2, desc: 'Select / transform drawings' },
    { id: 'PEN', label: 'Vector Pen (PEN)', icon: PenTool, desc: 'Draw precise bezier curve paths' },
    { id: 'BRS', name: 'Brush', label: 'Brush Tool (BRS)', icon: Paintbrush },
    { id: 'ERS', name: 'Eraser', label: 'Eraser Tool (ERS)', icon: Trash2 },
    { id: 'PVT', name: 'Pivot', label: 'Pivot Tool (PVT)', icon: Target },
    { id: "KNF", name: "Knife", label: "Knife Tool (KNF)", icon: Scissors },
    { id: "PIN", name: "Puppet Warp", label: "Real Puppet Warp (PIN)", icon: MapPin, desc: 'Real MLS Puppet Warp for PNG images and Vector drawings. Place and drag pins to deform organically!' },
    { id: 'VST', name: 'Vector Smart Transform', label: 'VST (Vector Smart Transform)', icon: Maximize, desc: 'Draw area around any PNG or drawing part. Transforms ONLY that isolated part while keeping all other pixels 100% frozen as-is!' },
    { id: 'SCT', name: 'Smart Correct Tool', label: 'Smart Correct Tool (SCT)', icon: Wand2, desc: 'Correct contours & shapes: Expand, Decrease/Tighten, or Move local parts with capture point' },
    { id: 'VLB', name: 'Vector Line Brush', label: 'Vector Line Brush (VLB)', icon: Ruler, desc: 'Strictly draws clean, fixed straight vector lines in real-time with zero jitter or broken lines' },
    { id: 'FIL', name: 'Fill', label: 'Fill Bucket (FIL)', icon: Palette },
    { id: 'LSO', name: 'Lasso Selection', label: 'Lasso Area & Fill (LSO)', icon: Spline, desc: 'Draw a lasso region to transform specific sub-areas or color fill them' },
    { id: 'FSL', name: 'Free Selection', label: 'Adjustable Selection (FSL)', icon: Scan, desc: 'Draw or edit a selection area. Drag, double-click, or insert vertices to customize the region.' },
    { id: 'VEX', name: 'Vector Part Isolator', label: 'Vector Part Isolator (VEX)', icon: Scissors, desc: 'Draw vector selection around PNG or drawing part to isolate, extract as layer, and auto-infill empty background' },
    { id: 'PSE', name: 'Pose Studio', label: 'Mouth & Eye Pose Studio (PSE)', icon: Sparkles, desc: 'Deep mouth opening, eye blinking, pupil movement and 3D posing for PNG characters and drawings' },
    { id: '360', name: '360° Studio', label: '360° Pseudo-3D (360)', icon: Compass, desc: 'Create and animate 360-degree pseudo-3D objects' },
    { id: 'WSC', name: '3D Wire Sculpt', label: '3D Wire Sculpt (WSC)', icon: Box, desc: 'Convert 2D stroke to editable 3D wireframe mesh with vertices, extrude, bevel, inner space depth and saved selections.' },
    { id: 'SHP', name: 'Shape', label: 'Shapes Tool (SHP)', icon: LayoutGrid },
    { id: 'MSH', name: 'Mesh Wrap', label: 'Geometry Deform (MSH)', icon: Crop, desc: 'Deform drawing geometry by dragging individual vertices deeply' },
    { id: 'SPL', name: 'Spline Reshape', label: 'Spline Reshape (SPL)', icon: Share2, desc: 'Fit stroke to a cubic bezier path and deform or stretch smoothly' },
    { id: 'SWP', name: 'Smart Warp', label: 'Smart Pin Warp (SWP)', icon: Anchor, desc: 'Add large clickable pins to easily deform drawing geometry' },
    { id: 'CAG', name: 'Cage Deform', label: 'Cage Deform (CAG)', icon: Box, desc: 'Deform the drawing boundary cage to warp the shape smoothly' },
    { id: 'LQB', name: 'Liquify Brush', label: 'Liquify Brush (LQB)', icon: Droplets, desc: 'Push, pinch, bulge, or twist drawing geometry with a brush' },
    { id: 'SPD', name: 'Stroke Touch Pull', label: 'Direct Stroke Pull (SPD)', icon: Flame, desc: 'Touch and drag drawing strokes directly to pull and deform locally with auto-smoothing' },
    { id: 'SPT', name: 'Stroke Direct Move', label: 'Direct Stroke Position Move (SPT)', icon: ArrowRightLeft, desc: 'Touch and drag any stroke directly to shift strictly its position without bending, blending or warping shape' },
    { id: 'S3D', name: '2D-to-3D Rule Engine', label: '2D-to-3D Rule Engine (S3D)', icon: Box, desc: 'Strict rule-based 2D-to-3D Stroke Memory Engine: Reads stroke geometry, remembers original FirstShape, rotates in 360° real-time with occlusion & perspective projection.' },
    { id: 'CON', name: 'Constraint', label: 'Constraints (CON)', icon: Lock, desc: 'Lock joint or layer constraints' },
    { id: 'MOT', name: 'Motion Path', label: 'Motion Path (MOT)', icon: Route, desc: 'Interactive motion path curves' },
    { id: 'CPT', name: 'Curve Path', label: 'Curve Path Tool (CPT)', icon: GitFork, desc: 'Warp and blend drawing along interactive horizontal and vertical spine lines' },
    { id: 'VDF', name: 'Vector Curve Deformer', label: 'Vector Deformer (VDF)', icon: Workflow, desc: 'Draw custom vector points by hand across drawing and drag points to deform and blend' },
    { id: 'VPR', name: 'Vector Pen Reshape', label: 'Vector Pen Reshape (VPR)', icon: PenSquare, desc: 'Place custom vector pen points on drawing strokes to capture local stroke areas and bend straight lines into circles or curves' },
    { id: 'PBM', name: 'Points Movement', label: 'Points Movement (PBM)', icon: Network, desc: 'Points-Based Movement (PBM): Place custom joint points on drawing and drag to move rigid sections strictly as-is without distortion' },
    { id: 'RPD', name: 'Rigid Point Deform', label: 'Rigid Point Deform (RPD)', icon: Disc, desc: 'Place custom points on drawing and drag to move rigid sections in a straight line without stretching or curving' },
    { id: 'CRV', name: 'Curve Line Deformer', label: 'Curve Line Deformer (CRV)', icon: Activity, desc: 'Flexible curve line overlay to bend and attach to specific drawing parts like tail, arm, leg seamlessly' },
    { id: 'EYE', name: 'Eyedropper', label: 'Eyedropper (EYE)', icon: Pipette },
    { id: 'ZOM', name: 'Zoom & Pan', label: 'Zoom & Pan (ZOM)', icon: ZoomIn, desc: 'Pinch with two fingers to zoom, or drag with single touch/pointer to pan smoothly in any direction.' },
    { id: 'CONTOUR_EDITOR', shortId: 'CNE', name: 'Contour Editor', label: 'Contour Editor (Bezier & Points)', icon: Crosshair, desc: 'Directly select anchor points, edit Bezier handles and directional control arms' },
    { id: 'CUTTER', shortId: 'CTR', name: 'Cutter', label: 'Cutter Tool (Line Trim)', icon: Scissors, desc: 'Slice and trim intersecting stroke ends without damaging artwork or fills' },
    { id: 'MASTER_CONTROLLER', shortId: 'MCT', name: 'Master Controller', label: 'Master Controllers (Widgets)', icon: SlidersHorizontal, desc: 'On-screen 2D Joysticks and Sliders to drive multi-layer puppet rigs' },
    { id: 'PEG_HIERARCHY', shortId: 'PEG', name: 'Peg Hierarchy', label: 'Peg Hierarchy & Rigging', icon: GitFork, desc: 'Parent-child peg linking and pivot offsets for body mechanics' },
    { id: 'BONE_CURVE', shortId: 'BNC', name: 'Bone Deformer', label: 'Bone & Curve Deformer', icon: GitCommit, desc: 'Organic bending and stretching along spline curves for limbs' },
    { id: 'PTS', shortId: 'PTS', name: 'Point Shape Sculptor', label: 'Point Shape Sculptor (PTS)', icon: CircleDot, desc: 'Place points to draw custom shapes, drag points to edit/reshape, and merge vertices.' },
    { id: 'SCB', shortId: 'SCB', name: 'Sculpt & Correct Brush', label: 'Sculpt & Correct Brush (SCB)', icon: Sparkles, desc: 'Drag brush over any drawing to expand, collapse, smooth, push, or auto-correct strokes and contours.' },
    { id: 'LIN', shortId: 'LIN', name: 'Line Shape Edit', label: 'Line Shape Edit (LIN)', icon: Move, desc: 'Direct line stroke editor: Automatically fits exactly onto selected drawing stroke. Drag the line anywhere to reshape circles, curves and drawings organically.' },
    { id: 'SWAP_STUDIO', shortId: 'SWP', name: 'Swap Studio', label: 'Swap Studio (SWP)', icon: Copy, desc: 'Swap Studio (SWP): Add selected canvas drawings as swapable parts with locked position, rotate, visibility toggles & deletion' },
    { id: 'TWT', shortId: 'TWT', name: 'Twitch Tool', label: 'Twitch Tool (TWT)', icon: Zap, desc: 'Twitch Tool: Point-based shape & stroke decomposer. Click/place point to hide/show strokes anytime, deep scan compound drawings, direct hand edit, curve/mesh deform & draggable HUD transform.' },
    { id: 'MWP', shortId: 'MWP', name: 'Mesh Puppet Wrap', label: 'Mesh Wrap Puppet Wrap (MWP)', icon: Grid3x3, desc: 'Place custom mesh wrap points on stroke or PNG to extrude isolated parts with size capture or transform bounded regions strictly!' },
  ];

  return (
    <div
      className={`bg-neutral-900/95 backdrop-blur border-r-2 border-neutral-800 flex flex-col h-full transition-all duration-200 shrink-0 select-none ${
        collapsed ? 'w-20' : 'w-60'
      }`}
    >
      {/* Brand / Collapse Header */}
      <div className="h-14 border-b-2 border-neutral-800 flex items-center justify-between px-3 shrink-0">
        {!collapsed && (
          <span className="text-xs font-black uppercase tracking-wider text-amber-400">
            Toolbox ({tools.length})
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-xl bg-neutral-800 hover:bg-amber-500 text-amber-400 hover:text-neutral-950 transition-all ml-auto cursor-pointer border-2 border-neutral-700 hover:border-amber-400 shadow"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <Maximize2 className="w-5 h-5 stroke-[2.8]" /> : <Minimize2 className="w-5 h-5 stroke-[2.8]" />}
        </button>
      </div>

      {/* Tools List - flex flex-col gap-3 with distinct rounded cards so tools NEVER stick together */}
      <div className="flex-1 overflow-y-auto p-2.5 flex flex-col gap-3 scrollbar-thin select-none items-center">
        {tools.map((t, idx) => {
          const isActive = activeTool === t.id;
          const Icon = t.icon;
          const isGroupDivider = [6, 14, 26, 36].includes(idx);
          return (
            <React.Fragment key={t.id}>
              {isGroupDivider && (
                <div className={`shrink-0 my-0.5 rounded-full bg-neutral-700/60 ${collapsed ? 'w-8 h-[2px]' : 'w-full h-[1px]'}`} />
              )}
              <button
                id={`tool-btn-${t.id}`}
                onClick={() => setActiveTool(t.id)}
                className={`relative group cursor-pointer border-2 shrink-0 transition-all ${
                  collapsed
                    ? 'w-12 h-12 rounded-2xl flex items-center justify-center p-0'
                    : 'w-full flex items-center gap-3 p-3 rounded-2xl text-left'
                } ${
                  isActive
                    ? 'bg-amber-500/30 border-amber-400 text-amber-300 shadow-[0_0_18px_rgba(245,158,11,0.4)] scale-105 z-10'
                    : 'bg-neutral-800/90 border-neutral-700/80 hover:border-neutral-500 text-neutral-300 hover:text-white hover:bg-neutral-750 shadow-md shadow-black/40'
                }`}
                title={t.label}
              >
                <div className={`shrink-0 flex items-center justify-center ${isActive ? 'scale-110' : ''} transition-transform`}>
                  <Icon className={`w-5.5 h-5.5 stroke-[2.4] ${isActive ? 'text-amber-400' : 'text-neutral-300 group-hover:text-amber-300'}`} />
                </div>
                {!collapsed && (
                  <div className="overflow-hidden truncate flex-1 min-w-0">
                    <span className="text-xs uppercase tracking-wider block font-black leading-tight text-amber-400">
                      {(t as any).shortId || t.id}
                    </span>
                    <span className="text-xs text-neutral-100 font-bold block leading-snug truncate group-hover:text-white transition-colors mt-0.5">
                      {t.name || t.label.split('(')[0].trim()}
                    </span>
                  </div>
                )}

                {/* Collapsed Tooltip Overlay */}
                {collapsed && (
                  <div className="absolute left-16 bg-neutral-950 border-2 border-neutral-700 text-white text-xs font-bold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-2xl shadow-black/80">
                    <div className="text-amber-400 font-black text-xs">{t.label}</div>
                    <div className="text-neutral-300 text-[11px] font-medium mt-0.5">{t.desc || (t as any).name || t.label}</div>
                  </div>
                )}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
