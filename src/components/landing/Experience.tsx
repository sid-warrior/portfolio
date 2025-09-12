import { type Experience, experiences } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </div>
    </Container>
  );
}
