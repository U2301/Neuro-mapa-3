import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network/standalone';
import { DataSet } from 'vis-data';
import { NeuroNode } from '../types';
import { neuroNodes, neuroEdges } from '../data/neuroData';
import { Crosshair, Plus, Minus, Brain, Link as LinkIcon, Hand, Pin, Network as NetworkIcon, Sparkles, Activity } from 'lucide-react';

interface GraphViewProps {
  onSelectNodeInGlobal?: (nodeId: number) => void;
}

export const GraphView: React.FC<GraphViewProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkInstanceRef = useRef<any>(null);
  const nodesDataSetRef = useRef<any>(null);
  const edgesDataSetRef = useRef<any>(null);

  const [selectedNode, setSelectedNode] = useState<NeuroNode>(() => {
    return neuroNodes.find(n => n.id === 1) || neuroNodes[0];
  });
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [nodeSearchTerm, setNodeSearchTerm] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    const initNetwork = () => {
      if (!containerRef.current) return;

      try {
        const formattedNodes = neuroNodes.map(node => {
          let bgColor = "#fdfbf7";
          let borderColor = node.colorGroup || "#2b553c";
          let fontColor = "#231f1c";

          if (node.id === 1) {
            bgColor = "#2b553c";
            borderColor = "#1b3a28";
            fontColor = "#ffffff";
          } else if (node.group === "snc") {
            bgColor = "#edf5f0";
            borderColor = "#2b553c";
            fontColor = "#162e21";
          } else if (node.group === "snp" || node.group === "autonomo") {
            bgColor = "#f0f6f9";
            borderColor = "#205b76";
            fontColor = "#0c3b52";
          } else if (node.group === "pares") {
            bgColor = "#faf3e6";
            borderColor = "#8c5e3c";
            fontColor = "#451a03";
          } else if (node.group === "tallo") {
            bgColor = "#fdf7ea";
            borderColor = "#704812";
            fontColor = "#451a03";
          } else if (node.group === "prosencefalo") {
            bgColor = "#fdf5ee";
            borderColor = "#944920";
            fontColor = "#522510";
          } else if (node.group === "medula") {
            bgColor = "#f4f1ea";
            borderColor = "#5a432d";
            fontColor = "#292420";
          }

          return {
            id: node.id,
            label: node.label,
            title: `${node.label} (${node.period})`,
            category: node.category,
            group: node.group,
            period: node.period,
            desc: node.desc,
            exam: node.exam,
            color: {
              background: bgColor,
              border: borderColor,
              highlight: {
                background: "#ffb692",
                border: "#944920"
              },
              hover: {
                background: "#faede6",
                border: "#944920"
              }
            },
            borderWidth: 2,
            font: {
              face: "Newsreader, serif",
              size: node.id === 1 ? 16 : 14,
              color: fontColor,
              strokeWidth: node.id === 1 ? 0 : 0.5,
              strokeColor: "#ffffff"
            },
            shape: "box",
            margin: { top: 8, right: 10, bottom: 8, left: 10 },
            shapeProperties: {
              borderRadius: 6
            },
            shadow: {
              enabled: true,
              color: "rgba(92, 61, 40, 0.12)",
              size: 7,
              x: 2,
              y: 3
            }
          };
        });

        const formattedEdges = neuroEdges.map((edge, idx) => ({
          id: idx + 1,
          from: edge.from,
          to: edge.to,
          label: edge.label,
          font: {
            face: "Plus Jakarta Sans, sans-serif",
            size: 10,
            color: "#787169",
            strokeWidth: 2,
            strokeColor: "#fbf8f3",
            align: "middle"
          },
          arrows: edge.arrows || "to",
          color: {
            color: "#c1c8c0",
            highlight: "#944920",
            hover: "#2b553c"
          },
          width: 1.5,
          smooth: {
            type: "cubicBezier",
            roundness: 0.25
          }
        }));

        const nodesDS = new DataSet(formattedNodes);
        const edgesDS = new DataSet(formattedEdges);

        nodesDataSetRef.current = nodesDS;
        edgesDataSetRef.current = edgesDS;

        const data: any = {
          nodes: nodesDS,
          edges: edgesDS
        };

        const options: any = {
          physics: {
            stabilization: {
              iterations: 150
            },
            barnesHut: {
              gravitationalConstant: -4200,
              springConstant: 0.035,
              springLength: 130,
              damping: 0.09
            }
          },
          interaction: {
            hover: true,
            tooltipDelay: 150,
            zoomView: true,
            dragView: true
          }
        };

        if (!isMounted || !containerRef.current) return;
        const network = new Network(containerRef.current, data, options);
        networkInstanceRef.current = network;

        network.on("selectNode", (params: any) => {
          if (params.nodes && params.nodes.length > 0) {
            const clickedId = params.nodes[0];
            const found = neuroNodes.find(n => n.id === clickedId);
            if (found) {
              setSelectedNode(found);
            }
          }
        });

        setTimeout(() => {
          if (network && isMounted) {
            network.selectNodes([1]);
            network.focus(1, {
              scale: 0.95,
              animation: { duration: 600, easingFunction: "easeInOutQuad" }
            });
          }
        }, 300);
      } catch (err) {
        console.error("Error setting up Vis Network:", err);
      }
    };

    initNetwork();

    return () => {
      isMounted = false;
      if (networkInstanceRef.current) {
        networkInstanceRef.current.destroy();
        networkInstanceRef.current = null;
      }
    };
  }, []);

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
    const nodesDS = nodesDataSetRef.current;
    const network = networkInstanceRef.current;
    if (!nodesDS || !network) return;

    if (cat === 'all') {
      neuroNodes.forEach(n => {
        nodesDS.update({ id: n.id, hidden: false });
      });
    } else {
      neuroNodes.forEach(n => {
        const match = n.category === cat;
        nodesDS.update({ id: n.id, hidden: !match });
      });
    }
    network.fit({ animation: { duration: 500, easingFunction: 'easeInOutQuad' } });
  };

  const handleSearchNode = (term: string) => {
    setNodeSearchTerm(term);
    if (!term.trim() || !networkInstanceRef.current) return;
    const clean = term.toLowerCase().trim();
    const match = neuroNodes.find(n => n.label.toLowerCase().includes(clean) || n.period.toLowerCase().includes(clean));
    if (match) {
      setSelectedNode(match);
      networkInstanceRef.current.selectNodes([match.id]);
      networkInstanceRef.current.focus(match.id, {
        scale: 1.2,
        animation: { duration: 500, easingFunction: 'easeInOutQuad' }
      });
    }
  };

  const handleResetView = () => {
    if (networkInstanceRef.current) {
      networkInstanceRef.current.fit({ animation: { duration: 500, easingFunction: "easeInOutQuad" } });
    }
  };

  const handleZoom = (factor: number) => {
    if (networkInstanceRef.current) {
      const currentScale = networkInstanceRef.current.getScale();
      networkInstanceRef.current.moveTo({
        scale: currentScale * factor,
        animation: { duration: 250 }
      });
    }
  };

  const selectNodeById = (id: number) => {
    const found = neuroNodes.find(n => n.id === id);
    if (found) {
      setSelectedNode(found);
      if (networkInstanceRef.current) {
        networkInstanceRef.current.selectNodes([id]);
        networkInstanceRef.current.focus(id, {
          scale: 1.15,
          animation: { duration: 500, easingFunction: "easeInOutQuad" }
        });
      }
    }
  };

  // Connected nodes calculation safely
  const connectedEdges = selectedNode ? neuroEdges.filter(e => e.from === selectedNode.id || e.to === selectedNode.id) : [];
  const connectedNodeIds = Array.from(new Set(
    connectedEdges.map(e => (selectedNode && e.from === selectedNode.id ? e.to : e.from))
  ));
  const connectedNodes = connectedNodeIds
    .map(id => neuroNodes.find(n => n.id === id))
    .filter(Boolean) as NeuroNode[];

  // Icon for category
  const renderCategoryIcon = () => {
    if (!selectedNode) return <Brain className="w-5 h-5 text-[#2b553c]" />;
    if (selectedNode.group === 'pares') {
      return <NetworkIcon className="w-5 h-5 text-[#8c5e3c]" />;
    } else if (selectedNode.group === 'snp' || selectedNode.group === 'autonomo') {
      return <Activity className="w-5 h-5 text-[#205b76]" />;
    } else if (selectedNode.group === 'prosencefalo') {
      return <Sparkles className="w-5 h-5 text-[#944920]" />;
    }
    return <Brain className="w-5 h-5 text-[#2b553c]" />;
  };

  return (
    <section id="view-graph" className="block">
      {/* Subheader */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-[#fbf8f5] p-3.5 rounded-xl border border-[#d4cbc2]/60">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#292420]">
            Mapa Conceptual Interactivo: Sistema Nervioso
          </h2>
          <p className="text-xs text-[#49423c] mt-0.5">
            Explora las ramas del SNP y SNC, los 12 pares craneales, tallo cerebral y áreas corticales.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <button 
            onClick={handleResetView}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#f5efe9] border border-[#d4cbc2] text-[#231f1c] rounded-lg transition cursor-pointer"
          >
            <Crosshair className="w-3.5 h-3.5 text-[#2b553c]" />
            <span>Centrar</span>
          </button>
          <button 
            onClick={() => handleZoom(1.2)}
            className="px-2.5 py-1.5 bg-white hover:bg-[#f5efe9] border border-[#d4cbc2] text-[#231f1c] rounded-lg transition cursor-pointer"
            title="Acercar"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => handleZoom(0.8)}
            className="px-2.5 py-1.5 bg-white hover:bg-[#f5efe9] border border-[#d4cbc2] text-[#231f1c] rounded-lg transition cursor-pointer"
            title="Alejar"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid: Graph Canvas + Detail Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Network Canvas */}
        <div className="lg:col-span-8 bg-[#fbf8f3] rounded-2xl border-2 border-[#e7ded3] p-2 relative shadow-parchment overflow-hidden flex flex-col">
          {/* Category filter bar */}
          <div className="p-2 border-b border-[#d4cbc2]/40 flex flex-wrap items-center justify-between gap-2 z-10 bg-[#fbf8f3]/95 backdrop-blur-xs">
            <div className="flex items-center gap-1.5 flex-wrap text-xs">
              <span className="text-[#787169] text-[11px] font-semibold uppercase tracking-wider mr-1">Filtrar:</span>
              <button 
                onClick={() => handleFilter('all')}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${activeFilter === 'all' ? 'bg-[#2b553c] text-white' : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'}`}
              >
                Todos ({neuroNodes.length})
              </button>
              <button 
                onClick={() => handleFilter('Sistema Nervioso Periférico')}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${activeFilter === 'Sistema Nervioso Periférico' ? 'bg-[#2b553c] text-white' : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'}`}
              >
                SNP (Autónomo/Somático)
              </button>
              <button 
                onClick={() => handleFilter('Pares Craneales')}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${activeFilter === 'Pares Craneales' ? 'bg-[#2b553c] text-white' : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'}`}
              >
                12 Pares Craneales
              </button>
              <button 
                onClick={() => handleFilter('Sistema Nervioso Central')}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${activeFilter === 'Sistema Nervioso Central' ? 'bg-[#2b553c] text-white' : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'}`}
              >
                SNC
              </button>
              <button 
                onClick={() => handleFilter('Tallo Cerebral y Diencéfalo')}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${activeFilter === 'Tallo Cerebral y Diencéfalo' ? 'bg-[#2b553c] text-white' : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'}`}
              >
                Tallo y Diencéfalo
              </button>
              <button 
                onClick={() => handleFilter('Prosencéfalo y Corteza')}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${activeFilter === 'Prosencéfalo y Corteza' ? 'bg-[#2b553c] text-white' : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'}`}
              >
                Prosencéfalo & Corteza
              </button>
              <button 
                onClick={() => handleFilter('Médula Espinal')}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${activeFilter === 'Médula Espinal' ? 'bg-[#2b553c] text-white' : 'bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#49423c]'}`}
              >
                Médula
              </button>
            </div>
            
            {/* Quick node search */}
            <div className="relative">
              <input 
                type="text" 
                value={nodeSearchTerm}
                onChange={(e) => handleSearchNode(e.target.value)}
                placeholder="Buscar nodo..." 
                className="w-36 sm:w-44 text-xs py-1 px-2.5 bg-white border border-[#d4cbc2] rounded-md focus:ring-1 focus:ring-[#2b553c] focus:outline-none"
              />
            </div>
          </div>

          {/* Network Canvas */}
          <div ref={containerRef} id="network-container" className="bg-notebook relative rounded-xl border border-[#efe6db] cursor-grab active:cursor-grabbing min-h-[500px]" />

          {/* Bottom botanical legend */}
          <div className="mt-2.5 pt-2 border-t border-[#e8dfd4] px-3 py-1 flex flex-wrap items-center justify-between gap-3 text-xs text-[#49423c] font-serif">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#2b553c] inline-block shadow-xs"></span>
                <span>SNC (Verde)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#205b76] inline-block shadow-xs"></span>
                <span>SNP (Azul)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#8c5e3c] inline-block shadow-xs"></span>
                <span>Pares Craneales & Tallo (Ámbar)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#944920] inline-block shadow-xs"></span>
                <span>Corteza & Límbico (Terracota)</span>
              </div>
            </div>
            <div className="text-[11px] text-[#787169] italic flex items-center gap-1">
              <Hand className="w-3 h-3" />
              <span>Arrastra para mover • Rueda para zoom</span>
            </div>
          </div>
        </div>

        {/* Right Detail Panel */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <div className="bg-white rounded-xl border border-[#d4cbc2] p-5 shadow-xs transition-all duration-300">
            {selectedNode ? (
              <div>
                <div className="flex items-start justify-between gap-2 border-b border-[#d4cbc2]/40 pb-3">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-[#2b553c]/10 text-[#2b553c]">
                      {selectedNode.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#292420] mt-1">
                      {selectedNode.label}
                    </h3>
                    <p className="text-xs text-[#787169] font-medium">
                      {selectedNode.period}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#f5efe9] flex items-center justify-center border border-[#d4cbc2]/60 flex-shrink-0">
                    {renderCategoryIcon()}
                  </div>
                </div>

                {/* Theoretical contribution */}
                <div className="py-3">
                  <h4 className="text-xs font-bold text-[#787169] uppercase tracking-wider mb-1">Descripción y Funciones:</h4>
                  <p className="text-xs sm:text-sm text-[#231f1c] leading-relaxed">
                    {selectedNode.desc}
                  </p>
                </div>

                {/* Exam critical note */}
                <div className="mt-2 p-3 bg-[#fef7e6] border border-amber-300/80 rounded-lg">
                  <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs mb-1">
                    <Pin className="w-3.5 h-3.5 text-amber-700" />
                    <span>Punto clave de examen:</span>
                  </div>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    {selectedNode.exam}
                  </p>
                </div>

                {/* Direct connections in network */}
                <div className="mt-4 pt-3 border-t border-[#d4cbc2]/40">
                  <span className="text-[11px] font-semibold text-[#787169] uppercase tracking-wider block mb-2">
                    Estructuras y Vías Relacionadas:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {connectedNodes.length === 0 ? (
                      <span className="text-xs text-[#787169] italic font-sans">Sin enlaces directos</span>
                    ) : (
                      connectedNodes.map(target => (
                        <button
                          key={target.id}
                          onClick={() => selectNodeById(target.id)}
                          className="px-2.5 py-1 rounded-md bg-[#f5efe9] hover:bg-[#ebe3dc] text-[#231f1c] text-xs transition border border-[#d4cbc2]/60 flex items-center gap-1 font-sans cursor-pointer"
                        >
                          <LinkIcon className="w-3 h-3 text-[#787169]" />
                          <span>{target.label}</span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-[#787169] text-xs">
                Selecciona un nodo del grafo para ver sus detalles.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
