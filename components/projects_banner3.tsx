'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import BannerImage from '/public/images/Banner3.png';

export default function Stats() {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative pt-10 md:pt-20 mt-12 mb-20">
      {/* Add space above the image */}
      <div className="max-w-800 mx-auto px-200 sm:px-0 mt-12 mb-30">
        <div className="relative">
          <Image src={BannerImage} alt="Banner Image" layout="responsive" className="w-full" />
        </div>
      </div>
    </section>
  );
}
