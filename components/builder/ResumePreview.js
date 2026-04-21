'use client'
import { useResumeStore } from '@/store/resumeStore'
import { useEffect, useRef } from 'react'

// Convert stored fileName to displayable URL
function resolvePhotoUrl(photo) {
  if (!photo) return ''
  // Already a full URL or base64
  if (photo.startsWith('http') || photo.startsWith('data:') || photo.startsWith('/')) return photo
  // Just a filename — prepend uploads path
  return `/uploads/${photo}`
}
import ModernTemplate from './templates/ModernTemplate'
import ExecutiveTemplate from './templates/ExecutiveTemplate'
import CreativeTemplate from './templates/CreativeTemplate'
import ProfessionalTemplate from './templates/ProfessionalTemplate'
import ElegantTemplate from './templates/ElegantTemplate'
import TechTemplate from './templates/TechTemplate'
import CompactTemplate from './templates/CompactTemplate'
import BoldTemplate from './templates/BoldTemplate'
import NeonTemplate from './templates/NeonTemplate'
import SplitTemplate from './templates/SplitTemplate'
import InfographicTemplate from './templates/InfographicTemplate'
import TimelineTemplate from './templates/TimelineTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import { StripeTemplate, SidebarRightTemplate, GradientTemplate, CardGridTemplate, MonochromeTemplate, PastelTemplate, DarkProTemplate, NewspaperTemplate } from './templates/TemplatesBatch1'
import { RetroTemplate, HexagonTemplate, ZigzagTemplate, FrostedTemplate, AccentBottomTemplate, DotMatrixTemplate, OrigamiTemplate } from './templates/TemplatesBatch2'
import { ArchitectTemplate, WatercolorTemplate, NeonSidebarTemplate, MinimalistProTemplate, ColorblockTemplate, ScandiTemplate } from './templates/TemplatesBatch3'
import { BrutalistTemplate, SoftCorporateTemplate, CyberTemplate, TrifoldTemplate, MosaicTemplate, InkTemplate } from './templates/TemplatesBatch4'
import { AmberTemplate, ForestTemplate, OceanTemplate, RoseTemplate, SlateTemplate } from './templates/TemplatesBatch5'
import { IndigoTemplate, CrimsonTemplate, TealTemplate, MidnightTemplate, SunriseTemplate, LavenderTemplate, CopperTemplate, MintTemplate, CharcoalTemplate, CobaltTemplate } from './templates/TemplatesBatch6'
import { DecoTemplate, NeonGridTemplate, LinenTemplate, PrismTemplate, StackedTemplate, NeonMinimalTemplate, CoralTemplate, SageTemplate } from './templates/TemplatesBatch7'
import { IvoryTemplate, SteelTemplate, PlumTemplate, JadeTemplate, GraphiteTemplate, BlushTemplate, OnyxTemplate, TerracottaTemplate, ArcticTemplate, VelvetTemplate, EmeraldTemplate, SapphireTemplate, RubyTemplate, TopazTemplate, OpalTemplate, GarnetTemplate, CitrineTemplate, AmethystTemplate, TurquoiseTemplate, PearlTemplate, BronzeTemplate, SilverTemplate, GoldTemplate, PlatinumTemplate, DiamondTemplate, ObsidianTemplate, MalachiteTemplate, CoralReefTemplate, AzureTemplate, MarigoldTemplate, LilacTemplate, PeachTemplate, SkyTemplate, DawnTemplate, DuskTemplate, NightTemplate, TwilightTemplate } from './templates/TemplatesBatch8'
import { QuantumTemplate, AtlasTemplate, NexusTemplate, MeridianTemplate, VertexTemplate, ZenithTemplate, PraxisTemplate, SolarisTemplate, CipherTemplate, LuminaTemplate } from './templates/TemplatesPro'
import { AuroraTemplate, MagazineTemplate, CircuitTemplate, CanvasTemplate, MetroTemplate, FoldTemplate, ClassicTableTemplate } from './templates/TemplatesNew'
import { RibbonTemplate, GlassProTemplate, NordicTemplate, BoldBlocksTemplate, SpotlightTemplate, TimelineProTemplate } from './templates/TemplatesNew3'
import { DuotoneTemplate, PassportTemplate, TerminalTemplate, BlueprintTemplate, InfoPanelTemplate, VintageTemplate, GradientFlowTemplate, SidebarAccentTemplate, HexGridTemplate, CleanCorporateTemplate } from './templates/TemplatesNew4'
import { BlossomTemplate, MistTemplate, MeadowTemplate, GoldenAgeTemplate, FrostTemplate, VividTemplate, NavyProTemplate, HexFolioTemplate, TealCardTemplate, CrimsonSideTemplate, CoralBoxTemplate, CleanListTemplate, SimpleDocTemplate, TimelineSideTemplate, DotFlowTemplate, OceanCardTemplate, NavyBlockTemplate, RightNameTemplate, BlackBoxTemplate, SplitCleanTemplate, DarkPanelTemplate, AccentBarTemplate, StripEdgeTemplate, TopBandTemplate, CornerPhotoTemplate, LabelRowTemplate, VelvetRoseTemplate, ManuscriptTemplate } from './templates/TemplatesNew5'
import { ZenTemplate, CharcoalSideTemplate, CinemaTemplate, ArchiveTemplate, PrismaTemplate, NorthTemplate, StudioTemplate, LegacyTemplate, SpectrumTemplate, MonolithTemplate } from './templates/TemplatesNew6'
import AuroraProTemplate from './templates/AuroraProTemplate'
import PetalTemplate from './templates/PetalTemplate'
import FoldioTemplate from './templates/FoldioTemplate'
import NightOwlTemplate from './templates/NightOwlTemplate'
import GeometricTemplate from './templates/GeometricTemplate'
import WaveFlowTemplate from './templates/WaveFlowTemplate'
import TidalTemplate from './templates/TidalTemplate'
import CrestTemplate from './templates/CrestTemplate'
import MidwaveTemplate from './templates/MidwaveTemplate'
import TagStormTemplate from './templates/TagStormTemplate'
import CardDeckTemplate from './templates/CardDeckTemplate'
import TriwaveTemplate from './templates/TriwaveTemplate'
import RippleTemplate from './templates/RippleTemplate'
import SurgeTemplate from './templates/SurgeTemplate'
import RippleBgTemplate from './templates/RippleBgTemplate'
import SlashTemplate from './templates/SlashTemplate'
import BubbleSkillTemplate from './templates/BubbleSkillTemplate'
import ParaTagTemplate from './templates/ParaTagTemplate'
import AccentBarTemplate2 from './templates/AccentBarTemplate2'
import RunwayTemplate from './templates/RunwayTemplate'
import HoneycombTemplate from './templates/HoneycombTemplate'
import ConstellationTemplate from './templates/ConstellationTemplate'
import PaperFoldTemplate from './templates/PaperFoldTemplate'
import NeonOutlineTemplate from './templates/NeonOutlineTemplate'
import LuminaryTemplate from './templates/LuminaryTemplate'
import EditorialTemplate from './templates/EditorialTemplate'
import GoldenTemplate from './templates/GoldenTemplate'
import MosaicProTemplate from './templates/MosaicProTemplate'
import PrismProTemplate from './templates/PrismProTemplate'
import CornerAccentTemplate from './templates/CornerAccentTemplate'
import StackedBandsTemplate from './templates/StackedBandsTemplate'
import FrameTemplate from './templates/FrameTemplate'
import StripeBoldTemplate from './templates/StripeBoldTemplate'
import MyTemplate from './templates/MyTemplate'
import CleanProTemplate from './templates/CleanProTemplate'
import Tempbar2 from './templates/tempbar2';
import LuxuryGoldTemplate from './templates/luxuryGold';
import MinimalEleganceTemplate from './templates/minimalElegance';
import SoftAuroraTemplate from './templates/softAurora';
import AquaFlowTemplate from './templates/aquaFlow';
import ClassicLuxeTemplate from './templates/classicLuxe';
import ModernEdgeTemplate from './templates/modernEdge';
import TimelineFlowTemplate from './templates/timelineFlow';
import GalacticAuroraTemplate from './templates/galacticAurora';
import CodeCanvasTemplate from './templates/codeCanvas';
import CrystalClearTemplate from './templates/crystalClear';
import PearlEleganceTemplate from './templates/pearlElegance';

export const templateMap = {
  modern: ModernTemplate,
  executive: ExecutiveTemplate,
  creative: CreativeTemplate,
  professional: ProfessionalTemplate,
  elegant: ElegantTemplate,
  tech: TechTemplate,
  compact: CompactTemplate,
  bold: BoldTemplate,
  neon: NeonTemplate,
  split: SplitTemplate,
  infographic: InfographicTemplate,
  timeline: TimelineTemplate,
  minimal: MinimalTemplate,
  stripe: StripeTemplate,
  sidebarright: SidebarRightTemplate,
  gradient: GradientTemplate,
  cardgrid: CardGridTemplate,
  monochrome: MonochromeTemplate,
  pastel: PastelTemplate,
  darkpro: DarkProTemplate,
  newspaper: NewspaperTemplate,
  retro: RetroTemplate,
  hexagon: HexagonTemplate,
  zigzag: ZigzagTemplate,
  frosted: FrostedTemplate,
  accentbottom: AccentBottomTemplate,
  dotmatrix: DotMatrixTemplate,
  origami: OrigamiTemplate,
  architect: ArchitectTemplate,
  watercolor: WatercolorTemplate,
  neonsidebar: NeonSidebarTemplate,
  minimalistpro: MinimalistProTemplate,
  colorblock: ColorblockTemplate,
  scandi: ScandiTemplate,
  brutalist: BrutalistTemplate,
  softcorporate: SoftCorporateTemplate,
  cyber: CyberTemplate,
  trifold: TrifoldTemplate,
  mosaic: MosaicTemplate,
  ink: InkTemplate,
  amber: AmberTemplate,
  forest: ForestTemplate,
  ocean: OceanTemplate,
  rose: RoseTemplate,
  slate: SlateTemplate,
  indigo: IndigoTemplate,
  crimson: CrimsonTemplate,
  teal: TealTemplate,
  midnight: MidnightTemplate,
  sunrise: SunriseTemplate,
  lavender: LavenderTemplate,
  copper: CopperTemplate,
  mint: MintTemplate,
  charcoal: CharcoalTemplate,
  cobalt: CobaltTemplate,
  deco: DecoTemplate,
  neongrid: NeonGridTemplate,
  linen: LinenTemplate,
  prism: PrismTemplate,
  stacked: StackedTemplate,
  neonminimal: NeonMinimalTemplate,
  coral: CoralTemplate,
  sage: SageTemplate,
  ivory: IvoryTemplate,
  steel: SteelTemplate,
  plum: PlumTemplate,
  jade: JadeTemplate,
  graphite: GraphiteTemplate,
  blush: BlushTemplate,
  onyx: OnyxTemplate,
  terracotta: TerracottaTemplate,
  arctic: ArcticTemplate,
  velvet: VelvetTemplate,
  emerald: EmeraldTemplate,
  sapphire: SapphireTemplate,
  ruby: RubyTemplate,
  topaz: TopazTemplate,
  opal: OpalTemplate,
  garnet: GarnetTemplate,
  citrine: CitrineTemplate,
  amethyst: AmethystTemplate,
  turquoise: TurquoiseTemplate,
  pearl: PearlTemplate,
  bronze: BronzeTemplate,
  silver: SilverTemplate,
  gold: GoldTemplate,
  platinum: PlatinumTemplate,
  diamond: DiamondTemplate,
  obsidian: ObsidianTemplate,
  malachite: MalachiteTemplate,
  coralreef: CoralReefTemplate,
  azure: AzureTemplate,
  marigold: MarigoldTemplate,
  lilac: LilacTemplate,
  peach: PeachTemplate,
  sky: SkyTemplate,
  dawn: DawnTemplate,
  dusk: DuskTemplate,
  night: NightTemplate,
  twilight: TwilightTemplate,
  quantum: QuantumTemplate,
  atlas: AtlasTemplate,
  nexus: NexusTemplate,
  meridian: MeridianTemplate,
  vertex: VertexTemplate,
  zenith: ZenithTemplate,
  praxis: PraxisTemplate,
  solaris: SolarisTemplate,
  cipher: CipherTemplate,
  lumina: LuminaTemplate,
  aurora: AuroraTemplate,
  magazine: MagazineTemplate,
  circuit: CircuitTemplate,
  canvas: CanvasTemplate,
  metro: MetroTemplate,
  fold: FoldTemplate,
  classictable: ClassicTableTemplate,
  ribbon: RibbonTemplate,
  glasspro: GlassProTemplate,
  nordic: NordicTemplate,
  boldblocks: BoldBlocksTemplate,
  spotlight: SpotlightTemplate,
  timelinepro: TimelineProTemplate,
  duotone: DuotoneTemplate,
  passport: PassportTemplate,
  terminal: TerminalTemplate,
  blueprint: BlueprintTemplate,
  infopanel: InfoPanelTemplate,
  vintage: VintageTemplate,
  gradientflow: GradientFlowTemplate,
  sidebaraccent: SidebarAccentTemplate,
  hexgrid: HexGridTemplate,
  cleancorporate: CleanCorporateTemplate,
  blossom: BlossomTemplate,
  mist: MistTemplate,
  meadow: MeadowTemplate,
  goldenage: GoldenAgeTemplate,
  frost: FrostTemplate,
  vivid: VividTemplate,
  navypro: NavyProTemplate,
  hexfolio: HexFolioTemplate,
  tealcard: TealCardTemplate,
  crimsonside: CrimsonSideTemplate,
  coralbox: CoralBoxTemplate,
  cleanlist: CleanListTemplate,
  simpledoc: SimpleDocTemplate,
  timelineside: TimelineSideTemplate,
  dotflow: DotFlowTemplate,
  oceancard: OceanCardTemplate,
  navyblock: NavyBlockTemplate,
  rightname: RightNameTemplate,
  blackbox: BlackBoxTemplate,
  splitclean: SplitCleanTemplate,
  darkpanel: DarkPanelTemplate,
  accentbar: AccentBarTemplate,
  stripedge: StripEdgeTemplate,
  topband: TopBandTemplate,
  cornerphoto: CornerPhotoTemplate,
  labelrow: LabelRowTemplate,
  velvetrose: VelvetRoseTemplate,
  manuscript: ManuscriptTemplate,
  zen: ZenTemplate,
  charcoalside: CharcoalSideTemplate,
  cinema: CinemaTemplate,
  archive: ArchiveTemplate,
  prisma: PrismaTemplate,
  north: NorthTemplate,
  studio: StudioTemplate,
  legacy: LegacyTemplate,
  spectrum: SpectrumTemplate,
  monolith: MonolithTemplate,
  aurorapro: AuroraProTemplate,
  petal: PetalTemplate,
  foldio: FoldioTemplate,
  nightowl: NightOwlTemplate,
  geometric: GeometricTemplate,
  waveflow: WaveFlowTemplate,
  tidal: TidalTemplate,
  crest: CrestTemplate,
  midwave: MidwaveTemplate,
  tagstorm: TagStormTemplate,
  carddeck: CardDeckTemplate,
  triwave: TriwaveTemplate,
  ripple: RippleTemplate,
  surge: SurgeTemplate,
  ripplebg: RippleBgTemplate,
  slash: SlashTemplate,
  bubbleskill: BubbleSkillTemplate,
  paratag: ParaTagTemplate,
  accentbar2: AccentBarTemplate2,
  runway: RunwayTemplate,
  honeycomb: HoneycombTemplate,
  constellation: ConstellationTemplate,
  paperfold: PaperFoldTemplate,
  neonoutline: NeonOutlineTemplate,
  luminary: LuminaryTemplate,
  editorial: EditorialTemplate,
  golden: GoldenTemplate,
  mosaicpro: MosaicProTemplate,
  prismpro: PrismProTemplate,
  corneraccent: CornerAccentTemplate,
  stackedbands: StackedBandsTemplate,
  frame: FrameTemplate,
  stripebold: StripeBoldTemplate,
  mytemplate: MyTemplate,
  cleanpro: CleanProTemplate,
   tempbar2: Tempbar2,
  luxurygold: LuxuryGoldTemplate, 
  minimalelegance: MinimalEleganceTemplate,
   softaurora: SoftAuroraTemplate,
     aquaflow: AquaFlowTemplate,
       classicluxe: ClassicLuxeTemplate,
         modernedge: ModernEdgeTemplate,
           timelineflow: TimelineFlowTemplate,
             galacticaurora: GalacticAuroraTemplate,
               codecanvas: CodeCanvasTemplate,
                crystalclear: CrystalClearTemplate,
                  pearlelegance: PearlEleganceTemplate,
 }

export default function ResumePreview() {
  const { resume } = useResumeStore()
  const Template = templateMap[resume.template] || ModernTemplate
  const resumeRef = useRef(null)
  const wrapperRef = useRef(null)

  const RESUME_W = 794

  // Scale resume to fit container on mobile
  useEffect(() => {
    function applyScale() {
      const el = resumeRef.current
      const wrapper = wrapperRef.current
      if (!el || !wrapper) return
      const containerW = wrapper.offsetWidth
      if (containerW > 0 && containerW < RESUME_W) {
        const scale = containerW / RESUME_W
        el.style.transform = `scale(${scale})`
        el.style.transformOrigin = 'top left'
        // Set wrapper height to match scaled content height
        const scaledH = el.scrollHeight * scale
        wrapper.style.height = `${scaledH}px`
      } else {
        el.style.transform = 'scale(1)'
        el.style.transformOrigin = 'top left'
        wrapper.style.height = 'auto'
      }
    }

    // Small delay to let DOM render first
    const t = setTimeout(applyScale, 50)
    const observer = new ResizeObserver(applyScale)
    if (wrapperRef.current) observer.observe(wrapperRef.current)
    return () => { clearTimeout(t); observer.disconnect() }
  }, [resume.template, resume])

  // Convert stored fileName to full URL for display
  const resolvedResume = {
    ...resume,
    interests: resume.interests || [],
    data: {
      ...resume.data,
      personalInfo: {
        ...resume.data?.personalInfo,
        photo: resolvePhotoUrl(resume.data?.personalInfo?.photo),
      },
    },
    personalInfo: {
      ...resume.personalInfo,
      photo: resolvePhotoUrl(resume.personalInfo?.photo),
    },
  }

  return (
    <div style={{
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      background: '#d1d5db',
      borderRadius: 12,
      padding: 8,
      boxSizing: 'border-box',
    }}>
      {/* Wrapper — measures available width, height adjusts to scaled content */}
      <div ref={wrapperRef} style={{ width: '100%', maxWidth: RESUME_W, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        <div
          ref={resumeRef}
          id="resume-preview"
          style={{
            background: 'white',
            boxShadow: '0 4px 40px rgba(0,0,0,0.35)',
            borderRadius: 2,
            width: `${RESUME_W}px`,
            minHeight: '1123px',
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          <Template resume={resolvedResume} />
        </div>
      </div>
    </div>
  )
}
