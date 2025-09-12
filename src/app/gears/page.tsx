import Container from '@/components/common/Container';
import Monitor from '@/components/svgs/devices/Monitor';
import { Separator } from '@/components/ui/separator';
import { devices, software, webExtensions } from '@/config/Gears';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { ArrowUpRight, Puzzle } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/gears'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function GearsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Gears
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            My gears and tools i use to get my work done.
          </p>
        </div>
        <Separator />

        {/* Devices Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Devices</h2>
          <div className="flex flex-col flex-wrap gap-4">
            {devices.map((device) => (
              <div key={device.name} className="flex items-center gap-4">
                <div className="p-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10">
                  {device.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm text-secondary">{device.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Extensions Section */}
        <div className="space-y-4 pt-10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10">
              <Puzzle className="size-4" />
            </div>
            <h2 className="text-2xl font-semibold">Web Extensions</h2>
          </div>
          <div className="flex flex-col flex-wrap gap-4 mt-8">
            {webExtensions.map((extension, index) => (
              <div key={extension.name} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10">
                    <span className="text-sm text-secondary">{index + 1}</span>
                  </div>
                  <h3 className="text-sm text-secondary flex items-center gap-1 ml-4">
                    <Link target="_blank" href={extension.href}>
                      {extension.name}
                    </Link>
                    <ArrowUpRight className="size-4" />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Section */}
        <div className="space-y-4 pt-10">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10">
              <Monitor className="size-4" />
            </div>
            <h2 className="text-2xl font-semibold">Software</h2>
          </div>
          <div className="flex flex-col flex-wrap gap-4 mt-8">
            {software.map((app, index) => (
              <div key={app.name} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10">
                    <span className="text-sm text-secondary">
                      {(index + 1).toString()}
                    </span>
                  </div>
                  <h3 className="text-sm text-secondary ml-4 flex items-center gap-1">
                    <Link target="_blank" href={app.href}>
                      {app.name}
                    </Link>
                    <ArrowUpRight className="size-4" />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
