import { useEffect, useRef, useState } from 'react';

export default function CelestialMap({
  mapBackground = 'Midnight Blue',
  displayOptions = {
    grid: false,
    lines: true,
    milkyway: true,
    ecliptic: false,
  },
  selectedDate,
  selectedTime = '00:00',
  timezoneOffset = '+00:00',
  latitude = '30.0444',
  longitude = '31.2357',
}) {
  const celestialRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [containerSize, setContainerSize] = useState(0);

  const showMilkyWay = displayOptions.milkyway;
  const showConstellations = displayOptions.lines;
  const showGrid = displayOptions.grid;
  const showPlanets = true;
  const [colorScheme, setColorScheme] = useState('dark');
  const DATE = selectedDate
    ? new Date(selectedDate + 'T' + (selectedTime || '00:00') + ':00' + (timezoneOffset || '+00:00'))
    : new Date();
  const FONT = 'Raleway';

  const colorMap = {
    'Midnight Blue': '#0b1a26',
    Black: '#000000',
    'Dark Blue': '#1e3a5f',
    Teal: '#234955',
    Purple: '#9333ea',
    Mint: '#5eead4',
    Pink: '#ec4899',
    Orange: '#ea580c',
    White: '#ffffff',
    Green: '#16a34a',
    Yellow: '#eab308',
    Indigo: '#4f46e5',
  };

  const bgColor = colorMap[mapBackground] || '#0b1a26';
  const isLightBg =
    mapBackground === 'White' ||
    mapBackground === 'Yellow' ||
    mapBackground === 'Mint';
  const lineColor = isLightBg ? '#000000' : '#ffffff';

  const colorSchemes = {
    dark: {
      background: bgColor,
      constellationLines: lineColor,
      constellationText: lineColor,
      starNames: lineColor,
      planetText: lineColor,
      milkyWay: lineColor,
    },
  };

  const getConfig = (colors) => ({
    container: 'map',
    width: containerSize,
    height: containerSize,
    form: false,
    advanced: false,
    interactive: false,
    disableAnimations: true,
    zoomlevel: null,
    zoomextend: 1,
    projection: 'airy',
    transform: 'equatorial',
    follow: 'zenith',
    geopos: [parseFloat(latitude) || 0, parseFloat(longitude) || 0],
    datapath: '/data/',
    lines: {
      graticule: {
        show: showGrid,
        stroke: colors.constellationLines,
        width: 0.6,
        opacity: 0.8,
      },
      equatorial: { show: false },
      ecliptic: { show: false },
      galactic: { show: false },
      supergalactic: { show: false },
    },
    planets: {
      show: showPlanets,
      which: ['lun'],
      symbols: {
        sol: { symbol: '☉', letter: 'Su', fill: '#ffff00', size: '20' },
        mer: { symbol: '☿', letter: 'Me', fill: '#cccccc', size: '20' },
        ven: { symbol: '♀', letter: 'V', fill: '#eeeecc', size: '20' },
        ter: { symbol: '⊕', letter: 'T', fill: '#00ccff', size: '20' },
        lun: { symbol: '●', letter: 'L', fill: '#ffffff', size: '20' },
        mar: { symbol: '♂', letter: 'Ma', fill: '#ffffff', size: '20' },
        cer: { symbol: '⚳', letter: 'C', fill: '#cccccc', size: '20' },
        ves: { symbol: '⚶', letter: 'Ma', fill: '#cccccc', size: '20' },
        jup: { symbol: '♃', letter: 'J', fill: '#ffaa33', size: '20' },
        sat: { symbol: '♄', letter: 'Sa', fill: '#ffdd66', size: '20' },
        ura: { symbol: '♅', letter: 'U', fill: '#66ccff', size: '20' },
        nep: { symbol: '♆', letter: 'N', fill: '#6666ff', size: '20' },
        plu: { symbol: '♇', letter: 'P', fill: '#aaaaaa', size: '20' },
        eri: { symbol: '⚪', letter: 'E', fill: '#eeeeee', size: '20' },
      },
      symbolStyle: {
        fill: colors.planetText,
        font: 'bold 17px Lucida Sans Unicode, Consolas, sans-serif',
        align: 'center',
        baseline: 'middle',
      },
      symbolType: 'disk',
      names: false,
    },
    dsos: { show: false, names: false },
    constellations: {
      names: false,
      lines: showConstellations,
      lineStyle: { stroke: colors.constellationLines, width: 1, opacity: 0.4 },
    },
    mw: { show: showMilkyWay, style: { fill: colors.milkyWay, opacity: 0.25 } },
    background: {
      fill: colors.background,
      stroke: colors.constellationText,
      opacity: 1,
      width: 2,
    },
    stars: {
      show: true,
      colors: false,
      style: { fill: '#ffffff', opacity: 1 },
      size: false,
      limit: 6,
      exponent: -0.28,
      designation: false,
      propername: false,
    },
  });

  // const constrainSVG = () => {
  //   const mapElement = document.getElementById('map');
  //   const svg = mapElement?.querySelector('svg');
  //   if (svg && mapContainerRef.current) {
  //     svg.removeAttribute('width');
  //     svg.removeAttribute('height');
  //     svg.style.width = '100%';
  //     svg.style.height = '100%';
  //     svg.style.display = 'block';
  //     svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  //     mapElement.style.overflow = 'hidden';
  //   }
  // };

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const size = entries[0].contentRect.width;
      setContainerSize(size);
    });

    resizeObserver.observe(mapContainerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (containerSize === 0) return;

    import('d3-celestial')
      .then((celestialModule) => {
        const Celestial = celestialModule.default.Celestial();
        const colors = colorSchemes.dark;
        const config = getConfig(colors);
        Celestial.display(config);
        Celestial.skyview({ date: DATE });
        celestialRef.current = Celestial;
        setIsInitialized(true);
      })
      .catch((err) => console.error('Error loading celestial:', err));
  }, [containerSize]);

  useEffect(() => {
    if (!isInitialized || !celestialRef.current) return;
    const colors = colorSchemes.dark;
    const config = getConfig(colors);
    const dateObj = DATE;
    celestialRef.current.apply(config);
    celestialRef.current.skyview({ date: dateObj });
  }, [
    mapBackground,
    displayOptions,
    selectedDate,
    selectedTime,
    timezoneOffset,
    latitude,
    longitude,
    isInitialized,
    containerSize,
  ]);

  return (
    <>
      <style jsx>{`
        #map {
          position: relative;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden;
        }

        #map canvas,
        #map svg {
          width: 100% !important;
          height: auto !important;
          display: block;
        }
      `}</style>
      <div
        ref={mapContainerRef}
        id="map"
        className="w-full h-full overflow-hidden"
      />
    </>
  );
}
