'use client';

import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import('@/src/components/SimpleMap'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

function MapCaller(props: any) {
  return <LazyMap {...props} />;
}

export default MapCaller;
